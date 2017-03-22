/**
 * @flow
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Image, TouchableNativeFeedback} from 'react-native';
import {Container, Card, CardItem, Text, H3, Left, Body} from 'native-base';

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
    return(
      <Card>
        <CardItem header>
          <Left>
            <H3>{this.props.title}</H3>
            <Text note>{this.props.excerpt}</Text>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Body>
            <Image source={this.props.image} style={styles.thumbnailImage}/>
          </Body>
        </CardItem>
        <CardItem footer>
          <TouchableNativeFeedback>
            <Icon active name="thumbs-up"/>
            <Text>{this.props.authorName}</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <Icon active name="chatbubbles"/>
            <Text>{this.props.commentCount}</Text>
          </TouchableNativeFeedback>
          <Button transparent>
            <Icon active name="chatbubbles"/>
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
}
