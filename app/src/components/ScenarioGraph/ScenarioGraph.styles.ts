// import { Stylesheet } from 'cytoscape'
import twColors from 'tailwindcss/colors'

export const colors = {
  // Default
  default: twColors.violet[800],
  defaultDark: twColors.violet[950],
  defaultText: twColors.violet[500],

  // Highlighted
  highlightedBase: twColors.violet[600],
  highlightedOutline: twColors.violet[500],
  highlightedText: twColors.violet[300],
  highlightedFocusedText: twColors.violet[200],
  highlightedFocusedOutline: twColors.violet[300],

  // Pinned -- amber, yellow, orange
  pinnedBase: twColors.amber[600],
  pinnedOutline: twColors.amber[500],
  pinnedText: twColors.amber[200],
  pinnedFocusedText: twColors.amber[50],
  pinnedFocusedOutline: twColors.amber[200],
  pinnedHighlightedOutline: twColors.violet[700],
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
      color: colors.defaultText,
      'text-valign': 'center',
      'text-halign': 'center',
      'font-weight': 500,
    },
  },
  {
    selector: 'node[?highlighted]',
    style: {
      color: colors.highlightedText,
      'background-color': colors.highlightedBase,
      'border-color': colors.highlightedOutline,
    },
  },
  {
    selector: 'node[?highlighted][?focused]',
    style: {
      color: colors.highlightedFocusedText,
      'outline-color': colors.highlightedFocusedOutline,
      'outline-width': 2,
    },
  },
  {
    selector: 'node[?pinned]',
    style: {
      color: colors.pinnedText,
      'background-color': colors.pinnedBase,
      'border-color': colors.pinnedOutline,
    },
  },
  {
    selector: 'node[?pinned][?focused]',
    style: {
      color: colors.pinnedFocusedText,
      'outline-color': colors.pinnedFocusedOutline,
      'outline-width': 2,
    },
  },
  {
    selector: 'node[?pinned][?highlighted]',
    style: {
      // Todo: consider using a striped background (SVG pattern)
      'background-fill': 'linear-gradient',
      'background-gradient-stop-colors': [colors.pinnedBase, colors.highlightedBase],
      'background-gradient-stop-positions': '0',
      'background-gradient-direction': 'to-bottom-left',
      // color: colors.pinnedHighlightedOutline,
      // 'border-color': colors.pinnedHighlightedOutline,
      // 'outline-width': 2,
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
      'line-color': colors.pinnedOutline,
      'target-arrow-color': colors.pinnedOutline,
      'z-index': 2,
      width: 5,
    },
  },
]
