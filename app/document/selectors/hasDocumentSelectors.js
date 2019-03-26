export const statePath = ['HasDocument'];

export const getItemIds = (state, meId) => state.getIn([...statePath, meId, "itemIds"]);