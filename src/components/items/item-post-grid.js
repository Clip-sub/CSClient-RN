/**
 * @flow
 */
'use strict';
import React from 'react';
import { View, TouchableOpacity, Image, Platform, Share } from 'react-native';
import { Text, Icon } from 'native-base';
import HTMLParser from 'fast-html-parser';
import he from 'he';
import I18n from '../../localizations/I18n';

const ItemPostGrid = props => {
  const { id, title, author, content, comment_count, url } = props.post;
  const { dispatch } = props;
  const sharePost = () => {
    const content = {
      message: url,
      title: 'Clip-sub share',
      url: url,
    };

    const options = {
      tintColor: '#fff',
      dialogTitle: 'Doko;',
    };

    Share.share(content, options);
  };

  const itemNode = HTMLParser.parse(he.unescape(content));
  // const imageLink = 'https://lorempixel.com/400/200/';
  const imageLink = itemNode.querySelector('img').attributes['data-lazy-src'];
  // By default, it parses the first image in the post.

  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: imageLink }} style={styles.thumbnailImage} />
      <Text
        style={styles.title}
        onPress={() => dispatch(navigate('Content', { postId: id }))}
      >
        {he.unescape(title)}
      </Text>
      <TouchableOpacity style={{ marginLeft: 12 }}>
        <View style={styles.author}>
          <Icon
            active
            name="person"
            style={{ fontSize: 14, color: '#1976D2' }}
          />
          <Text style={styles.authorName}>{author.name}</Text>
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
              {I18n.t('comment', { count: comment_count })}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => sharePost()}>
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
    marginVertical: 3,
    minHeight: 200,
    elevation: 2,
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
    opacity: 0,
    backgroundColor: '#4c4c4c',
    marginHorizontal: 6,
  },
};
