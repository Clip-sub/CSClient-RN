'use strict';
import React from 'react';
import { Icon, Button } from 'native-base';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { View, Text, TextInput, Alert } from 'react-native';
import { receiveComment } from '../actions/actions-content';
import API from '../services/api';
import Styles from './_styles/styles-comment-box';

const api = API.create();

const onSubmit = (values, dispatch, { post, reset }) => {
  const { name, email, comment } = values;
  console.log(values);
  const authorData = {
    author_email: email,
    author_name: name,
    author_url: null,
  };

  return api
    .createComment(post.id, 0, comment, authorData)
    .then(result => {
      const { data } = result;
      if (data.status === 'hold') {
        Alert.alert(
          'Clip-sub',
          'Your comment is current on hold, please wait for a moderator to approve it.',
          [
            {
              text: 'Ask me later',
              onPress: () => console.log('OK'),
            },
          ],
          { cancelable: true },
        );
      }
      console.log(result);
      reset();
      dispatch(receiveComment(data));
      setTimeout(() => console.log(post), 2000);
    })
    .catch(error => console.log(error));
};

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 3) {
    errors.username = 'Must be 3 characters or more';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.comment) {
    errors.comment = 'Required';
  }
  return errors;
};

const nameField = ({ input, placeholder, meta, ...inputProps }) => {
  const { invalid, touched, submitting } = meta;
  return (
    <View
      style={[
        Styles.inputWrapper,
        invalid && touched ? Styles.inputWrapperError : null,
      ]}
    >
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        value={input.value}
        multiline={false}
        selectionColor={'#ffefef'}
        editable={!submitting}
        placeholder={'Name'}
        placeholderTextColor={'#63585b'}
        underlineColorAndroid={'transparent'}
        style={[Styles.input]}
      />
    </View>
  );
};

const emailField = ({ input, placeholder, meta, ...inputProps }) => {
  const { invalid, touched } = meta;
  return (
    <View
      style={[
        Styles.inputWrapper,
        invalid && touched ? Styles.inputWrapperError : null,
      ]}
    >
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        value={input.value}
        multiline={false}
        numberOfLines={3}
        placeholder={'Email'}
        placeholderTextColor={'#63585b'}
        underlineColorAndroid={'transparent'}
        style={[Styles.input]}
      />
    </View>
  );
};

const commentField = ({ input, placeholder, meta, ...inputProps }) => {
  const { invalid, touched } = meta;
  return (
    <View
      style={[
        Styles.inputWrapper,
        invalid && touched ? Styles.inputWrapperError : null,
      ]}
    >
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        value={input.value}
        multiline
        numberOfLines={3}
        placeholder={'Enter your comment'}
        placeholderTextColor={'#63585b'}
        underlineColorAndroid={'transparent'}
        style={[Styles.input, Styles.inputArea]}
      />
    </View>
  );
};

const CommentBox = props => {
  const { handleSubmit, submitting } = props;
  return (
    <View style={[props.style, Styles.formContainer]}>
      <Field name={'name'} component={nameField} />
      <Field name={'email'} component={emailField} />
      <Field name={'comment'} component={commentField} />
      <Button
        danger
        block
        rounded
        bordered
        outline
        onPress={handleSubmit(onSubmit)}
        disabled={submitting}
        title={''}
      >
        <Icon active name="ios-person" style={{ color: '#fff' }} />
        <Text style={{ color: '#000' }}>
          {'Post your comment'}
        </Text>
      </Button>
    </View>
  );
};

export default reduxForm({ form: 'comment-box', validate })(CommentBox);
