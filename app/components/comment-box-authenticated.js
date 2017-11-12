'use strict';
import React from 'react';
import { Icon, Button } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { View, Text, TextInput } from 'react-native';
import { receiveComment } from '../actions/actions-content';
import API from '../services/api';
import Styles from './_styles/styles-comment-box';

const api = API.create();

console.disableYellowBox = true;

const onSubmit = (values, dispatch, { user, post, reset }) => {
  const { content } = values;
  const authorData = {
    id: user.id,
    username: user.username,
    password: user.password,
  };
  return api
    .createCommentWithAuthor(post.id, 0, content, authorData)
    .then(result => {
      const { data } = result;
      console.log(result);
      reset();
      dispatch(receiveComment(data));
      setTimeout(() => console.log(post), 2000);
    })
    .catch(error => console.log(error));
};

const validate = values => {
  const errors = {};
  if (!values.content) {
    errors.content = 'Required';
  }
  return errors;
};

const commentField = ({ input, placeholder, meta, ...inputProps }) => {
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
        multiline
        onBlur={input.onBlur}
        editable={!submitting}
        placeholder={'Enter your comment'}
        placeholderTextColor={'#63585b'}
        underlineColorAndroid={'transparent'}
        style={[Styles.input, Styles.inputArea]}
      />
    </View>
  );
};

const CommentBoxAuthenticated = props => {
  const { handleSubmit, submitting } = props;
  return (
    <View style={[props.style, Styles.formContainer]}>
      <Field name={'content'} component={commentField} />
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

export default reduxForm({ form: 'comment-box-authenticated', validate })(
  CommentBoxAuthenticated,
);
