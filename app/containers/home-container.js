'use strict';

import React, {Component} from "react";
import {View, Image} from "react-native";
import {Container, Button, Icon, Header, Left, Fab} from "native-base";
import {connect} from "react-redux";
import Home from "../components/home";

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }

  render() {
    const {posts} = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              title={''}
              onPress={() => console.log('Open menu')}
              transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
        </Header>
        <Home {...this.props}/>

        <View>
            <Fab
                active={this.state.active}
                direction="up"
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="share" />
                <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                </Button>
            </Fab>
        </View>
      </Container>
    );
  }
}

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
function mapStateToProps(state) {
  const {posts} = state;
  return {
    posts
  }
}

export default connect(mapStateToProps)(HomeContainer);
