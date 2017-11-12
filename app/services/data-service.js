'use strict';
import { AsyncStorage } from 'react-native';

const KEY_USER_DATA = '_USERDATA';
const KEY_USER = '_USER';
const KEY_COOKIE = '_COOKIE';

const DataService = {
  async storeUserData(data) {
    try {
      await AsyncStorage.setItem(KEY_USER_DATA, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  },
  async getUserData() {
    try {
      let data = await AsyncStorage.getItem(KEY_USER_DATA);
      return JSON.parse(data);
    } catch (error) {
      console.log(error);
    }
  },

  async storeUser(userData) {
    try {
      AsyncStorage.setItem(KEY_USER, JSON.stringify(userData));
    } catch (error) {
      console.log(error);
    }
  },

  async getUser() {
    try {
      let userData = await AsyncStorage.getItem(KEY_USER);
      return JSON.parse(userData);
    } catch (error) {
      console.log(error);
    }
  },

  async getCookie() {
    try {
      let cookieData = await AsyncStorage.getItem(KEY_COOKIE);
      return JSON.parse(cookieData);
    } catch (error) {
      console.log(error);
    }
  },
  async storeCookieAndUser(data) {
    try {
      await AsyncStorage.multiSet([
        [KEY_COOKIE, { cookie: data.cookie, cookie_name: data.cookie_name }],
        [KEY_USER, data.user],
      ]);
    } catch (error) {
      console.log(error);
    }
  },
};

export default DataService;
