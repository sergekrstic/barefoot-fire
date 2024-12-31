import { ThemeVarsPartial, create } from '@storybook/theming'
import { themes } from '@storybook/theming'

// @ts-expect-error - ignore esModuleInterop error
import twColors from 'tailwindcss/colors'

const brandDetails: Omit<ThemeVarsPartial, 'base'> = {
  brandTitle: 'Barefoot FIRE',
  brandUrl: 'https://example.com',
  // Todo: create an image 350x150 pixels
  // brandImage: 'https://i.postimg.cc/pLp2tZjx/icons8-green-64.png',
  brandTarget: '_self',
}

export const normal = themes.normal

export const light = create({
  ...brandDetails,

  base: 'light',

  // ########################################################
  // Default colors (from themes.light)
  // ########################################################

  colorPrimary: '#FF4785',
  colorSecondary: '#029CFD',

  // ====================================
  // UI
  // ====================================
  // appBg: '#F6F9FC',
  // appContentBg: '#FFFFFF',
  // appPreviewBg: '#FFFFFF',
  // appBorderColor: 'hsla(203, 50%, 30%, 0.15)',
  // appBorderRadius: 4,

  // ====================================
  // Typography
  // ====================================
  // fontBase: '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  // fontCode: 'ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace',

  // ====================================
  // Text colors
  // ====================================
  // textColor: '#2E3438',
  // textInverseColor: '#FFFFFF',
  // textMutedColor: '#5C6870',

  // ====================================
  // Toolbar default and active colors
  // ====================================
  // barTextColor: '#73828C',
  // barHoverColor: '#029CFD',
  // barSelectedColor: '#029CFD',
  // barBg: '#FFFFFF',

  // ====================================
  // Form colors
  // ====================================
  // buttonBg: '#F6F9FC',
  // buttonBorder: '#D9E8F2',
  // booleanBg: '#ECF4F9',
  // booleanSelectedBg: '#FFFFFF',

  // inputBg: '#FFFFFF',
  // inputBorder: 'hsla(203, 50%, 30%, 0.15)',
  // inputTextColor: '#2E3438',
  // inputBorderRadius: 4,
})

export const dark = create({
  ...brandDetails,

  base: 'dark',

  // ########################################################
  // Default colors (from themes.dark)
  // ########################################################

  // colorPrimary: '#FF4785',
  // colorSecondary: '#029CFD',

  // ====================================
  // UI
  // ====================================
  // appBg: '#222425',
  // appContentBg: '#1B1C1D',
  // appPreviewBg: '#FFFFFF',
  // appBorderColor: 'rgba(255,255,255,.1)',
  // appBorderRadius: 4,

  // ====================================
  // Typography
  // ====================================
  // fontBase: '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  // fontCode: 'ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace',

  // ====================================
  // Text colors
  // ====================================
  // textColor: '#C9CDCF',
  // textInverseColor: '#222425',
  // textMutedColor: '#798186',

  // ====================================
  // Toolbar default and active colors
  // ====================================
  // barTextColor: '#73828C',
  // barHoverColor: '#029CFD',
  // barSelectedColor: '#029CFD',
  // barBg: '#292C2E',

  // ====================================
  // Form colors
  // ====================================
  // buttonBg: '#222425',
  // buttonBorder: 'rgba(255,255,255,.1)',
  // booleanBg: '#222425',
  // booleanSelectedBg: '#2E3438',

  // inputBg: '#1B1C1D',
  // inputBorder: 'rgba(255,255,255,.1)',
  // inputTextColor: '#FFFFFF',
  // inputBorderRadius: 4,
})

const brandPrimaryColor = twColors.violet[700]
const brandSecondaryColor = twColors.amber[400]

// Slate with its blue tinge looks good with the purple brand colors
const twNeutrals = twColors.slate // slate, gray, zinc, neutral, stone

const backgroundColorLight = twNeutrals[50]
const backgroundColorDark = twNeutrals[900]
const backgroundColorDarker = twNeutrals[950]

const textNormalColor = twNeutrals[300]
const textMutedColor = twNeutrals[500]

const textLightColor = twNeutrals[200]
const textSelectColor = twNeutrals[600]
const textDarkColor = twNeutrals[800]

const borderRadius = 5

export const brand = create({
  ...brandDetails,
  base: 'dark',

  colorPrimary: brandSecondaryColor,
  colorSecondary: brandPrimaryColor,

  // ====================================
  // UI
  // ====================================
  appBg: backgroundColorDark,
  // appContentBg: backgroundColorDarker,
  appContentBg: backgroundColorDark,
  appPreviewBg: backgroundColorLight,
  appBorderColor: 'rgba(255,255,255,.1)',
  appBorderRadius: borderRadius,

  // ====================================
  // Text colors
  // ====================================
  textColor: textNormalColor,
  textInverseColor: backgroundColorDark,
  textMutedColor: textMutedColor,

  // ====================================
  // Toolbar default and active colors
  // ====================================
  barTextColor: textLightColor,
  barHoverColor: brandSecondaryColor,
  barSelectedColor: brandSecondaryColor,
  barBg: textDarkColor,

  // ====================================
  // Form colors
  // ====================================
  buttonBg: backgroundColorDark,
  buttonBorder: 'rgba(255,255,255,.1)',
  booleanBg: backgroundColorDark,
  booleanSelectedBg: textSelectColor,

  inputBg: backgroundColorDarker,
  inputBorder: 'rgba(255,255,255,.1)',
  inputTextColor: backgroundColorLight,
  inputBorderRadius: borderRadius,
})
