import {stocksRetrievalAction} from '../enums';
import {
  GetStocksCompletedAction,
  GetStocksEmptyAction,
  GetStocksMalformedAction,
  LogOutAction,
  SetLoadingAction,
  ShowErrorAction,
  StocksData,
  StoreStockAction,
} from '../interfaces';

export const getStocksCompletedAction = (): GetStocksCompletedAction => {
  return {
    type: stocksRetrievalAction.retrieveCompletedStocks,
  };
};

export const getStocksEmptyAction = (): GetStocksEmptyAction => {
  return {
    type: stocksRetrievalAction.retrieveEmptyStocks,
  };
};

export const getStocksMalformedAction = (): GetStocksMalformedAction => {
  return {
    type: stocksRetrievalAction.retrieveMalformedStocks,
  };
};

export const storeStocksAction = (stocks: StocksData[]): StoreStockAction => {
  return {
    type: stocksRetrievalAction.storeStocks,
    value: {
      stocks: stocks,
    },
  };
};

export const setLoadingAction = (set: boolean): SetLoadingAction => {
  return {
    type: stocksRetrievalAction.loading,
    value: {
      loading: set,
    },
  };
};


export const logOutAction = (): LogOutAction => {
  return {
    type: stocksRetrievalAction.logout,
  };
};

export const showErrorAction = (show: boolean): ShowErrorAction => {
  return {
    type: stocksRetrievalAction.showError,
    value: {
      showError: show
    }
  }
}
