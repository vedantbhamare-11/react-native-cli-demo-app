import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
const SignupScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleBack}>
        <AntDesign name={'arrowleft'} color={colors.primary} size={30} />
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>Let's get started</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={'mail-outline'} color={colors.secondary} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name={'mobile1'} color={colors.secondary} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Phone"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={'lock-open-outline'}
            color={colors.secondary}
            size={24}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Password"
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureTextEntry(prev => !prev);
            }}>
            <Ionicons name={'eye-outline'} color={colors.secondary} size={24} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>

          <Text style={{textAlign: 'center', fontSize: 16}}>
            or continue with
          </Text>

          <TouchableOpacity style={styles.googleLoginButton}>
            <Image
              style={styles.googleicon}
              source={require('../assets/google.png')}
            />
            <Text style={styles.googleLoginText}>Google</Text>
          </TouchableOpacity>
          <View style={styles.textWrapper}>
            <Text style={{textAlign: 'center', fontSize: 16}}>
              Already have a acoount?
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 16}} onPress={handleLogin}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButtonWrapper: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 30,
    fontSize: 32,
    width: 155,
    color: '#000000',
    lineHeight: 48,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  textInput: {
    paddingHorizontal: 10,
    flex: 1,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: colors.primary,
  },
  signupButton: {
    borderWidth: 1,
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    marginVertical: 20,
  },
  signupText: {
    fontSize: 20,
    color: colors.white,
  },
  googleLoginButton: {
    borderWidth: 1,
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },
  googleLoginText: {
    fontSize: 20,
    color: colors.primary,
  },
  googleicon: {
    height: 18,
    width: 18,
    marginHorizontal: 10,
  },
  textWrapper: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
});
