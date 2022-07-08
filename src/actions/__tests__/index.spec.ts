import {
    getStocksCompletedAction,
    getStocksEmptyAction,
    getStocksMalformedAction,
    logOutAction, setLoadingAction, showErrorAction,
    storeStocksAction
} from "../index";
import {stocksRetrievalAction} from "../../enums";


describe('actions', () => {
    it('should return correct logout action', () => {
        const action = logOutAction();
        expect(action.type).toEqual(stocksRetrievalAction.logout);
    });

    it('should call getStocksCompleted action', () => {
        const action = getStocksCompletedAction()
        expect(action.type).toEqual(stocksRetrievalAction.retrieveCompletedStocks)
    })

    it('should call getStockEmpty action', () => {
        const action = getStocksEmptyAction()
        expect(action.type).toEqual(stocksRetrievalAction.retrieveEmptyStocks)
    })

    it('should call getStocksMalformedAction', () => {
        const action = getStocksMalformedAction()
        expect(action.type).toEqual(stocksRetrievalAction.retrieveMalformedStocks)
    })

    it('should call storeStocksAction', () => {
        const stocks = []
        const action = storeStocksAction(stocks)
        expect(action.type).toEqual(stocksRetrievalAction.storeStocks)
    })

    it('should call set loading action', () => {
        const action = setLoadingAction(false)
        expect(action.type).toEqual(stocksRetrievalAction.loading)
    })

    it('should call setErrorAction', () => {
        const action = showErrorAction(true)
        expect(action.type).toEqual(stocksRetrievalAction.showError)
    })
});


