/**
 * @flow
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Image} from 'react-native';
import {Container, Card, CardItem, Text, H3, Body} from 'native-base';

export default class ItemPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Container>
        <Card>
          <CardItem header>
            <H3>{this.props.title}</H3>
            <Text>{this.props.excerpt}</Text>
          </CardItem>

          <CardItem>
            <Body>
            <Image source={this.props.thumbnail}/>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>{this.props.authorName | ''}</Text>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

ItemPost.defaultProps = {
  title: '',
  excerpt: '',
  thumbnail: '',
  comment_count: 0
};

ItemPost.propTypes = {
  title: PropTypes.string,
  comment_count: PropTypes.number,
  slug: PropTypes.string,
  id: PropTypes.number
};