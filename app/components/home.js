/**
 * @flow
 */
import React, {Component} from 'react';
import {
  Container, Header, Button, Content,
  Left, Body, Right, Title, Tabs, Tab, TabHeading, Icon, Text
} from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
          <Title>Clip-sub</Title>
          </Body>

          <Right>
            <Button transparent>
              <Icon name='refresh'/>
            </Button>
          </Right>
        </Header>

        <Content>
          <Tabs locked={false}>
            <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
              <Text>asdasd</Text>
            </Tab>
            <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
              <Text>asdasd</Text>
            </Tab>
            <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
              <Text>asdasd</Text>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}