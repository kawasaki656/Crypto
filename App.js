import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from "./app/navigator/AppNavigator";
import store from "./app/store";
import { Provider } from "react-redux";

export default function App() {
  return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
