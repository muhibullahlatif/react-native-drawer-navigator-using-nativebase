import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { Content, Container, Header, Body, Icon } from 'native-base';
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import CloudComponent from './components/CloudComponent';
import { Home, Info, Settings, Cloud } from './screenNames';
var { height, width } = Dimensions.get('window');

const CustomDrawerContentComponent = (props) => (
  <Container>
      <Header style={{height: 200, backgroundColor: 'white'}}>
          <Body>
              <Image
              style={{width: 150, height: 150, borderRadius: 75}}
              source={require('./assets/img1.png')}
               />
          </Body>
      </Header>
      <Content>
          <DrawerItems {...props} />
      </Content>
  </Container>
)

let routeConfigs = {
  Home: {
    path: '/home',
    screen: HomeComponent,
  },
 Info: {
   path: '/info',
   screen: InfoComponent,
 },
Settings: {
  screen: SettingsComponent,
},
Cloud: {
  screen: CloudComponent,
},
};

let drawerNavigatorConfig = {
  initialRouteName: Home,
  contentComponent: CustomDrawerContentComponent,
  drawerWidth: 300,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  //drawerBackgroundColor: 'orange',
  contentOptions: {
    activeTintColor: '#eee',
    labelStyle: {
      color: 'black',
    },
  }
};

const createNav = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
const App = createAppContainer(createNav);
export default App;
