import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import 'react-native-gesture-handler'
import Animated from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from './CustomDrawerContent';
import { COLORS } from '../../constants';
import { MainLayout } from '../../screens'
import { connect } from 'react-redux';
import { setSelectedTab } from '../../redux/tab/tabActions';

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ selectedTab, setSelectedTabFunct }) => { 
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={styles.container}>
      <Drawer.Navigator 
        initialRouteName="MainLayout"
        screenOptions={{
          headerShown: false,
          drawerStyle: styles.drawerStyle,
          overlayColor: 'transparent',
          drawerType: 'slide',
          sceneContainerStyle: { backgroundColor: 'transparent' }
        }}
        drawerContent={props => {
          return (
            <CustomDrawerContent 
              navigation={props.navigation}
              setProgress={(progress) => setProgress(progress)}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTabFunct}
            />
          )
        }}
      >
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} drawerAnimationStyle={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}

const mapStateToProps = state => {
  const { tabReducer } = state;
  return {
    selectedTab: tabReducer.selectedTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTabFunct: (selected) => {
      return dispatch(setSelectedTab(selected))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  drawerStyle: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    backgroundColor: 'transparent'
  }
})
