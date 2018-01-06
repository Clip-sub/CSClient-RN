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
import { CSLayout } from '../layouts/cs-layout';

export class Profile extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light',
  };

  render() {
    return (
      <CSLayout>
        <View style={styles.backdrop}>
          <ImageBackground
            style={styles.avatarBackground}
            blurRadius={50}
            source={{ uri: 'https://puu.sh/yQSgN/c56c9a6435.jpg' }}
          >
            <Image
              style={styles.avatar}
              source={{ uri: 'https://puu.sh/yPhJ4.png', cache: 'force-cache' }}
            />

            <Text style={styles.name}>Sophia Emilion</Text>
            <Text style={styles.joinDate}>Joined: 12th 2017</Text>
            <Text style={styles.headline}>
              Fancy quotessadsadsadsadsadsadsadasd
            </Text>
          </ImageBackground>
        </View>
      </CSLayout>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: Colors.BLACK,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 8,
  },
  avatarBackground: {
    width,
    minHeight: 160,
    paddingTop: 32,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.WHITE,
    backgroundColor: 'transparent',
  },
  joinDate: {
    color: Colors.WHITE,
    fontSize: 11,
    backgroundColor: 'transparent',
  },
  headline: {
    color: Colors.WHITE,
    fontSize: 12,
    marginVertical: 8,
    backgroundColor: 'transparent',
    fontStyle: 'italic',
  },
});
