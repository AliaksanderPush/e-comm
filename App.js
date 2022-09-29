import 'react-native-gesture-handler';
import React from 'react';
import { RootNavigation } from './src/navigations/RootNavigation';
import { Provider } from 'react-redux';
import { AuthProvider } from './src/components';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </Provider>
  );
};
export default App;
