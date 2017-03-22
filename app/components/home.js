/**
 * @flow
 */
'use strict';
import React, {Component} from "react";
import {Container, Header, Button, Item, Input, Left, Body, Right, Title, Icon, Text} from "native-base";
import PostSearchBar from "./post-search-bar";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchBar: false
    }
  }

  componentDidMount() {

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
          <Button
            title={''}
            onPress={() => {}}
            transparent>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
        <Title>Clip-sub</Title>
        </Body>

        <Right>
          <Button
            title={''}
            onPress={() => console.log('yo')}
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
        {/*this.state.showSearchBar ? this._renderHeader() : this._renderSearchBarHeader()*/}
        <Header>
          <Left>
            <Button
              title={''}
              onPress={() => {}}
              transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
          <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <PostSearchBar/>
      </Container>
    );
  }
}