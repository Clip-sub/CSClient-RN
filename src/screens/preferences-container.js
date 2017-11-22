import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
  Left,
  Icon,
  Body,
  Button,
  Right,
  Switch,
  Container,
  Content,
  Header,
  Text,
  Picker,
  Separator,
} from 'native-base';
import * as navigationActions from '../actions/actions-navigation';

const Item = Picker.Item;

class PreferencesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      results: {
        items: [],
      },
    };
  }

  componentDidMount() {
    const { goBack } = this.props;
    BackHandler.addEventListener('hardwareBackPress', () => goBack());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  onValueChange = (value: string) => {
    this.setState({
      selected: value,
    });
  };

  render() {
    const { navigate, goBack } = this.props;

    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header>
          <Left>
            <Button title={''} transparent onPress={() => goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content>
          <List>
            <Separator bordered>
              <Text>Common settings</Text>
            </Separator>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Notifications</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Theme</Text>
              </Body>
              <Right>
                <Picker
                  supportedOrientations={['portrait', 'landscape']}
                  iosHeader="Select theme"
                  headerBackButtonText="Back"
                  mode="dropdown"
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange}
                >
                  <Item label="Megumi" value="key0" />
                  <Item label="Haruka" value="key1" />
                  <Item label="Cinder" value="key2" />
                  <Item label="Okita" value="key3" />
                </Picker>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <Separator bordered>
              <Text>Misc.</Text>
            </Separator>
            <ListItem icon>
              <Left>
                <Icon name="logo-github" />
              </Left>
              <Body>
                <Text>Open Source Licenses</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  return { posts };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(navigationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  PreferencesContainer,
);
