import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Linking} from 'react-native';

export default class App extends React.Component {
   Android(e) {
     try{
       Linking.openURL('SSiMobileCharting://sdrecorder?chart=9205C&startTime=6-28-2018 15:00&endTime=6-28-2018 15:30');
       Console.log(3);
     }catch(err){
       console.log(err);
     }
  }
  IOS(e) {
    try{
      Linking.openURL('SSiMobileCharting://sdrecorder?chart=9205C&startTime=6-28-2018 15:00&endTime=6-28-2018 15:30');
      Console.log(3);
    }catch(err){
      console.log(err);
    }
 }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.Android} title="Android1"/>
        <Button onPress={this.IOS} title="IOS5"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
