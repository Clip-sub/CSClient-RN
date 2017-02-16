/**
 * @flow
 */
import React, {Component} from "react";
import {Container, Header, Content, Left, Body, Right, Title} from "native-base";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>

          </Left>
          <Body>
          <Title>Clip-sub</Title>
          </Body>

          <Right>

          </Right>
        </Header>

        <Content>
        </Content>
      </Container>
    );
  }
}