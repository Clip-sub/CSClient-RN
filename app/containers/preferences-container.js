import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, Button, Text} from "native-base";

class PreferencesContainer extends Component {
  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <Container>
        <Header/>
        <Content>
          <Button>
            <Text>Go back</Text>
          </Button>
          <Button onPress={() => navigate('Auth')}>
            <Text>Go forward</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const {posts} = state;
  return {posts};
}

export default connect(null)(PreferencesContainer);