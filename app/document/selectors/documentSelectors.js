export const statePath = ['Document'];

export const getDocument = (state, documentId) => state.getIn([...statePath, documentId]);
