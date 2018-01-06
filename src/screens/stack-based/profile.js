'use strict';
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  BackHandler,
  Platform,
  ScrollView,
} from 'react-native';
import {
  Button,
  Card,
  CardItem,
  Col,
  Container,
  Content,
  Grid,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail,
} from 'native-base';
import { connect } from 'react-redux';
import moment from 'moment';
import { Colors } from 'csclient-common';
import LottieView from 'lottie-react-native';
import { CSLayout } from '../layouts/cs-layout';

const { width, height } = Dimensions.get('window');

export class Profile extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light',
  };

  render() {
    return (
      <View style={{ flex: 1, height }}>
        <Image
          style={styles.avatarBackground}
          blurRadius={50}
          source={{ uri: 'https://puu.sh/yPhJ4.png' }}
        />

        <View style={styles.card}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://puu.sh/yPhJ4.png', cache: 'force-cache' }}
          />

          <Text style={styles.name}>Sophia Emilion</Text>
          <Text style={styles.joinDate}>Joined: 12th 2017</Text>
          <Text style={styles.headline}>
            Fancy quotessadsadsadsadsadsadsadasdsdfdsfdsfsdfdsfsfsfsdfdsf
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarBackground: {
    width,
    height: height * 0.36,
    backgroundColor: Colors.WHITE,
    paddingTop: 32,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 0,
  },
  card: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    width: width * 0.9,
    left: 0,
    right: 0,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    top: height * 0.17,
    shadowColor: '#676767',
    shadowOffset: { width: 0.3, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 7,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.BLACK,
    backgroundColor: 'transparent',
  },
  joinDate: {
    color: Colors.GRAY_MEDIUM,
    fontSize: 11,
    backgroundColor: 'transparent',
  },
  headline: {
    color: Colors.GRAY_MEDIUM,
    fontSize: 12,
    marginVertical: 8,
    backgroundColor: 'transparent',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
