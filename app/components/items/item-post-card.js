/**
 * @flow
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Image} from 'react-native';
import {Container, Card, CardItem, Text, H3, Left, Body} from 'native-base';

export default class ItemPostCard extends Component {
  static defaultProps = {
    title: '',
    excerpt: '',
    image: '',
    commentCount: 0
  };

  static propTypes = {
    title: PropTypes.string,
    excerpt: PropTypes.string,
    commentCount: PropTypes.number,
    slug: PropTypes.string,
    id: PropTypes.number
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
          <Button transparent>
            <Icon active name="thumbs-up"/>
            <Text>{this.props.authorName}</Text>
          </Button>
          <Button transparent>
            <Icon active name="chatbubbles"/>
            <Text>4 Comments</Text>
          </Button>
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