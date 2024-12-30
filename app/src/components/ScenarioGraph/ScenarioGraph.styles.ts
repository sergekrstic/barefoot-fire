import { Stylesheet } from 'cytoscape'
import twColors from 'tailwindcss/colors'

export const colors = {
  primary: twColors.violet[700],
  primaryDark: twColors.violet[800],
  // amber
  // secondary: twColors.amber[50],
  // secondary: twColors.amber[100],
  // secondary: twColors.amber[200], // ok
  // secondary: twColors.amber[300], // ok, better
  secondary: twColors.amber[400], // ok, better
  // secondary: twColors.amber[500], // ok
  // secondary: twColors.amber[600],
  // secondary: twColors.amber[700],
  // secondary: twColors.amber[800],
  // secondary: twColors.amber[900],
  // secondary: twColors.amber[950],
  // yellow
  // secondary: twColors.yellow[50],
  // secondary: twColors.yellow[100],
  // secondary: twColors.yellow[200], // ok
  // secondary: twColors.yellow[300], // ok
  // secondary: twColors.yellow[400], // ok, better
  // secondary: twColors.yellow[500], // ok, better
  // secondary: twColors.yellow[600],
  // secondary: twColors.yellow[700],
  // secondary: twColors.yellow[800],
  // secondary: twColors.yellow[900],
  // secondary: twColors.yellow[950],
  // orange
  // secondary: twColors.orange[50],
  // secondary: twColors.orange[100],
  // secondary: twColors.orange[200],
  // secondary: twColors.orange[300],
  // secondary: twColors.orange[400],
  // secondary: twColors.orange[500],
  // secondary: twColors.orange[600],
  // secondary: twColors.orange[700],
  // secondary: twColors.orange[800],
  // secondary: twColors.orange[900],
  // secondary: twColors.orange[950],
  text: twColors.stone[300],
}

export const graphStyles: Stylesheet[] = [
  {
    selector: 'node',
    style: {
      'background-color': colors.primary,
      label: 'data(name)',
      color: colors.text,
    },
  },
  {
    selector: 'node[selected]',
    style: {
      'background-color': colors.secondary,
    },
  },
  {
    selector: 'edge',
    style: {
      width: 3,
      'line-color': colors.primaryDark,
      'target-arrow-color': colors.primaryDark,
      'target-arrow-shape': 'triangle',
      // @ts-expect-error - cytoscape-all-paths is not typed
      'curve-style': 'round-taxi',
    },
  },
]
