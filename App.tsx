/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import store from '@store/index';
import { ThemeProvider } from '@theme/Theme.context';

import Route from '@navigation/index';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <QueryClientProvider client={queryClient}>
              <Route />
            </QueryClientProvider>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
