/**
 * @flow
 */
'use strict';
import React from 'react';
import { Image, TouchableOpacity, Platform, Share } from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Icon,
  Left,
  Text,
  Thumbnail,
  View,
} from 'native-base';
import HTMLView from 'react-native-htmlview';
import HTMLParser from 'fast-html-parser';
import he from 'he';
import I18n from '../../localizations/I18n';

const ItemPostCard = props => {
  const { navigate } = props;
  const { id, content, title, excerpt, link } = props.post;
  const { author, replies } = props.post._embedded;
  const sharePost = () => {
    const shareContent = {
      message: link,
      title: 'Clip-sub share',
      url: link,
    };

    const options = {
      tintColor: '#fff',
      dialogTitle: 'Share this article',
    };

    Share.share(shareContent, options);
  };

  const itemNode = HTMLParser.parse(he.unescape(content.rendered));
  let imageLink = '';
  try {
    imageLink = itemNode.querySelector('img').attributes['data-orig-file'];
  } catch (e) {
    imageLink = '';
  }
  // By default, it parses the first image in the post.

  return (
    <Card>
      <CardItem header>
        <Left>
          <Text style={styles.title}>
            {he.unescape(title.rendered)}
          </Text>
        </Left>
      </CardItem>
      <TouchableOpacity>
        <View style={styles.author}>
          <Thumbnail small source={{ uri: author[0].avatar_urls['48'] }} />
          <Text style={styles.authorName}>
            {author[0].name}
          </Text>
        </View>
      </TouchableOpacity>
      <CardItem cardBody>
        <Body>
          <Image
            source={{ uri: imageLink || '' }}
            style={styles.thumbnailImage}
          />
        </Body>
      </CardItem>
      <CardItem>
        <HTMLView value={he.unescape(excerpt.rendered.trim())} />
      </CardItem>
      <CardItem style={styles.cardBottom}>
        <Button
          transparent
          small
          onPress={() => navigate('Content', { postId: id })}
        >
          <Icon name="chatbubbles" />
          <Text>
            {I18n.t('comment', { count: replies ? replies[0].length : 0 })}
          </Text>
        </Button>
        <Button transparent small onPress={() => sharePost()}>
          <Icon name="md-share" />
          <Text>
            {I18n.t('share')}
          </Text>
        </Button>
      </CardItem>
    </Card>
  );
};

export { ItemPostCard };

const styles = {
  thumbnailImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: 160,
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
  cardBottom: {
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
  },
};
