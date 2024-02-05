import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const MyComp = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false, 
  });

  const handleCheckboxChange = (checkboxId) => (isChecked) => {
    setCheckboxStates({
      ...checkboxStates,
      [checkboxId]: isChecked,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BouncyCheckbox
        style={styles.checkbox}
        isChecked={checkboxStates.checkbox1}
        text="Checkbox 1"
        textStyle={{textDecorationLine: 'none'}}
        onPress={handleCheckboxChange('checkbox1')}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        isChecked={checkboxStates.checkbox2}
        text="Checkbox 2"
        textStyle={{textDecorationLine: 'none'}}
        onPress={handleCheckboxChange('checkbox2')}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        isChecked={checkboxStates.checkbox3}
        textStyle={{textDecorationLine: 'none'}}
        text="Checkbox 3 (Initially Checked)"
        onPress={handleCheckboxChange('checkbox3')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    marginTop: 16,
  },
});

export default MyComp;
