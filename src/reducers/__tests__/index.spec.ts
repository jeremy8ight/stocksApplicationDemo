import {mainReducer} from "../index";
import {logOutAction, setLoadingAction, showErrorAction, storeStocksAction} from "../../actions";

describe('Main reducer', () => {
    it('should handle changing loading state to true', () => {
        const state = {
            stocks: [],
            showErrorScreen: false,
            loading: false,
        };
        const expectedState = {
            stocks: [],
            showErrorScreen: false,
            loading: true,
        };
        expect(mainReducer(state, setLoadingAction(true))).toEqual(expectedState)
    });

    it('should handle changing loading state to false', () => {
        const state = {
            stocks: [],
            showErrorScreen: false,
            loading: true,
        };
        const expectedState = {
            stocks: [],
            showErrorScreen: false,
            loading: false,
        };
        expect(mainReducer(state, setLoadingAction(false))).toEqual(expectedState)
    });

    it('should handle changing showErrorScreen state to false', () => {
        const state = {
            stocks: [],
            showErrorScreen: true,
            loading: false,
        };
        const expectedState = {
            stocks: [],
            showErrorScreen: false,
            loading: false,
        };
        expect(mainReducer(state, showErrorAction(false))).toEqual(expectedState)
    });

    it('should handle changing showErrorScreen state to true', () => {
        const state = {
            stocks: [],
            showErrorScreen: false,
            loading: false,
        };
        const expectedState = {
            stocks: [],
            showErrorScreen: true,
            loading: false,
        };
        expect(mainReducer(state, showErrorAction(true))).toEqual(expectedState)
    });

    it('should handle the logout action', () => {
        const state = {
            stocks: [{
                stuff: ""
            }],
            showErrorScreen: true,
            loading: true,
        };
        const expectedState = {
            stocks: [],
            showErrorScreen: false,
            loading: false,
        };
        expect(mainReducer(state, logOutAction())).toEqual(expectedState)
    });

    it('should store stocks in the state', () => {
        const stockData = {
            stocks: [{
                currency: "USD",
                current_price_cents: 1233,
                current_price_timestamp: 12323,
                name: "Test",
                quantity: 1,
                ticker: "TST",
            }]
        }
        const state = {
            stocks: [],
            showErrorScreen: false,
            loading: false,
        };
        const expectedState = {
            stocks: [{
                currency: "USD",
                current_price_cents: 1233,
                current_price_timestamp: 12323,
                name: "Test",
                quantity: 1,
                ticker: "TST",
            }],
            showErrorScreen: false,
            loading: false,
        };
        // @ts-ignore data parsing issue with conversion, test still works
        expect(mainReducer(state, storeStocksAction(stockData))).toEqual(expectedState)
    });
});
