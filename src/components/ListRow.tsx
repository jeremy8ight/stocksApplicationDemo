import * as React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {ListRowProps} from '../interfaces';
import {Truncation} from '../utils/truncation';
import {styles} from "../styles";

export const ListRow = (props: ListRowProps) => {
  const lastStockDate = new Date(
    props.stocksData.current_price_timestamp * 1000,
  ).toLocaleDateString();

  return (
    <View style={{paddingVertical: 15}}>
      <TouchableOpacity
        style={styles.listRowTouchableOpacity}
        onPress={props.onPress}>
        <View
          style={styles.listRowInsideStyle}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Image
              source={require('../images/blueStar.png')}
              style={styles.listRowImage}
            />
          </View>
          <View
            style={styles.stockNameStyle}>
            <Text style={styles.stockNameText}>
              {Truncation(props.stocksData.name)}
            </Text>
            <Text style={styles.tickerNameText}>
              {props.stocksData.ticker}
            </Text>
          </View>
          <View
            style={styles.stockAmountMoneyStyle}>
            <Text style={styles.stockPriceStyle}>{`$ ${Number(
              props.stocksData.current_price_cents / 60,
            ).toFixed(2)} ${props.stocksData.currency}`}</Text>
            <Text
              style={styles.lastDateTextStyle}>
              {lastStockDate}
            </Text>
            <Text style={styles.stockUnitsTextStyle}>
              {props.stocksData.quantity ?? 0}
              {props.stocksData.quantity === 1 ? ' Unit' : ' Units'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
