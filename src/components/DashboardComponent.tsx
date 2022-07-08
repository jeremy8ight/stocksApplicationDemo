import {TouchableOpacity} from "react-native-gesture-handler";
import {styles} from "../styles";
import {getStocksCompletedAction, getStocksEmptyAction, getStocksMalformedAction} from "../actions";
import {ListRow} from "./ListRow";
import * as React from "react";
import {SafeAreaView, View, Text, ActivityIndicator, SectionList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {loadingSelector, retrieveStocksErrorSelector, retrieveStocksInformationSelector} from "../selectors";
import {useEffect} from "react";
import { useNavigation } from "@react-navigation/native";


export const DashboardComponent = () => {
    const stocksData = useSelector(retrieveStocksInformationSelector);
    const showErrorScreen = useSelector(retrieveStocksErrorSelector);
    const loading = useSelector(loadingSelector);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const DATA = [
        {
            title: 'Stocks',
            data: stocksData,
        },
    ];

    useEffect(() => {}, [stocksData, dispatch, showErrorScreen, loading]);
    if(loading) {
        return (
            <SafeAreaView style={styles.loadingSheetSafeArea}>
                <View style={styles.loadingSheetBackground}>
                    <View
                        style={styles.loadingSheetBackground}>
                        <Text
                            style={styles.loadingHeader}>
                            {"Stocks"}
                        </Text>
                        <View
                            style={styles.loadingHeaderButtons}>
                            <TouchableOpacity
                                testID={'signIn:loginButton'}
                                style={styles.setButtons}
                                onPress={() => {
                                    dispatch(getStocksEmptyAction())
                                }}>
                                <Text style={styles.loginText}>Set empty stocks</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                testID={'signIn:loginButton'}
                                style={styles.logoutBtn}
                                onPress={() => {
                                    navigation.navigate('Sign In')
                                }}>
                                <Text style={styles.loginText}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dashboardLoadingSpinnerView}>
                            <Text style={styles.dashboardLoadingSpinnerTextStyle}>{"Loading..."}</Text>
                            <View style={{paddingTop: 50}}>
                                <View style={styles.dashboardActivityIndicator}>
                                    <ActivityIndicator size="large" color="blue" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>)
    }

    if(showErrorScreen) {
        return (
            <SafeAreaView style={styles.loadingSheetSafeArea}>
                <View style={styles.loadingSheetBackground}>
                    <View
                        style={styles.loadingSheetBackground}>
                        <Text
                            style={styles.loadingHeader}>
                            {"Stocks"}
                        </Text>
                        <View
                            style={styles.loadingHeaderButtons}>
                            <TouchableOpacity
                                testID={'signIn:loginButton'}
                                style={styles.setButtons}
                                onPress={() => {
                                    dispatch(getStocksEmptyAction())
                                }}>
                                <Text style={styles.loginText}>Set empty stocks</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                testID={'signIn:loginButton'}
                                style={styles.logoutBtn}
                                onPress={() => {
                                    navigation.navigate('Sign In')
                                }}>
                                <Text style={styles.loginText}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dashboardLoadingSpinnerView}>
                            <Text style={styles.dashboardLoadingSpinnerTextStyle}>{"Sorry, theres been an error!"}</Text>
                            <View style={{paddingTop: 50}}>
                                <TouchableOpacity
                                    testID={'signIn:loginButton'}
                                    style={styles.showFullListStockBtn}
                                    onPress={() => {
                                        dispatch(getStocksCompletedAction())
                                    }}>
                                    <Text style={styles.loginText}>{"Show completed stocks"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    if (stocksData && stocksData.length > 0) {
        return (
            <SafeAreaView style={{backgroundColor: 'white'}}>
                <View style={styles.dashboard}>
                    <SectionList
                        sections={DATA}
                        renderItem={({item}) => <ListRow stocksData={item} />}
                        renderSectionHeader={({section}) => (
                            <View
                                style={styles.sectionHeaderViewStyle}>
                                <Text
                                    style={styles.loadingHeader}>
                                    {section.title}
                                </Text>
                                <View
                                    style={styles.loadingHeaderButtons}>
                                    <TouchableOpacity
                                        testID={'signIn:loginButton'}
                                        style={styles.setButtons}
                                        onPress={() => dispatch(getStocksEmptyAction())}>
                                        <Text style={styles.loginText}>Set empty stocks</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        testID={'signIn:loginButton'}
                                        style={styles.setButtons}
                                        onPress={() => {
                                            dispatch(getStocksMalformedAction())
                                        }}>
                                        <Text style={styles.loginText}>Set error stocks</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        testID={'signIn:loginButton'}
                                        style={styles.logoutBtn}
                                        onPress={() => navigation.navigate('Sign In')}>
                                        <Text style={styles.loginText}>Log out</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.ticker}
                    />
                </View>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={styles.loadingSheetSafeArea}>
            <View style={styles.loadingSheetBackground}>
                <View
                    style={styles.loadingSheetBackground}>
                    <Text
                        style={styles.loadingHeader}>
                        {"Stocks"}
                    </Text>
                    <View
                        style={styles.loadingHeaderButtons}>
                        <TouchableOpacity
                            testID={'signIn:loginButton'}
                            style={styles.setButtons}
                            onPress={() => dispatch(getStocksEmptyAction())}>
                            <Text style={styles.loginText}>Set empty stocks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            testID={'signIn:loginButton'}
                            style={styles.setButtons}
                            onPress={() => dispatch(getStocksMalformedAction())}>
                            <Text style={styles.loginText}>Set error stocks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            testID={'signIn:loginButton'}
                            style={styles.logoutBtn}
                            onPress={() => navigation.navigate('Sign In')}>
                            <Text style={styles.loginText}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dashboardLoadingSpinnerView}>
                        <Text style={{fontSize: 35}}>{"No stocks to show"}</Text>
                        <View style={{paddingTop: 50}}>
                            <TouchableOpacity
                                testID={'signIn:loginButton'}
                                style={styles.showFullListStockBtn}
                                onPress={() => dispatch(getStocksCompletedAction())}>
                                <Text style={styles.loginText}>{"Show completed stocks"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
