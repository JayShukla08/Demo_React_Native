import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppPro';

type NotificationsProps = NativeStackScreenProps<
  RootStackParamList,
  'Notifications'
>;

const Notifications = ({navigation}: NotificationsProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Notifications</Text>
          {/* <View style={styles.buttonCont}>
            <Button
              style={styles.button}
              title="LoginPage"
              onPress={() => navigation.push('LoginPage')}
            />
          </View> */}
          <View style={styles.buttonCont}>
            <Button
              style={styles.button}
              title="Back"
              color="grey"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100%',
  },
  subContainer: {
    marginTop: 50,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 25,
    width: '80%',
    borderRadius: 8,
    height: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    color: '#222',
  },
  buttonCont : {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    height: 'max-content',
  },
  button : {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 70,
  },
});
