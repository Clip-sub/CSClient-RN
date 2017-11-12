/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Icon } from 'native-base';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import SpinKit from 'react-native-spinkit';
import { saveUserData } from '../../actions/actions-users';
import { reset } from '../../actions/actions-navigation';
import I18n from '../../localizations/I18n';
import APIv2, { Status } from '../../services/api';

const apiv2 = APIv2.create();

const onSubmit = (values, dispatch) => {
  const { username, password, email } = values;
  console.log(values);
  return apiv2
    .createUser({ username, password, email })
    .then(d => {
      console.log(d);
      if (d.status === Status.CREATED) {
        const { data } = d;
        dispatch(saveUserData({ ...data, password }));
        dispatch(reset(['HomeDrawer']));
      } else {
        const { data } = d;
        alert(data.message || 'Error');
        throw new SubmissionError({ _error: data.message });
      }
    })
    .catch(error => {
      console.log(error);
      throw new SubmissionError({ _error: error });
    });
};

const usernameField = ({ input, meta, ...inputProps }) => {
  const { invalid, touched } = meta;
  return (
    <View
      style={[
        styles.inputWrapper,
        invalid && touched ? styles.inputWrapperError : null,
      ]}
    >
      <Icon name="person" style={styles.icon} />
      <TextInput
        {...inputProps}
        name={'username'}
        onChangeText={input.onChange}
        value={input.value}
        onBlur={input.onBlur}
        selectionColor={'#ffefef'}
        placeholder={I18n.t('register_username_placeholder')}
        placeholderTextColor={[styles.placeholderTextColor]}
        underlineColorAndroid={'transparent'}
        style={styles.input}
      />
    </View>
  );
};

const passwordField = ({ input, meta, ...inputProps }) => {
  const { invalid, touched } = meta;
  return (
    <View
      style={[
        styles.inputWrapper,
        invalid && touched ? styles.inputWrapperError : null,
      ]}
    >
      <Icon name="lock" style={styles.icon} />
      <TextInput
        {...inputProps}
        name={'password'}
        onChangeText={input.onChange}
        value={input.value}
        onBlur={input.onBlur}
        secureTextEntry
        selectionColor={'#ffefef'}
        placeholder={I18n.t('register_password_placeholder')}
        placeholderTextColor={[styles.placeholderTextColor]}
        underlineColorAndroid={'transparent'}
        style={styles.input}
      />
    </View>
  );
};

const emailField = ({ input, type, meta, ...inputProps }) => {
  const { invalid, touched } = meta;
  return (
    <View
      style={[
        styles.inputWrapper,
        invalid && touched ? styles.inputWrapperError : null,
      ]}
    >
      <Icon name="mail" style={styles.icon} />
      <TextInput
        {...inputProps}
        name={'email'}
        keyboardType={'email-address'}
        onChangeText={input.onChange}
        value={input.value}
        onBlur={input.onBlur}
        selectionColor={'#ffefef'}
        autoCapitalize={'none'}
        placeholder={I18n.t('register_email_placeholder')}
        placeholderTextColor={styles.placeholderTextColor}
        underlineColorAndroid={'transparent'}
        style={styles.input}
      />
    </View>
  );
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
  if (!values.password) {
    errors.age = 'Required';
  } else if (Number(values.age) < 6) {
    errors.age = 'Must be 6 characters or more';
  }
  return errors;
};

class RegisterForm extends Component {
  static defaultProps = {
    isLoading: false,
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    const registerLabel = (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon active name="ios-person" style={{ color: '#fff' }} />
        <Text style={{ color: '#fff' }}>
          {I18n.t('register_button_label')}
        </Text>
      </View>
    );

    return (
      <View style={[this.props.style, styles.formContainer]}>
        <Field name={'username'} component={usernameField} />
        <Field name={'password'} component={passwordField} />
        <Field name={'email'} component={emailField} />
        <Button
          block
          rounded
          bordered
          outline
          light
          title={''}
          onPress={handleSubmit(onSubmit)}
          disabled={submitting}
        >
          {submitting
            ? <SpinKit type="Wave" size={26} color={'#ffffff'} />
            : registerLabel}
        </Button>
      </View>
    );
  }
}

const styles = {
  formContainer: {
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#fff',
    paddingTop: 26,
    paddingBottom: 18,
    marginHorizontal: 26,
    marginTop: 50,
    padding: 12,
    alignSelf: 'stretch',
  },
  inputWrapper: {
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 21,
    borderWidth: 0.6,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  inputWrapperError: {
    borderColor: '#EF5350',
  },
  input: {
    height: 42,
    flexGrow: 3,
    color: '#dbc5e0',
    fontSize: 14,
    marginLeft: 8,
    alignSelf: 'stretch',
    borderBottomWidth: 0,
    borderBottomColor: '#eee', // error: #ff4e4e
  },
  icon: {
    fontSize: 20,
    color: '#f2c9f9',
  },
  placeholderTextColor: 'rgba(255, 239, 239, 0.4)',
};

RegisterForm = reduxForm({ form: 'register', validate })(RegisterForm);
//export default connectStyle('megumi.RegisterForm')(RegisterForm);
export default RegisterForm;
