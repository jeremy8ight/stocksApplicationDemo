import {takeEvery, delay} from 'redux-saga/effects';
import {stocksRetrievalAction} from '../enums';
import {put} from 'redux-saga-test-plan/matchers';
import {setLoadingAction, showErrorAction, storeStocksAction} from '../actions';
import {StocksData} from '../interfaces';

export function* getCompletedStocksInformation() {
  try {
    yield put(showErrorAction(false))
    yield put (setLoadingAction(true))
    yield delay(3000)
    const url =
        'https://storage.googleapis.com/cash-homework/cash-stocks-api/portfolio.json';
    const response = yield fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data: StocksData[] = yield response.status === 200
        ? response.json()
        : [];
    if (response.status === 200) {
      yield put(storeStocksAction(data));
      yield put (setLoadingAction(false))
    }
  } catch (error) {
    console.log("this is an error================>", error)
  }
}

export function* getMissingStocksInformation() {
  const url =
    'https://storage.googleapis.com/cash-homework/cash-stocks-api/portfolio_empty.json';
  try {
    yield put(showErrorAction(false))
    yield put (setLoadingAction(true))
    yield delay(3000)
    const response = yield fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data: StocksData[] = yield response.status === 200
        ? response.json()
        : [];

    if (response.status === 200) {
      yield put(storeStocksAction(data));
      yield put (setLoadingAction(false))
    }
  } catch(error) {
    console.log("this is an error================>", error)
  }
}

export function* getMalformedStocksInformation() {
  yield put (setLoadingAction(true))
  yield delay(3000)
  const url =
    'https://storage.googleapis.com/cash-homework/cash-stocks-api/portfolio_malformed.json';
  try {
    const response = yield fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data: StocksData[] = yield response.status === 200
        ? response.json()
        : [];
    if (response.status === 200) {
      yield put(storeStocksAction(data))
    }
  } catch(error) {
    yield put (setLoadingAction(false))
     yield put(showErrorAction(true))
  }
}

export default function* mainSaga() {
  yield takeEvery(
    stocksRetrievalAction.retrieveCompletedStocks,
    getCompletedStocksInformation,
  );
  yield takeEvery(
    stocksRetrievalAction.retrieveEmptyStocks,
    getMissingStocksInformation,
  );
  yield takeEvery(
    stocksRetrievalAction.retrieveMalformedStocks,
    getMalformedStocksInformation,
  );
}
