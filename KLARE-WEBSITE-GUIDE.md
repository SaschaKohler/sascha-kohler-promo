# KLARE Method Website Guide

This guide explains the structure of the KLARE Method website and how to maintain/update it.

## Site Structure

The website uses Next.js with the App Router structure:

```
/src/app/
  ├── (with-navigation)/    # Pages that use the site navigation
  │   ├── datenschutz/      # Privacy policy
  │   ├── home/             # Home page
  │   ├── impressum/        # Imprint
  │   ├── klare-methode/    # KLARE Method page
  │   ├── klare-selbstcheck/# Self-check tool
  │   ├── kongruenz-methode/# Kongruenz Method page
  │   └── lebensrad/        # Life Wheel page
  │
  ├── layout.tsx            # Root layout (includes metadata)
  └── page.tsx              # Redirects to /home
```

Each page within the `(with-navigation)` directory uses a shared layout with the site navigation and footer.

## Components

The KLARE Method components are in `/src/components/klare-methode/`:

- `KlareMethodeShowcase.tsx` - Main page content
- `AppScreenshots.tsx` - Interactive screenshot carousel
- `FeatureBox.tsx` - Feature display box
- `FeedbackForm.tsx` - User feedback form
- `AppMockup.tsx` - Mockup of the app (as fallback)

## App Screenshots

App screenshots should be placed in `/public/images/klare-app/`:

1. `lebensrad.png` - Life Wheel screen
2. `home.png` - Home screen
3. `klare-method.png` - KLARE Method screen
4. `profile.png` - Profile screen
5. `welcome.png` - Welcome/login screen

The website is designed to work with placeholder images until real screenshots are provided.

## Color Scheme

The KLARE Method uses specific colors for each step:

- K (Klarheit): #6366F1 (Indigo)
- L (Lebendigkeit): #8B5CF6 (Violet)
- A (Ausrichtung): #EC4899 (Pink)
- R (Realisierung): #F59E0B (Amber)
- E (Entfaltung): #10B981 (Emerald)

These colors are used consistently throughout the website to maintain the KLARE brand identity.

## Adding New Pages

To add a new page to the site:

1. Create a new directory in `/src/app/(with-navigation)/`
2. Add a `page.tsx` file with your content
3. Update the navigation links in `/src/components/layout/SiteNavigation.tsx`

## Modifying the KLARE Method Page

To update the KLARE Method showcase:

1. Edit `/src/components/klare-methode/KlareMethodeShowcase.tsx`
2. For major changes, consider creating new components in the `/src/components/klare-methode/` directory

## Future Enhancements

Consider implementing:

1. A more interactive Lebensrad tool on the website
2. Blog/articles about the KLARE Method
3. Integration with the app (deep linking)
4. User testimonials section
5. Case studies demonstrating the KLARE Method's effectiveness

## Deployment

The site is designed to work with standard Next.js deployment methods (Vercel, Netlify, etc.).
