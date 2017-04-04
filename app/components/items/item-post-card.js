/**
 * @flow
 */
'use strict';

import React, {Component, PropTypes} from "react";
import {Image, TouchableNativeFeedback} from "react-native";
import {Body, Button, Card, CardItem, H3, Icon, Left, Text} from "native-base";
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
            <H3>{he.unescape(this.props.title)}</H3>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Body>
            <Image source={{uri: this.props.image}} style={styles.thumbnailImage}/>
          </Body>
        </CardItem>
        <CardItem content>
          <HTMLView value={this.props.excerpt}/>
        </CardItem>
        <CardItem style={{ justifyContent: 'space-around', borderTopWidth: 0.5, borderTopColor: '#eee' }}>
          <Button transparent>
            <Icon name="thumbs-up"/>
            <Text>{this.props.authorName}</Text>
          </Button>
          <Button transparent>
            <Icon name="chatbubbles"/>
            <Text>{this.props.commentCount}</Text>
          </Button>
          <Button transparent>
            <Icon name="chatbubbles"/>
            <Text>Share</Text>
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
