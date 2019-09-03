import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import { Container, Content, Header, Left, Right, Title, Body, Button, Icon, Badge, Footer, FooterTab } from 'native-base';

export default class HeaderComponent extends Component {
  render(){
    return(
      <Container>
          <Header style={{height: 90, backgroundColor: '#3366CC'}}>

              <Left style={{flex: 1}}>
              <Button transparent>
              <Icon
              style={{
                marginTop: 30,
              }}
              name='menu'
              onPress={() => {
                const { navigate } = this.props.navigation.toggleDrawer();
              }}
              />
              </Button>
              </Left>

              <Body style={{flex: 1}}>
                  <Title style={{marginTop: 30}}>Drawer App 2</Title>
              </Body>

              <Right style={{flex: 1}}>
              <Button transparent>
              <Icon style={{ marginTop: 30}} name='search' />
              </Button>
              <Button transparent>
              <Icon ios='ios-pizza' android="md-pizza" style={{fontSize: 20, color: 'yellow', marginTop: 30}} />
              </Button>

              </Right>

          </Header>

      </Container>

    );
  }
}
