import {loadingSelector, retrieveStocksErrorSelector, retrieveStocksInformationSelector} from "../index";

describe('Main selectors', () => {
        it('should return correct loading state', () => {
            const testState = {
                loading: false,
            }
            expect(loadingSelector(testState)).toEqual(false);
        });

        it('should return correct error state', () => {
            const testState = {
                showErrorScreen: true,
            };
            expect(retrieveStocksErrorSelector(testState)).toEqual(true);
        });

        it('should return correct array storing for stocks', () => {
        const testState = {
            stocks: [{
                currency: "USD",
                current_price_cents: 1233,
                current_price_timestamp: 12323,
                name: "Test",
                quantity: 1,
                ticker: "TST",
            }],
        };

        expect(retrieveStocksInformationSelector(testState)).toEqual([{
            currency: "USD",
            current_price_cents: 1233,
            current_price_timestamp: 12323,
            name: "Test",
            quantity: 1,
            ticker: "TST",
        }]);
        });
});
