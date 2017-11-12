/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

export default class PagePlaceholder extends Component {
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View
        style={{
          flex: 1,
          maxHeight: height,
          maxWidth: width,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Image
          style={{ height: 300, width: 300, marginBottom: 18 }}
          resizeMode={'contain'}
          source={require('../assets/asahi_chibi_1.png')}
        />
        <Text style={{ color: '#555459' }}>Coming soon...</Text>
      </View>
    );
  }
}
