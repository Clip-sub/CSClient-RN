/**
 * @flow
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Image, Platform } from 'react-native';
import {
  CardItem,
  Left,
  Thumbnail,
  Text,
  Body,
  Button,
  Icon,
  H3,
} from 'native-base';
import I18n from '../../localizations/I18n';

const ItemPostGrid = props => {
  const { dispatch, title, authorName, image, excerpt, commentCount } = props;

  return (
    <View>
      <CardItem header>
        <Left>
          <H3>{title}</H3>
        </Left>
      </CardItem>
      <TouchableOpacity>
        <View style={styles.author}>
          <Thumbnail
            small
            source={{ uri: 'https://unsplash.it/80/80?random' }}
          />
          <Text style={styles.authorName}>
            {authorName}
          </Text>
        </View>
      </TouchableOpacity>
      <CardItem cardBody>
        <Body>
          <Image source={{ uri: image }} style={styles.thumbnailImage} />
        </Body>
      </CardItem>
    </View>
  );
};

export { ItemPostGrid };

const styles = {
  thumbnailImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: 100,
  },
  title: {
    fontSize: 19,
    //Iowan Old Style // Didot //Baskerville //AvenirNext-Medium
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Baskerville',
    }),
    color: '#676767',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 16,
  },
  authorName: {
    marginLeft: 12,
  },
};
