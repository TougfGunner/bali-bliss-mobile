export const Colors = {
  editorial: {
    black: '#171717',
    gold: '#C9A84C',
    cream: '#F5F0EA',
    charcoal: '#333333',
    ivory: '#FDFAF6',
    blush: '#F2D4D4',
    sage: '#C5D5C5',
    taupe: '#C4B5A5',
  },
  brand: {
    primary: '#1f2937',
    secondary: '#6B7280',
    accent: '#C9A84C',
  },
  theme: {
    blushRomance: {
      primary: '#F4C5C5',
      secondary: '#F9E0E0',
      text: '#5C3A3A',
    },
    sageGarden: {
      primary: '#C5D5C5',
      secondary: '#E0EDE0',
      text: '#2E4A2E',
    },
    lavenderDreams: {
      primary: '#D4BEED',
      secondary: '#EAE0F5',
      text: '#3C2A5A',
    },
    roseGold: {
      primary: '#F0C8B0',
      secondary: '#F8E4D8',
      text: '#5A3020',
    },
    mintGold: {
      primary: '#B0DDD4',
      secondary: '#D8F0EC',
      text: '#1A4A42',
    },
  },
  ui: {
    white: '#FFFFFF',
    offWhite: '#FAFAFA',
    lightGray: '#F3F4F6',
    mediumGray: '#9CA3AF',
    darkGray: '#374151',
    border: '#E5E7EB',
    shadow: 'rgba(0,0,0,0.08)',
  },
  status: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
};

export type ThemeName = keyof typeof Colors.theme;
