# Bali Bliss Weddings — Mobile App

React Native / Expo mobile app for the Bali Bliss Weddings platform.

## Structure

```
mobile/
├── app/                    # Expo Router pages
│   ├── (tabs)/             # Main tab navigation
│   │   ├── index.tsx       # Discover / Home
│   │   ├── vendors.tsx     # Vendor directory
│   │   ├── blissbook.tsx   # Wedding planning workbook
│   │   ├── gallery.tsx     # Wedding gallery
│   │   └── profile.tsx     # Profile & settings
│   ├── (auth)/             # Auth screens
│   │   └── login.tsx
│   └── _layout.tsx         # Root layout (fonts, providers)
├── constants/
│   ├── Colors.ts           # Design tokens (matches web)
│   ├── Typography.ts       # Font families & sizes
│   └── Brand.ts            # Brand info & API base URL
├── lib/
│   ├── api.ts              # Axios API client
│   └── queryClient.ts      # TanStack Query client
└── assets/
    ├── images/             # App icons & splash
    └── fonts/              # Custom fonts (if local)
```

## Setup

```bash
cd mobile
npm install
npx expo start
```

## Connected to

- **GitHub**: https://github.com/TougfGunner/Bali-Bliss-Weddings
- **Backend API**: https://baliblissweddings.com/api
- **Web platform**: Same monorepo, root folder

## Design System

Fonts, colors, and branding match the web platform:
- **Display**: Playfair Display (matches web Canela/serif)
- **Sans**: Montserrat (same as web)
- **Accent**: Raleway, Great Vibes script
- **Colors**: Editorial Black `#171717`, Gold `#C9A84C`, Cream `#F5F0EA`

## Running on Device

Use Expo Go or build with EAS:

```bash
# Development
npx expo start

# Build for production
npx eas build --platform all
```
