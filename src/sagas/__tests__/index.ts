import {expectSaga} from "redux-saga-test-plan";
import {getCompletedStocksInformation, getMissingStocksInformation} from "../index";
import {setLoadingAction, showErrorAction, storeStocksAction} from "../../actions";
import {call, put} from "redux-saga-test-plan/matchers";

describe("Saga test", () => {
    it('should call the completed stocks saga correctly', () => {
        return(expectSaga(getCompletedStocksInformation))
            .put(showErrorAction(false))
            .put(setLoadingAction(true))
            .run()
    })

    it('should call the missing stocks saga correctly', () => {
        return(expectSaga(getMissingStocksInformation))
            .put(showErrorAction(false))
            .put(setLoadingAction(true))
            .run()
    })

    it('should call the malformed stocks saga correctly', () => {
        return(expectSaga(getMissingStocksInformation))
            .put(showErrorAction(false))
            .run()
    })
})
