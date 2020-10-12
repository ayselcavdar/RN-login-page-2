import React from 'react';
import { Text, View, StyleSheet, SafeAreaView,Button } from 'react-native';



const App = () => {
  const pressFunction = () => {
    const user = {
      name: 'Ice',
      age: 26,
      isAdmin: false,
    };
    const member = {
      password: '1234',
      type: null,
    };

    const myArr = [1, 2, 3, 4];

    const secArr = ['Izmir', 'Ankara', ...myArr];

    const newArr = [...myArr];

    console.log(user);
    console.log(member);
    //Destruction Operator
    const myObj = {
      url: 'www.google.com',
      data: [1, 2, 3],
      config: 'EMPTY',
    };

    const { config } = myObj;

    console.log(config);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello React Native CLARUSWAY!</Text>
        <Button title="Log" onPress={pressFunction} />
      </View>
    </SafeAreaView>
  );
};

export default App;
