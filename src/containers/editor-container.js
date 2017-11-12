/**
 * @flow
 */

'use strict';

import React, { PureComponent } from 'react';
import { View, StatusBar, Text } from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
} from 'native-base';
import {
  RichTextEditor,
  RichTextToolbar,
} from 'react-native-zss-rich-text-editor';
import { connect } from 'react-redux';
import DialogManager, { SlideAnimation } from 'react-native-dialog-component';
import GravatarAPI from '../services/api-gravatar';
import { fetchAnimeInfo } from '../actions/actions-anilist';

class EditorContainer extends PureComponent {
  componentDidMount() {
    GravatarAPI.test('doraemonfanclub@gmail.com', 'phamvanquan');
  }

  onPressAutoFetch = () => {
    const { dispatch } = this.props;
    DialogManager.show(
      {
        title: 'Pourquoi Facebook ?',
        width: '90%',
        dialogStyle: {
          borderRadius: 6,
          paddingTop: 12,
          paddingBottom: 40,
          paddingHorizontal: 18,
        },
        titleAlign: 'center',
        animationDuration: 200,
        dialogAnimation: new SlideAnimation({ slideFrom: 'bottom' }),
        children: (
          <View>
            <Text
              style={{ textAlign: 'center', fontSize: 12, color: '#5a5f66' }}
            >
              {'whyFacebook'}
            </Text>
          </View>
        ),
      },
      () => {
        console.log('callback - show');
      },
    );
    dispatch(fetchAnimeInfo('https://anilist.co/anime/20594'));
  };

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header iosBarStyle={'light-content'}>
          <StatusBar backgroundColor="#d32f2f" barStyle="light-content" />
          <Left>
            <Button
              title={''}
              transparent
              onPress={() => navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>
              {''}
            </Title>
          </Body>
        </Header>
        <View style={{ flex: 1, marginTop: 24, backgroundColor: '#fff' }}>
          <Button
            onPress={this.onPressAutoFetch}
            title="Learn More"
            color="#841584"
          />
          <RichTextEditor
            ref={r => (this.richtext = r)}
            initialTitleHTML={'Title!!'}
            initialContentHTML={
              'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'
            }
            editorInitializedCallback={() => console.log('ed')}
          />
          <RichTextToolbar
            getEditor={() => this.richtext}
            selectedButtonStyle={{ backgroundColor: 'yellow' }}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { nav, common, post } = state;
  return {
    nav,
    common,
    post,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);
