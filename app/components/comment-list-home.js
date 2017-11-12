/**
 * @flow
 */

'use strict';

import React, { PureComponent } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import he from 'he';
import moment from 'moment/min/moment-with-locales.min';

export default class CommentList extends PureComponent {
  componentDidMount() {
    const { getCommentsHome } = this.props;
    getCommentsHome(1);
  }

  renderCommentItem = (item, index) => {
    const { navigate } = this.props;
    const isPage = item._links.up[0].post_type === 'page';
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('Content', { postId: item.post, isPage })}
      >
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'stretch',
            alignItems: 'center',
            paddingHorizontal: 12,
            justifyContent: 'flex-start',
            paddingVertical: 8,
            backgroundColor: index % 2 === 0 ? '#ffeff0' : '#fff',
          }}
        >
          <Image
            style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }}
            source={{
              uri: item.author_avatar_urls['96'],
              cache: 'force-cache',
            }}
          />
          <View style={{ flexWrap: 'wrap' }}>
            <Text style={{ color: '#5d697c', fontSize: 11, flexWrap: 'wrap' }}>
              {item.author_name} commented on the post
            </Text>
            <Text
              style={{
                color: '#5d697c',
                fontSize: 12,
                fontWeight: '600',
                flexWrap: 'wrap',
                marginRight: 28,
              }}
            >
              {he.unescape(item._embedded.up[0].title.rendered)}
            </Text>

            <Text
              style={{
                fontSize: 11,
                fontStyle: 'italic',
                marginTop: 8,
                color: '#ff8282',
              }}
            >
              {moment(item.date).locale('en').startOf('day').fromNow()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { comments } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={comments.list}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => this.renderCommentItem(item, index)}
        />
      </View>
    );
  }
}
