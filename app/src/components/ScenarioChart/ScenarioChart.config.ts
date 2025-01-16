import * as Plot from '@observablehq/plot'
import moment from 'moment'
import twColors from 'tailwindcss/colors'
import { ScenarioStartEvents } from 'types'

export function createBasePlotMarks(scenarioEvents: ScenarioStartEvents): Plot.Markish[] {
  return [
    Plot.ruleY([0]),
    Plot.ruleX(scenarioEvents, {
      x: (d) => new Date(d.date),
      stroke: twColors.slate[500],
      opacity: 0.3,
    }),
    Plot.textX(scenarioEvents, {
      x: (d) => new Date(d.date),
      text: (d) => d.name,
      frameAnchor: 'top',
      textAnchor: 'start',
      fill: twColors.slate[500],
      stroke: twColors.slate[950],
      strokeWidth: 5,
      dx: 1,
      dy: -17,
    }),
  ]
}

export const plotTipConfig: Plot.MarkOptions['tip'] = {
  stroke: twColors.slate[700],
  fill: twColors.slate[800],
  fillOpacity: 0.9,
  format: {
    x: false,
    y: false,
    z: false,
    amount: (d) => d.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' }),
    date: (d) => moment(d).format('D MMMM, YYYY'),
  },
}

export const plotBaseConfig: Plot.PlotOptions = {
  marginTop: 20, // 20 - default
  marginBottom: 30, // 30 - default
  marginLeft: 60, // 40 - default
  marginRight: 20, // 20 - default

  x: { grid: false },
  y: {
    grid: true,
    transform: (x) => x / 1000,
    label: 'AUD (K)',
    labelArrow: 'none',
    labelOffset: 47,
  },
}
