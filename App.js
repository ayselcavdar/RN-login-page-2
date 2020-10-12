import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Button } from './src/components/Button';
import { Input } from './src/components/Input';

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'cyan' }}>
    <KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS=="android" ? null : 'padding'} >
    <ScrollView style={{flex:1}} bounces={false}>
      <View>
        <Image
          source={require('./src/assets/cart.png')}
          style={styles.logoStyle}
        />
        <Input holder="E-posta adresinizi giriniz" />
        <Input holder="sifrenizi giriniz" />
        <Button text="Giris yap" />
      </View>
       </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.45,
  },
});
