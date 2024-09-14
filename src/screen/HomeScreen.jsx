import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate('Login')
    }

    const hangleSignup = () => {
      navigation.navigate('Signup')
  }
    
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/image.png')} style={styles.image} />
      <Text style={styles.title}>Lorem ipsum dolor.</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>

      <View style={styles.buttonContainer}>
    <TouchableOpacity style={[styles.loginButtonWrapper,{backgroundColor: colors.primary,}]}>
          <Text style={styles.loginButtonText} onPress={handleLogin}>Login</Text>
        </TouchableOpacity >
        <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={hangleSignup}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  logo: {
    height: 40,
    width: 140,
  marginVertical: 50,
  },
  image: {
    marginVertical: 20,
    height:250,
    width:231,
  },
  title: {
    fontSize: 40,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontFamily: fonts.bold,
    color: colors.primary,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: colors.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    width:'80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
  },
  signupButtonText: {
    fontSize: 18,
  }
});
