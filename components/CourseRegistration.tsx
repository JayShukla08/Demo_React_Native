import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React,{useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


type CourseRegistrationProps = NativeStackScreenProps<
  RootStackParamList,
  'CourseRegistration'
>;


const CourseRegistration = ({navigation}: CourseRegistrationProps) => {
  
  const [checkboxStates, setCheckboxStates] = useState({
    course1: false,
    course2: false,
    course3: false, 
  });

  const handleCheckboxChange = checkboxId => isChecked => {
    setCheckboxStates({
      ...checkboxStates,
      [checkboxId]: isChecked,
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Course Registration</Text>
          <View style={styles.optionsCont}>
            <BouncyCheckbox
              style={styles.checkbox}
              isChecked={checkboxStates.course1}
              text="course 1"
              fillColor="#2196f3"
              textStyle={{textDecorationLine: 'none'}}
              iconStyle={{borderRadius: 5,}}
              innerIconStyle={{borderRadius: 5,}}
              onPress={handleCheckboxChange('course1')}
            />
            <BouncyCheckbox
              style={styles.checkbox}
              isChecked={checkboxStates.course2}
              text="course 2"
              fillColor="#2196f3"
              textStyle={{textDecorationLine: 'none'}}
              iconStyle={{borderRadius: 5,}}
              innerIconStyle={{borderRadius: 5,}}
              onPress={handleCheckboxChange('course2')}
            />
            <BouncyCheckbox
              style={styles.checkbox}
              isChecked={checkboxStates.course3}
              text="course 3"
              fillColor="#2196f3"
              textStyle={{textDecorationLine: 'none'}}
              iconStyle={{borderRadius: 5,}}
              innerIconStyle={{borderRadius: 5,}}
              onPress={handleCheckboxChange('course3')}
            />
          </View>
          <View style={styles.buttonCont}>
            <Button
              style={styles.button}
              title="Back"
              color="grey"
              onPress={() => navigation.goBack()}
            />
            <Button
              style={styles.button}
              title="Register"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CourseRegistration;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  subContainer: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'max-content',
    paddingTop: 25,
    paddingBottom: 25,
    width: '80%',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    color: '#222',
  },
  buttonCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 5,
    height: 'max-content',
    flexDirection: 'row',
  },
  button: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 70,
  },
  optionsCont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    height: 'max-content',
  },
  checkbox: {
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
