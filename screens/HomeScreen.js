/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar
} from 'react-native';
import { useTheme } from "@react-navigation/native";

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Button title="Go to detail screen" onPress={() => {navigation.navigate('Details')}} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
