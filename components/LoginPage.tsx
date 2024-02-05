import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Appearance
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
// import {RootStackParamList}

type LoginPageProps = NativeStackScreenProps<RootStackParamList, 'LoginPage'>;

const LoginPage = ({navigation}: LoginPageProps) => {
  const [theme,setTheme] = useState('LIGHT')
  useEffect(() => {
    const colorTheme = Appearance.getColorScheme();
    console.log(colorTheme);
    if(theme==='light'){
      setTheme('light');
    }
    else{
      setTheme('dark');
    } 
  });
  const [state, setState] = useState({
    mbnum:'',
    otp:'',
  });
  return (
    <SafeAreaView>
      <View style={styles.viewContainer}>
        <View style={styles.container}>
          <Text style={styles.title}> Login</Text>
          <Text style={{marginBottom: 5, color: 'black', fontSize: 18,}}>Mobile Number:</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Mobile Number"
              placeholderTextColor="#003f5c"
              onChangeText={text => setState({mbnum: text})}
            />
          </View>
          <Text style={{marginBottom: 5, color: 'black', fontSize: 18,}}>OTP:</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              secureTextEntry
              placeholder="OTP"
              placeholderTextColor="#003f5c"
              onChangeText={text => setState({otp: text})}
            />
          </View>

          {/* login button */}
          <TouchableOpacity
            onPress={() => navigation.replace('Welcome')}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 'max-content',
    padding: 20,
    paddingTop: 35,
    paddingBottom: 35,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#111',
    marginBottom: 40,
  },
  inputView: {
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 8,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 15,
  },
  inputText: {
    height: 50,
    color: '#111',
  },
  forgotAndSignUpText: {
    color: 'blue',
    fontSize: 14,
  },
  loginBtn: {
    // width: '35%',
    backgroundColor: '#4CB050',
    borderRadius: 7,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 20,
  },
  loginText: {
    color: '#ddd',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginPage;
