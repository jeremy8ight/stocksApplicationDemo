import {stocksRetrievalAction} from '../enums';

export interface GetStocksCompletedAction {
  type: stocksRetrievalAction.retrieveCompletedStocks;
}

export interface GetStocksEmptyAction {
  type: stocksRetrievalAction.retrieveEmptyStocks;
}

export interface GetStocksMalformedAction {
  type: stocksRetrievalAction.retrieveMalformedStocks;
}

export interface ShowErrorAction {
  type: stocksRetrievalAction.showError;
  value: {
    showError: boolean
  }
}

export interface StoreStockAction {
  type: stocksRetrievalAction.storeStocks;
  value: {
    stocks: StocksData[];
  };
}

export interface LogOutAction {
  type: stocksRetrievalAction.logout;
}

export interface SetLoadingAction {
  type: stocksRetrievalAction.loading;
  value: {
    loading: boolean
  }
}

export interface Stocks {
  stocks: StocksData[];
}

export interface StocksData {
  currency: string;
  current_price_cents: number;
  current_price_timestamp: number;
  name: string;
  quantity: null | number;
  ticker: string;
}

export interface ListRowProps {
  stocksData: StocksData;
  onPress?: () => void;
}
