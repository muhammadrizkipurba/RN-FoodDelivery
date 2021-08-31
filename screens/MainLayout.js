import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { connect } from 'react-redux'
import { Header } from '../components'
import CustomButtomTab from '../components/CustomButtomTab'
import { COLORS, dummyData, icons, SIZES, utils } from '../constants'
import { setSelectedTab } from '../redux/tab/tabActions';

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTabFunct }) => {

  useEffect(() => {
    setSelectedTabFunct(utils.screens.home)
  }, []);

  return (
    <Animated.View 
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle
      }}
    >
      {/* HEADER */}
      <Header 
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding*1.5,
          marginTop: 50,
          alignItems: 'center'
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.lightGray,
              borderRadius: SIZES.radius
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image 
              source={icons.menu}
              style={{
                width: 17,
                height: 17
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image 
              source={dummyData?.myProfile?.profile_image}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }
      />

      {/* CONTENT */}
      <View style={{flex: 1}}>
        {/* <Text>Content</Text> */}
      </View>

      {/* FOOTER */}
      <CustomButtomTab 
        selectedTab={selectedTab}
        setSelectedTabFunct={setSelectedTabFunct}
      />
    </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);