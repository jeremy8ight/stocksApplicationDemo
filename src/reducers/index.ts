import {states} from '../states';
import {stocksRetrievalAction} from '../enums';

export const mainReducer = (state = states, action) => {
  switch (action.type) {
    case stocksRetrievalAction.storeStocks:
      return {...state, stocks: action.value.stocks.stocks};
    case stocksRetrievalAction.showError:
      return {...state, showErrorScreen: action.value.showError}
    case stocksRetrievalAction.loading:
      return {...state, loading: action.value.loading}
    case stocksRetrievalAction.logout:
      return {...state, showErrorScreen: false, stocks: [], loading: false}
    default:
      return {...state};
  }
};
