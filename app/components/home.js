/**
 * @flow
 */
'use strict';
import React, {Component} from "react";
import {Container, Header, Content, Button, Item, Input, Left, Body, Right, Title, Icon, Text} from "native-base";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchBar: false
    }
  }

  componentDidMount() {
    this.props.init();
  }

  _search(keyword) {

  }

  _switchHeader() {
    this.setState({showSearchBar: !this.state.showSearchBar})
  }

  _renderNormalHeader() {
    return (
      <Header searchBar={this.state.showSearchBar} rounded hasTabs>
        <Left>
          <Button transparent>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
        <Title>Clip-sub</Title>
        </Body>

        <Right>
          <Button
            title={''}
            onPress={() => console.log('')}
            transparent>
            <Icon name='search'/>
          </Button>
        </Right>
      </Header>
    );
  }

  _renderSearchBarHeader() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="search"/>
          <Input placeholder="Search"/>
          <Icon active name="people"/>
        </Item>
        <Button
          title={''}
          onPress={() => console.log('')}
          transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }

  render() {
    return (
      <Container>
        {this.state.showSearchBar ? this._renderHeader() : this._renderSearchBarHeader()}
        <Content>

        </Content>
      </Container>
    );
  }
}