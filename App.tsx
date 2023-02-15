import React from 'react';
import { AppRegistry } from 'react-native';
import Navigation from "./src/navigation";
import { ToastProvider } from 'react-native-toast-notifications'
import { Provider as ProviderRedux } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Command, User } from "./src/store";

const store: any = configureStore({
  reducer: {
    user: User,
    command: Command
  },
})


const App = () => {

  return (
    <ProviderRedux store={store}>

      <ToastProvider
        successColor="#526FFF"
        textStyle={{ fontSize: 14 }}

      >
        <Navigation />
      </ToastProvider>
    </ProviderRedux>
  );
}



export default App;
