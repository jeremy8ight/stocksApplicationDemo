import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard: {
    backgroundColor: 'white',
  },
  dashboardItems: {
    alignSelf: 'center',
  },
  logoName: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginBottom: 40,
  },
  dashboardActivityIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
  },
  inputTextSignIn: {
    height: 50,
    width: '100%',
    color: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
  inputTextModal: {
    borderWidth: 2,
  },
  loginBtn: {
    width: 350,
    backgroundColor: 'blue',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  logoutBtn: {
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  setButtons: {
    width: 100,
    backgroundColor: 'red',
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  showFullListStockBtn: {
    width: 300,
    backgroundColor: 'blue',
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signOutButton: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 200,
    height: 50,
    borderRadius: 30,
  },
  signOutText: {
    color: 'white',
    fontSize: 16,
    marginVertical: 15,
    marginHorizontal: 70,
  },
  signInErrorText: {
    color: 'red',
    fontSize: 20,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingSheetSafeArea: {
    backgroundColor: 'white',
  },
  loadingSheetBackground: {
    backgroundColor: 'white',
    height: '100%'
  },
  loadingHeader: {
    fontSize: 35,
    fontWeight: '800',
    alignSelf: 'center',
  },
  loadingHeaderButtons: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  dashboardLoadingSpinnerView: {
    alignItems: 'center',
    paddingTop: 250
  },
  dashboardLoadingSpinnerTextStyle: {
    fontSize: 35,
    marginHorizontal: 10,
    textAlign: 'center'
  },
  sectionHeaderViewStyle: {
    width: '100%',
    backgroundColor: 'white',
  },
  listRowTouchableOpacity: {
    borderWidth: 3,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 15,
    paddingVertical: 8,
    shadowOpacity: 0.2,
    marginHorizontal: 10,
  },
  listRowInsideStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 45,
    left: 10,
  },
  listRowImage: {
    height: 40,
    width: 40,
    bottom: 3
  },
  stockNameStyle: {
    flexDirection: 'column',
    flexGrow: 20,
  },
  stockNameText: {
    fontSize: 18,
    fontWeight: '600'
  },
  tickerNameText: {
    color: 'blue',
    fontWeight: '800'
  },
  stockAmountMoneyStyle: {
    flexDirection: 'column',
    right: 18,
  },
  stockPriceStyle: {
    color: 'green',
    fontWeight: '800'
  },
  lastDateTextStyle: {
    textAlign: 'right',
    color: 'orange',
    fontWeight: '800'
  },
  stockUnitsTextStyle: {
    textAlign: 'right',
    color: 'red',
    fontWeight: '800'
  }
});
