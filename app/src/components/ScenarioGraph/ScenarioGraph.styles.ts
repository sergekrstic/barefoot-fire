// import { Stylesheet } from 'cytoscape'
import twColors from 'tailwindcss/colors'

export const colors = {
  // Default
  default: twColors.violet[800],
  defaultDark: twColors.violet[950],

  // Highlighted
  highlighted: twColors.violet[600],
  highlightedOutline: twColors.violet[500],
  highlightedText: twColors.violet[300],
  highlightedSelectedText: twColors.violet[200],
  highlightedSelectedOutline: twColors.violet[300],

  // Pinned -- amber, yellow, orange
  pinned1: twColors.amber[600],
  pinned2: twColors.amber[500],
  pinned3: twColors.amber[200],
  pinned4: twColors.amber[50],
}

export const graphStyles = [
  // ===========================================================================
  // Core
  // ===========================================================================
  {
    selector: 'core',
    style: {
      'active-bg-size': 0, // <== Remove the grey circle when dragging
    },
  },
  // ===========================================================================
  // Nodes
  // ===========================================================================
  {
    selector: 'node',
    style: {
      'overlay-opacity': 0, // <== Hides the overlay selection box
      // Body
      shape: 'round-rectangle',
      width: 'label',
      height: 'label',
      padding: 16,
      'background-color': colors.default,
      'border-color': colors.defaultDark,
      'border-width': 1,
      'corner-radius': '4',
      // Text
      label: 'data(name)',
      color: colors.defaultDark,
      'text-valign': 'center',
      'text-halign': 'center',
      'font-weight': 500,
    },
  },
  {
    selector: 'node[?highlighted]',
    style: {
      color: colors.highlightedText,
      'background-color': colors.highlighted,
      'border-color': colors.highlightedOutline,
    },
  },
  {
    selector: 'node[?highlighted][?selected]',
    style: {
      color: colors.highlightedSelectedText,
      'outline-color': colors.highlightedSelectedOutline,
      'outline-width': 2,
    },
  },
  {
    selector: 'node[?pinned]',
    style: {
      color: colors.pinned3,
      'background-color': colors.pinned1,
      'border-color': colors.pinned2,
    },
  },
  {
    selector: 'node[?pinned][?selected]',
    style: {
      color: colors.pinned4,
      'outline-color': colors.pinned3,
      'outline-width': 2,
    },
  },
  // ===========================================================================
  // Nodes
  // ===========================================================================
  {
    selector: 'edge',
    style: {
      'overlay-opacity': 0, // <== Hides the overlay selection box
      width: 3,
      'line-color': colors.defaultDark,
      'target-arrow-color': colors.defaultDark,
      'target-arrow-shape': 'triangle',

      // Experimental
      'curve-style': 'round-taxi',
      'taxi-radius': '5%',
      // 'taxi-turn': 10, // 10, -10, 20%, -20%
      // 'taxi-direction': 'auto', // auto, vertical, horizontal, upward, downward, leftward, rightward
      // 'taxi-turn-min-distance': 100,
      // 'radius-type': 'arc-radius', // arc-radius, influence-radius
      // 'edge-distances': 'node-position', // intersection, node-position
    },
  },
  {
    selector: 'edge[?highlighted]',
    style: {
      'line-color': colors.highlightedOutline,
      'target-arrow-color': colors.highlightedOutline,
      'z-index': 1,
      // width: 5,
    },
  },
  {
    selector: 'edge[?pinned]',
    style: {
      'line-color': colors.pinned2,
      'target-arrow-color': colors.pinned2,
      'z-index': 2,
      width: 5,
    },
  },
]
