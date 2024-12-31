import type { Preview } from '@storybook/react'

import '../src/App.styles.css'
import * as themes from './themes'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'dark',
          value: themes.brand.appContentBg,
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.brand,
    },
  },
}

export default preview
