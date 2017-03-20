'use strict';

import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import {
  Container,
  Header,
  Footer,
  Content,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Card,
  CardItem,
  Thumbnail,
  H3
} from "native-base";
import {connect} from "react-redux";
import PostSearchBar from "../components/post-search-bar";

class HomeContainer extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
          <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <PostSearchBar/>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://secure.gravatar.com/avatar/ee47345bbfe099853975dcff91da0ada?s=80&r=g'}}/>
                <Body>
                <H3>One Room – 02-03</H3>
                <Text note>One Room (Ongoing)</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={{flex: 1, alignSelf: 'stretch', height: 150}} source={{uri: 'https://s18.postimg.org/k04igcczd/o03.jpg'}}/>
            </CardItem>
            <CardItem content>
              <Text>Có lyric rồi, để lượt sau update nhé.
Do chưa ra single nên tạm thời chưa có ED, khi nào ra single sẽ cập nhật lại thành v1.</Text>
            </CardItem>
            <CardItem style={{ justifyContent: 'space-around' }}>
              <Button transparent>
                <Icon active name="thumbs-up"/>
                <Text>12 Likes</Text>
              </Button>
              <Button transparent>
                <Icon active name="chatbubbles"/>
                <Text>4 Comments</Text>
              </Button>
              <Text>11h ago</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://secure.gravatar.com/avatar/ee47345bbfe099853975dcff91da0ada?s=80&r=g'}}/>
                <Body>
                <H3>One Room – 01</H3>
                <Text note>One Room (Ongoing)</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={{flex: 1, alignSelf: 'stretch', height: 150}} source={{uri: 'https://s30.postimg.org/3jzuo6woh/o01.jpg'}}/>
            </CardItem>
            <CardItem content>
              <Text>Có lyric rồi, để lượt sau update nhé.
Do chưa ra single nên tạm thời chưa có ED, khi nào ra single sẽ cập nhật lại thành v1.</Text>
            </CardItem>
            <CardItem style={{ justifyContent: 'space-around' }}>
              <Button transparent>
                <Icon active name="thumbs-up"/>
                <Text>12 Likes</Text>
              </Button>
              <Button transparent>
                <Icon active name="chatbubbles"/>
                <Text>4 Comments</Text>
              </Button>
              <Text>11h ago</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
function mapStateToProps(state /*, [ownProps] */) {
  const {activeTab, showSearchBar, searchKeyword} = state;

  return {
    activeTab,
    showSearchBar,
    searchKeyword
  }
}

export default connect(mapStateToProps)(HomeContainer);