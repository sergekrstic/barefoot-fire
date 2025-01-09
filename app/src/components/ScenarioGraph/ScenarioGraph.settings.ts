/* eslint-disable @typescript-eslint/no-explicit-any */
import cy from 'cytoscape'
import { TidytreeLayoutOptions } from 'cytoscape-tidytree'

import { graphStyles } from './ScenarioGraph.styles'

export const graphSettings: cy.CytoscapeOptions = {
  style: graphStyles as cy.Stylesheet[],
  autoungrabify: true,
  layout: {
    // Todo: consider create a custom layout using d3 or dagre
    name: 'tidytree',
    direction: 'LR',
    // verticalSpacing: 80,
    // horizontalSpacing: 80,
    // layerHeight: 2,
    // animate: true,
  } as any,
}

export class DefaultOptions implements TidytreeLayoutOptions {
  //** Needed to for the layout to be called from cytoscape */
  name: 'tidytree' = 'tidytree' as const

  /**
   * Specific layout options
   */

  dataOnly: boolean = false // when enabled, nodes' positions aren't set, only data is calculated
  horizontalSpacing: number = 20 // the width of the space between nodes in cytoscape units
  verticalSpacing: number = 40 // the height of the space between parent and child in cytoscape units
  direction: 'LR' | 'RL' | 'TB' | 'BT' = 'TB' // the direction of the tree, left to right, right to left, top to bottom, bottom to top

  // an object from node's id to how much space should be added between it and its parent
  extraVerticalSpacings: Record<string, number> = {}

  // an object from node's id to how much space should be added for the node to have this y position
  // overrides extraVerticalSpacings if both are set for a particular node
  // if the y position would result in the child not being below the parent, the setting is ignored and a warning is printed
  customYs: Record<string, number> = {}

  // the width of the space left after a node is moved down
  lineWidth: number = 5

  // forces nodes to be positioned on multiples of this value if set
  layerHeight: number | undefined = undefined

  // a sorting function for the children array of the tree representation
  // if undefined, the order is based on the order of the collection the layout was called on
  edgeComparator: ((edgeA: cy.EdgeSingular, edgeB: cy.EdgeSingular) => number) | undefined = undefined

  // when not changed, the width and height of each node is read directly from the node
  // this parameter allows to supply your own sizes
  // if the h or w property is missing from the returned object, it is taken from the node
  sizeGetter: (node: cy.NodeSingular) => { w?: number; h?: number } = () => ({})

  /**
   * Layout options passed to nodes.layoutPositions()
   * https://js.cytoscape.org/#nodes.layoutPositions
   */

  fit: boolean = true // if true, fits the viewport to the graph
  padding: number = 30 // the padding between the viewport and the graph on fit
  pan: cy.Position | undefined = undefined // pan to a specified position, ignored if fit is enabled
  zoom: number | undefined = undefined // how much to zoom the viewport, ignored if fit is enabled

  // a positive value which adjusts spacing between nodes (>1 means greater than usual spacing)
  spacingFactor: number = 1

  // allows to transform a given node's position before it is applied
  transform: (node: cy.NodeSingular, position: cy.Position) => cy.Position = (n, p) => p

  animate: boolean = false // animate the layout`s changes
  animationDuration: number = 500 // duration of the animation in ms
  animationEasing: cy.Css.TransitionTimingFunction | undefined = undefined // easing of animation

  // returns true for nodes that should be animated, or false when the position should be set immediately
  animateFilter: (node: cy.NodeSingular, index: number) => boolean = () => true
  ready: ((e: cy.LayoutEventObject) => void) | undefined = undefined // callback for the start of the layout
  stop: ((e: cy.LayoutEventObject) => void) | undefined = undefined // callback for the layout`s finish

  /**
   * Layout options passed to node.layoutDimensions()
   * https://js.cytoscape.org/#node.layoutDimensions
   */
  nodeDimensionsIncludeLabels: boolean = true // if overflowing labels should count in the width or height of the node
}
