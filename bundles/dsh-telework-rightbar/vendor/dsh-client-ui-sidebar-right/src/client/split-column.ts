/**
 * Telework fork of the docking kit's split planner: split the target pane into
 * two vertically stacked panes (top/bottom) instead of the shipped left/right
 * row split. The operation itself is the kit's ordinary column split; only the
 * stable right-Sidebar renderer needed the matching column path.
 */
import type { LayoutOp, LayoutState, Mint, PaneId, TabFactory } from '@deepseek-ai/dsh-client-ui-dockkit'
import { activeDockPaneId, canSplit, getPane } from '@deepseek-ai/dsh-client-ui-dockkit'

const NOTHING: readonly LayoutOp[] = []

/**
 * Plan a column split below the target pane.
 * @param state - current layout.
 * @param mint - id source for the pane, split, and seeded tab.
 * @param paneId - pane to split; defaults to the active docked pane.
 * @param makePaneTab - builds the seeded tab; omit to leave the new pane empty.
 * @returns the operations, or none when the pane budget is spent.
 */
export function planSplitPaneColumn(
  state: LayoutState,
  mint: Mint,
  paneId?: PaneId,
  makePaneTab?: TabFactory,
): readonly LayoutOp[] {
  if (!canSplit(state)) return NOTHING
  const target = paneId ?? activeDockPaneId(state)
  if (getPane(state, target).host !== 'dock') return NOTHING
  const newPaneId = mint('pane')
  const ops: LayoutOp[] = [{
    type: 'split',
    paneId: target,
    axis: 'column',
    direction: 'after',
    newPaneId,
    newSplitId: mint('split'),
  }]
  const seed = makePaneTab?.(mint('tab'))
  if (seed !== undefined) ops.push({ type: 'openTab', paneId: newPaneId, tab: seed, index: 0 })
  return ops
}
