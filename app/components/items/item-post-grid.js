/**
 * @flow
 */
'use strict';
import React from 'react';
import { View, TouchableOpacity, Image, Platform } from 'react-native';
import { Text, Icon } from 'native-base';
import I18n from '../../localizations/I18n';

const ItemPostGrid = props => {
  const { dispatch, title, authorName, image, commentCount } = props;

  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: image }} style={styles.thumbnailImage} />
      <Text style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity style={{ marginLeft: 12 }}>
        <View style={styles.author}>
          <Icon
            active
            name="person"
            style={{ fontSize: 14, color: '#1976D2' }}
          />
          <Text style={styles.authorName}>
            {authorName}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', paddingVertical: 4 }}>
            <Icon
              name="chatbubbles"
              style={{ fontSize: 12, color: '#676767' }}
            />
            <Text style={{ fontSize: 9, marginLeft: 6, color: '#676767' }}>
              {I18n.t('comment', { count: commentCount })}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
            <Icon name="md-share" style={{ fontSize: 12, color: '#676767' }} />
            <Text style={{ fontSize: 9, marginLeft: 6, color: '#676767' }}>
              {I18n.t('share')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ItemPostGrid };

const styles = {
  itemWrapper: {
    flex: 0.45,
    overflow: 'visible',
    backgroundColor: '#fff',
    marginHorizontal: 3,
    elevation: 3,
    shadowColor: '#676767',
    shadowOffset: { width: 0.3, height: 1.5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  thumbnailImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: 100,
  },
  title: {
    fontSize: 10,
    paddingHorizontal: 8,
    paddingTop: 6,
    //Iowan Old Style // Didot //Baskerville // AvenirNext-Medium
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Baskerville',
    }),
    color: '#676767',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  authorName: {
    marginLeft: 5,
    fontSize: 7,
    color: '#676767',
  },
  separator: {
    flex: 1,
    alignSelf: 'stretch',
    height: 0.7,
    opacity: 0.3,
    backgroundColor: '#4c4c4c',
    marginHorizontal: 6,
  },
};
