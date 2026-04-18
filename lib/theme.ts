export const theme = {
  bg: '#F5F1EA',
  bgAlt: '#ECE5D8',
  ink: '#1F2B23',
  inkSoft: '#3D4A40',
  muted: '#7A7568',
  border: 'rgba(31, 43, 35, 0.15)',
  accent: '#C45A3B',
  accentInk: '#FCF8F1',
  cardBg: '#FCF8F1',
  fontDisplay: '"Instrument Serif", "Times New Roman", serif',
  fontBody: '"Inter Tight", -apple-system, system-ui, sans-serif',
  fontMono: '"JetBrains Mono", "SF Mono", monospace',
  radius: 4,
} as const;

export type Theme = typeof theme;
