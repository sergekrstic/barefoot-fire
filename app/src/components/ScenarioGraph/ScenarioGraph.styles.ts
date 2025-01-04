// import { Stylesheet } from 'cytoscape'
import twColors from 'tailwindcss/colors'

export const colors = {
  primary: twColors.violet[700],
  primaryDark: twColors.violet[800],
  // amber
  // secondary: twColors.amber[50],
  // secondary: twColors.amber[100],
  // secondary: twColors.amber[200], // ok
  // secondaryLight: twColors.yellow[300], // ok, better
  // secondary: twColors.amber[400], // ok, better
  secondary: twColors.amber[500], // ok, better
  secondaryDark: twColors.amber[600], // ok, better
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
  text: twColors.stone[800],
}

export const graphStyles = [
  {
    selector: 'core',
    style: {
      // Remove the grey circle when dragging
      'active-bg-size': 0,
    },
  },
  {
    selector: 'node',
    style: {
      // 'active-bg-color': twColors.slate[950],
      // 'active-bg-opacity': 0,
      'overlay-opacity': 0, // Hides the overlay selection box
      // Body
      shape: 'round-rectangle',
      width: 'label',
      height: 'label',
      padding: 16,
      'background-color': colors.primary,
      'border-width': 1,
      'border-color': colors.primaryDark,
      'corner-radius': '4',
      // Text
      label: 'data(name)',
      color: twColors.violet[950],
      'text-valign': 'center',
      'text-halign': 'center',
      'font-weight': 500,
    },
  },
  {
    selector: 'node[?highlighted]',
    style: {
      color: twColors.amber[950],
      'background-color': colors.secondary,
      'border-color': colors.secondaryDark,
    },
  },
  {
    selector: 'node:selected',
    style: {
      color: twColors.violet[200],
      'outline-width': 2,
      'outline-color': colors.primaryDark,
    },
  },
  {
    selector: 'node:selected[?highlighted]',
    style: {
      color: twColors.amber[100],
      'outline-width': 2,
      'outline-color': colors.secondaryDark,
    },
  },

  {
    selector: 'edge',
    style: {
      width: 3,
      'line-color': colors.primaryDark,
      'target-arrow-color': colors.primaryDark,
      'target-arrow-shape': 'triangle',

      // Experimental
      'curve-style': 'round-taxi',
      'taxi-radius': '5%',
      'taxi-turn': 10, // 10, -10, 20%, -20%
      // 'taxi-direction': 'auto', // auto, vertical, horizontal, upward, downward, leftward, rightward
      // 'taxi-turn-min-distance': 100,
      // 'radius-type': 'arc-radius', // arc-radius, influence-radius
      // 'edge-distances': 'node-position', // intersection, node-position
    },
  },
  {
    selector: 'edge[?highlighted]',
    style: {
      'line-color': colors.secondaryDark,
      'target-arrow-color': colors.secondaryDark,
      width: 5,
    },
  },
]
