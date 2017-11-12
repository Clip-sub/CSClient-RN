/**
 * @flow
 */

'use strict';

import React from 'react';
import { Icon } from 'native-base';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';

const ItemComment = props => {
  const { comment } = props;
  const displayDate = moment(comment.date)
    .startOf('day')
    .fromNow();
  const content = comment.content.rendered.replace(/(\r\n|\n|\r)/gm, '').trim();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: comment.author_avatar_urls['96'] }}
        style={styles.avatar}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.authorName}>{comment.author_name}</Text>
        <Text style={{ marginLeft: 8, fontSize: 10, color: '#a0a0a0' }}>
          {displayDate}
        </Text>
        <HTMLView
          style={{
            marginHorizontal: 6,
            marginVertical: 4,
          }}
          value={content}
          stylesheet={styles.commentCSS}
        />
        <View
          style={{
            flex: 1,
            height: 0.6,
            backgroundColor: '#ffd8d8',
            marginHorizontal: 6,
          }}
        />
        <View
          style={{
            alignItems: 'flex-end',
            backgroundColor: 'transparent',
            paddingHorizontal: 8,
            paddingVertical: 4,
            flex: 1,
          }}
        >
          <TouchableOpacity activeOpacity={0.6}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon style={{ color: '#ff2a63', fontSize: 22 }} name="send" />
              <Text style={{ marginLeft: 4, fontSize: 10, color: '#ff2a63' }}>
                Reply
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemComment;

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 0.7,
    borderColor: '#ff2a63',
    marginRight: 4,
    marginLeft: 6,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 7,
    backgroundColor: '#fff',
    margin: 8,
    borderColor: '#ffd8d8',
    borderWidth: 0.2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowColor: '#EF5350',
    shadowOpacity: 0.2,
    overflow: 'visible',
    elevation: 2,
  },
  authorName: {
    backgroundColor: 'transparent',
    color: '#ff2a63',
    marginLeft: 6,
    marginTop: 4,
  },
  commentCSS: {
    p: {
      fontWeight: '100',
      color: '#492d34',
    },
  },
};
