import {storeConfig} from '../../storeConfig';

export const statePath = [storeConfig.HasDocument];

export const getItemIds = (state, stateKeychild, page) => state.getIn([...statePath, stateKeychild, page, "itemIds"]);