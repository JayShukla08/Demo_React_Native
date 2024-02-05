import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';

function LoginDemo() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.as}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#eee"
            //   onChangeText={text => setState({email: text})}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'max-content',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#fff',
    marginBottom: 40,
  },
  inputText: {
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
});

export default LoginDemo;
