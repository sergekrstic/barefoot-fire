/** @type {import('tailwindcss').Config} */
import { background } from '@storybook/theming'

import colors from 'tailwindcss/colors'

/*
 * Tailwind Color Palette
 *
 * - Neutrals
 *   - Slate
 *   - Gray
 *   - Zinc
 *   - Neutral
 *   - Stone
 *
 * - Colors
 *   - Red
 *   - Orange
 *   - Amber
 *   - Yellow
 *   - Lime
 *   - Green
 *   - Emerald
 *   - Teal
 *   - Cyan
 *   - Sky
 *   - Blue
 *   - Indigo
 *   - Violet
 *   - Purple
 *   - Fuchsia
 *   - Pink
 *   - Rose
 */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Maybe we can override the colors here, and define them ourselves
    // colors: {},
    extend: {
      colors: {
        // Bootstrap Colors Naming Convention
        // primary
        // secondary
        // neutral
        // success
        // info
        // warning
        // danger
        // light
        // dark

        // Colour hierarchy to encourage action and focus
        background: colors.stone[800], // slate, gray, zinc, neutral, stone
        base: colors.violet[500], // purple, violet, indigo
        accent: colors.amber[500], // amber, yellow, orange

        // Purple and gold
        purpleMain: '#60267F',
        purpleLight: '#9A54BC',
        purpleDark: '#2B0236',
        goldMain: '#F6EA04',
        goldDark: '#C19809',
      },
    },
  },
  plugins: [],
}
