import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/** עוטף תוכן ברוחב מקסימלי אחיד עם ריפוד צדדי רספונסיבי. */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${styles.container} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
