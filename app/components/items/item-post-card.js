/**
 * @flow
 */
'use strict';

import React, {Component, PropTypes} from "react";
import {Image, TouchableOpacity} from "react-native";
import {Body, Button, Card, CardItem, H3, Icon, Left, Text, Thumbnail, View} from "native-base";
import I18n from "../../localizations/I18n";
import he from "he";
import HTMLView from "react-native-htmlview";

/**
 * Basic needs for item:
 * title
 * title_plain
 * type: post
 * url
 * excerpt
 * id
 * categories: description / id / parent / post_count / slug / title
 * author: description / name / nickname / slug / id
 * comment_count
 * comment_status
 * comments
 * custom_fields: onesignal_meta_box_present / onesignal_send_notification
 * date: like 2017-02-22 00:11:14
 * modified
 * slug
 * status: publish
 * tags: description / id / post_count / slug / title
 */
export default class ItemPostCard extends Component {
  static defaultProps = {
    title: '',
    excerpt: '',
    commentCount: 0,
    slug: '',
    id: 0,
    authorName: '',
    authorId: 0,
    thumbnailImage: {}
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    slug: PropTypes.string,
    id: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    thumbnailImage: PropTypes.object.isRequired
  };

  render() {
    return (
      <Card>
        <CardItem header>
          <Left>
            <H2>{he.unescape(this.props.title)}</H2>
          </Left>
        </CardItem>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft: 16}}>
            <Thumbnail small source={{uri: 'https://unsplash.it/80/80?random'}}/>
            <Text
              style={{marginLeft: 12}}>
              {this.props.authorName}
            </Text>
          </View>
        </TouchableOpacity>
        <CardItem cardBody>
          <Body>
          <Image source={{uri: this.props.image}} style={styles.thumbnailImage}/>
          </Body>
        </CardItem>
        <CardItem style={{flexDirection: 'column'}}>
          <HTMLView value={this.props.excerpt.trim()}/>
        </CardItem>
        <CardItem style={{justifyContent: 'space-around', borderTopWidth: 0.5, borderTopColor: '#eee'}}>
          <Button transparent>
            <Icon name="chatbubbles"/>
            <Text>{this.props.commentCount}</Text>
          </Button>
          <Button transparent>
            <Icon name="md-share"/>
            <Text>{I18n.t('share')}</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  thumbnailImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: 160
  }
};
