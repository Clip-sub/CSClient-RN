'use strict';
import React, { Component } from 'react';
import { StatusBar, View, BackHandler, Platform } from 'react-native';
import {
  Button,
  Card,
  CardItem,
  Col,
  Container,
  Content,
  Grid,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail,
} from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';

class ProfileContainer extends Component {
  componentDidMount() {
    const { goBack } = this.props;
    BackHandler.addEventListener('hardwareBackPress', () => goBack());
  }

  componentWillUnmount() {
    const { goBack } = this.props;
    BackHandler.removeEventListener('hardwareBackPress', () => goBack());
  }

  render() {
    const { goBack } = this.props;
    const {
      description,
      slug,
      name,
      registered_date,
      id,
      avatar_urls,
      email,
    } = this.props.user;
    const regDate = moment(registered_date).format('LL');
    const avatarUrl = avatar_urls['96'];
    console.log(this.props.user);

    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <View style={styles.profileHeaderContainer}>
          <Header
            noShadow
            iosBarStyle={'light-content'}
            backgroundColor={'#fff'}
            style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
          >
            <StatusBar
              hidden={Platform.OS === 'ios' ? false : true}
              backgroundColor="transparent"
              barStyle="light-content"
              showHideTransition={'fade'}
              animated
            />
            <Left>
              <Button title={'Back'} transparent onPress={() => goBack()}>
                <Icon style={{ color: '#fff' }} name="arrow-back" />
              </Button>
            </Left>
          </Header>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Thumbnail large source={{ uri: avatarUrl }} />
            <Text
              style={{
                color: '#78909C',
                marginTop: 16,
                backgroundColor: 'transparent',
              }}
            >
              {name}
            </Text>
            <Text style={{ fontSize: 10, color: '#78909C' }}>
              {`@(${slug})`}
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: '#fff',
                marginTop: 10,
                paddingHorizontal: 40,
                textAlign: 'center',
              }}
            >
              {description}
            </Text>
          </View>
        </View>

        <Content>
          <Card>
            <CardItem header>
              <Text>Profile</Text>
            </CardItem>

            <CardItem>
              <Icon active name="person" />
              <Text>Nickname</Text>
              <Right>
                <Text>
                  {name}
                </Text>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="calendar" />
              <Text>Registered</Text>
              <Right>
                <Text>
                  {regDate}
                </Text>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-card-outline" />
              <Text>ID</Text>
              <Right>
                <Text>
                  {id}
                </Text>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-mail-open-outline" />
              <Text>Email</Text>
              <Right>
                <Text style={{ fontSize: 12 }}>
                  {email}
                </Text>
              </Right>
            </CardItem>
          </Card>

          <View
            style={{
              flex: 1,
              height: 200,
              flexDirection: 'row',
              alignItems: 'stretch',
              padding: 12,
            }}
          >
            <Grid>
              <Col>
                <Button block rounded bordered style={{ marginHorizontal: 10 }}>
                  <Text style={{ textAlign: 'center' }}>Author's posts</Text>
                </Button>
              </Col>

              <Col>
                <Button
                  block
                  rounded
                  success
                  bordered
                  style={{ marginHorizontal: 10 }}
                >
                  <Text style={{ textAlign: 'center' }}>Edit Profile</Text>
                </Button>
              </Col>
            </Grid>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  profileHeaderContainer: {
    backgroundColor: '#1b1b1b',
    paddingBottom: 16,
  },
};

const mapStateToProps = state => {
  const { nav, common, user } = state;
  return {
    nav,
    common,
    user,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => {
    return dispatch(NavigationActions.back());
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
