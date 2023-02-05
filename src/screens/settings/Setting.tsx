import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { SettingRowComponent } from './components/SettingRow';

export const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
          <SettingRowComponent title='General' />
          <SettingRowComponent title='Data saving' />
          <SettingRowComponent title='Auto-play' />
          <SettingRowComponent title='Video quality preference' />
          <SettingRowComponent title='Downloads' />
          <SettingRowComponent title='Notifications' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
});