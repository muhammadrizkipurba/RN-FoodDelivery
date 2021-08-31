import React, { useState } from 'react'
import 'react-native-gesture-handler'
import Animated from 'react-native-reanimated';
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, icons, SIZES, dummyData, FONTS, utils } from '../constants';
import { MainLayout } from '../screens'

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.padding,
        borderRadius: SIZES.base,
      }}
    >
      <Image 
        source={icon}
        style={{
          height: 18,
          width: 18,
          tintColor: COLORS.white
        }}
        resizeMode='contain'
      />
      <Text style={{marginLeft: 15, fontWeight: '600', color: COLORS.white, ...FONTS.h2}}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const CustomDrawerContent = ({ navigation, setProgress }) => {
  const drawer_progress = useDrawerProgress();
  
  setTimeout(() => {
    setProgress(drawer_progress);
  }, 0);
  
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding*2
        }}
      >
        {/* CLOSE BUTTON */}
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <TouchableOpacity 
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 16, 
                width: 16, 
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>
        </View>

        {/* PROFILE */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding*4,
            alignItems: 'center'
          }}
          onPress={() => console.log('Profile')}
        >
          <Image
            source={dummyData?.myProfile?.profile_image}
            style={{
              height: 40,
              width: 40,
              borderRadius: 30
            }}
            resizeMode='contain'
          />

          <View style={{marginLeft: SIZES.padding}}>
            <Text style={{color: COLORS.white, fontWeight: '600', ...FONTS.h2}}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              View my profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* DRAWER ITEMS */}
        <View style={{flex: 1, marginTop: SIZES.padding*3}} >
          <CustomDrawerItem label={utils.screens.home} icon={icons.home} />
          <CustomDrawerItem label={utils.screens.my_wallet} icon={icons.wallet} />
          <CustomDrawerItem label={utils.screens.notification} icon={icons.notification} />
          <CustomDrawerItem label={utils.screens.favourite} icon={icons.favourite} />
          
          {/* LINE DEVIDER */}
          <View 
            style={{
              height: 1,
              marginTop: SIZES.padding,
              marginBottom: SIZES.padding*2,
              marginLeft: 10,
              backgroundColor: COLORS.lightGray2
            }} 
          />

          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.settings} />
          <CustomDrawerItem label="Invite friends" icon={icons.invite_user} />
          <CustomDrawerItem label="Help center" icon={icons.help_center} />
        </View>

        {/* LOGOU BUTTON */}
        <View
          style={{
            marginBottom: 70
          }}
        >
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  )
};

const CustomDrawer = () => { 
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

export default CustomDrawer

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
