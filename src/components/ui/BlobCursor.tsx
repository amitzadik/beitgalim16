"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BlobCursor.module.css";

const INTERACTION_DISTANCE = 118;
const MERGE_DISTANCE = 74;
const LERP = 0.22;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function BlobCursor() {
  const layerRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const bubbles = useRef<HTMLElement[]>([]);
  const hasPosition = useRef(false);
  const lastMerging = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [merging, setMerging] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    setEnabled(true);

    const refreshBubbles = () => {
      bubbles.current = Array.from(
        document.querySelectorAll<HTMLElement>("[data-blob-bubble='true']")
      );
    };

    const setPointerPosition = (x: number, y: number) => {
      target.current.x = x;
      target.current.y = y;

      if (!hasPosition.current) {
        hasPosition.current = true;
        current.current.x = x;
        current.current.y = y;
        setReady(true);
      }
    };

    refreshBubbles();
    const resizeObserver = new ResizeObserver(refreshBubbles);
    bubbles.current.forEach((bubble) => resizeObserver.observe(bubble));

    const onPointerMove = (event: PointerEvent) => {
      setPointerPosition(event.clientX, event.clientY);
    };

    const onMouseMove = (event: MouseEvent) => {
      setPointerPosition(event.clientX, event.clientY);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        refreshBubbles();
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", refreshBubbles);
    document.addEventListener("visibilitychange", onVisibilityChange);

    let frame = 0;
    const animate = () => {
      const layer = layerRef.current;

      if (layer && hasPosition.current) {
        current.current.x += (target.current.x - current.current.x) * LERP;
        current.current.y += (target.current.y - current.current.y) * LERP;

        let nearestDistance = Number.POSITIVE_INFINITY;
        let nearestX = current.current.x;
        let nearestY = current.current.y;

        for (const bubble of bubbles.current) {
          const rect = bubble.getBoundingClientRect();
          const bubbleX = rect.left + rect.width / 2;
          const bubbleY = rect.top + rect.height / 2;
          const distance = Math.hypot(bubbleX - current.current.x, bubbleY - current.current.y);

          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestX = bubbleX;
            nearestY = bubbleY;
          }
        }

        const influence = clamp(1 - nearestDistance / INTERACTION_DISTANCE, 0, 1);
        const pull = influence * 0.34;
        const x = current.current.x + (nearestX - current.current.x) * pull;
        const y = current.current.y + (nearestY - current.current.y) * pull;
        const dx = nearestX - x;
        const dy = nearestY - y;
        const angle = Math.atan2(dy, dx);
        const bridgeLength = Math.max(0, Math.min(nearestDistance, INTERACTION_DISTANCE));
        const isMerging = nearestDistance < MERGE_DISTANCE;

        layer.style.setProperty("--cursor-x", `${x}px`);
        layer.style.setProperty("--cursor-y", `${y}px`);
        layer.style.setProperty("--blob-scale", `${1 + influence * 0.55}`);
        layer.style.setProperty("--blob-rot", `${-14 + influence * 34}deg`);
        layer.style.setProperty("--bridge-angle", `${angle}rad`);
        layer.style.setProperty("--bridge-length", `${bridgeLength}px`);
        layer.style.setProperty("--bridge-opacity", `${influence}`);
        layer.style.setProperty("--sat-scale", `${1 - influence * 0.56}`);
        layer.style.setProperty("--sat-x", `${24 - influence * 18}px`);
        layer.style.setProperty("--sat-y", `${-20 + influence * 14}px`);
        layer.style.setProperty("--sat2-x", `${-26 + influence * 17}px`);
        layer.style.setProperty("--sat2-y", `${21 - influence * 13}px`);

        if (lastMerging.current !== isMerging) {
          lastMerging.current = isMerging;
          setMerging(isMerging);
        }
      }

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", refreshBubbles);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      resizeObserver.disconnect();
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={layerRef}
      className={`${styles.cursorLayer} ${ready ? styles.ready : ""} ${
        merging ? styles.merging : ""
      }`}
      aria-hidden="true"
    >
      <span className={styles.bridge} />
      <span className={styles.satellite} />
      <span className={`${styles.satellite} ${styles.satelliteTwo}`} />
      <span className={styles.blob} />
    </div>
  );
}
