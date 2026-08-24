export const COLORS = {
  primary: 'var(--color-primary)',
  secondary: 'var(--color-primary-dark)',
  accent: 'var(--color-accent)',

  background: 'var(--color-background)',
  surface: 'var(--color-surface)',

  text: 'var(--color-text)',
  muted: 'var(--color-text-muted)',

  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',

  border: 'var(--color-border)',
} as const;

export const SHADOWS = {
  sm: 'var(--shadow-soft)',

  md: 'var(--shadow-soft)',

  lg: 'var(--shadow-card)',

  xl: 'var(--shadow-card)',
} as const;

export const RADIUS = {
  sm: '8px',

  md: '12px',

  lg: '16px',

  xl: '24px',

  full: '9999px',
} as const;

export const SPACING = {
  xs: '4px',

  sm: '8px',

  md: '16px',

  lg: '24px',

  xl: '32px',

  '2xl': '48px',

  '3xl': '64px',
} as const;

export const GRADIENTS = {
  hero:
    'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',

  cta:
    'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
} as const;

export const TYPOGRAPHY = {
  heading: 'Poppins, sans-serif',

  body: 'system-ui, sans-serif',
} as const;