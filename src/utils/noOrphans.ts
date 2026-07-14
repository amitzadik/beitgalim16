const LAST_WORD_SPACE = /(\S+)\s+(\S+)$/;

export function noOrphans(text: string) {
  return text.trim().replace(LAST_WORD_SPACE, "$1\u00a0$2");
}
