import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Button,
    Appearance
  } from 'react-native';
  import React, {useEffect,useState} from 'react';
  import {NativeStackScreenProps} from '@react-navigation/native-stack';
  import {RootStackParamList} from '../App';
  
  type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
  
  const Welcome = ({navigation}: WelcomeProps) => {
    const [theme,setTheme] = useState(Appearance.getColorScheme());
    useEffect(() => {
      const colorTheme = Appearance.getColorScheme();
      console.log(colorTheme);
      if(theme==='light'){
        setTheme('light');
      }
      else{
        setTheme('dark');
      }
    }, []);
    return (
      <SafeAreaView>
        <View style={theme==='light'?styles.container:styles.dContainer}>
          <View style={theme==='light'?styles.subContainer:styles.dSubContainer}>
            <Text style={theme==='light'?styles.title:styles.dTitle}>Welcome, [Name]!</Text>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.push('CourseRegistration')}>
                <Text style={theme==='light'?styles.optionText:styles.dOptionText}>Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.push('Notifications')}>
                <Text style={theme==='light'?styles.optionText:styles.dOptionText}>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={theme==='light'?styles.optionText:styles.dOptionText}
                onPress={() => navigation.push('GradeCard')}
                >Grade Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.replace('LoginPage')}>
                <Text style={theme==='light'?styles.optionText:styles.dOptionText}>Log out</Text>
              </TouchableOpacity>
              {/* <Button
                title="Course Registration"
                onPress={() => navigation.push('CourseRegistration')}
              /> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Welcome;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    dContainer: {
      backgroundColor: '#423f3e',
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
    dSubContainer: {
      backgroundColor: '#615e5d',
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
      fontSize: 30,
      marginBottom: 10,
      color: '#111',
    },
    dTitle: {
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 10,
      color: '#ffffff',
    },
    options: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    option: {
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      marginBottom: 5,
      // backgroundColor: '#fff',
    },
    optionText: {
      fontSize: 20,
      color: '#2196f3',
    },
    dOptionText: {
      fontSize: 20,
      color: '#bc93cf',
    },
  });
  