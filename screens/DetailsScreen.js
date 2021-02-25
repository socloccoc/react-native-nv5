/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Detail screen ... again" onPress={() => {navigation.push('Details')}} />
      <Button title="Go to Home screen" onPress={() => {navigation.navigate('Home')}} />
      <Button title="Go back" onPress={() => {navigation.goBack()}} />
      <Button title="Go to the first screen" onPress={() => {navigation.popToTop()}} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})