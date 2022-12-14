import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {
  useWalletConnect,
  withWalletConnect,
  walletServices,
} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';

const App = () => {
  const connector = useWalletConnect();
  // console.log('provider is: ', provider);
  console.log('connected account address is: ', connector.accounts);
  // console.log('is account connected? ', connector._rpcUrl);
  // // console.log('network is: ', connector.signTypedData());
  // provider.on('accountsChanged', accounts => {
  //   console.log('accountsChanged: ', accounts);
  // });
  const connectionHandler = async () => {
    connector.connect();
    const provider = new WalletConnectProvider({
      infuraId: '27e484dcd9e3efcfd25a83a78777cdf1', // Required
    });
    console.log('provider methods are: ', provider);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Connect Wallet" onPress={connectionHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default withWalletConnect(App, {
  redirectUrl:
    Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});
