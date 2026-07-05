export const COLORS = {
  primary: '#1B4332',
  secondary: '#1D3557',
  accent: '#D4A017',

  background: '#F8FAFC',
  surface: '#FFFFFF',

  text: '#0F172A',
  muted: '#64748B',

  success: '#16A34A',
  warning: '#F59E0B',
  error: '#DC2626',

  border: '#E2E8F0',
} as const;

export const SHADOWS = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',

  md: '0 4px 12px rgba(0,0,0,0.08)',

  lg: '0 12px 24px rgba(0,0,0,0.12)',

  xl: '0 20px 40px rgba(0,0,0,0.15)',
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
    'linear-gradient(135deg, #1B4332 0%, #1D3557 100%)',

  cta:
    'linear-gradient(135deg, #1B4332 0%, #D4A017 100%)',
} as const;

export const TYPOGRAPHY = {
  heading: 'Poppins, sans-serif',

  body: 'system-ui, sans-serif',
} as const;