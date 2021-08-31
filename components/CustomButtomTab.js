import React, { useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, { useAnimatedStyle, useSharedValue, withTiming }  from 'react-native-reanimated'
import { COLORS, icons, SIZES, utils } from '../constants'

const TabButton = ({ label, icon, isFocused, onPress, outerContainerStyle, innerContainerStyle }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={{

      }}
    >
      <Animated.View
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          },
          outerContainerStyle
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '90%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25
            },
            innerContainerStyle
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? COLORS.white : COLORS.lightGray4
            }}
          />

          {isFocused && 
            <Text
              numberOfLines={1}
              style={{
                color: isFocused ? COLORS.white : null,
                marginLeft: SIZES.padding,
                fontWeight: '700',
                fontSize: 16
              }}
            >
              {label}
            </Text>
          }
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const CustomButtomTab = ({ selectedTab, setSelectedTabFunct }) => {

  // Reanimated Shared Value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  // Reanimated Style
  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value
    };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value
    };
  });
  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value
    };
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value
    };
  });
  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value
    };
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value
    };
  });
  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouriteTabFlex.value
    };
  });
  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouriteTabColor.value
    };
  });
  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notificationTabFlex.value
    };
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notificationTabColor.value
    };
  });

  useEffect(() => {
    if(selectedTab === utils.screens.home) {
      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };

    if(selectedTab === utils.screens.search) {
      searchTabFlex.value = withTiming(4, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };

    if(selectedTab === utils.screens.cart) {
      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };

    if(selectedTab === utils.screens.favourite) {
      favouriteTabFlex.value = withTiming(4, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };

    if(selectedTab === utils.screens.notification) {
      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };
  }, [selectedTab]);

  return (
    <View
        style={{
          height: 100,
          justifyContent: 'flex-end'
        }}
      >
        {/* Shadow */}
        <LinearGradient 
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[
            COLORS.transparent,
            COLORS.transparentBlack2
          ]}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
          }}
        />

        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white
          }}
        >
          <TabButton 
            label={utils.screens.search}
            icon={icons.search}
            isFocused={selectedTab === utils.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => {
              setSelectedTabFunct(utils.screens.search)
              // navigation.navigate('MainLayout')
            }}
          />
          <TabButton 
            label={utils.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab === utils.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => {
              setSelectedTabFunct(utils.screens.cart)
              // navigation.navigate('MainLayout')
            }}
          />
          <TabButton 
            label={utils.screens.home}
            icon={icons.home}
            isFocused={selectedTab === utils.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => {
              setSelectedTabFunct(utils.screens.home)
              // navigation.navigate('MainLayout')
            }}
          />
          <TabButton 
            label={utils.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === utils.screens.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() => {
              setSelectedTabFunct(utils.screens.favourite)
              // navigation.navigate('MainLayout')
            }}
          />
          <TabButton 
            label={utils.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === utils.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => {
              setSelectedTabFunct(utils.screens.notification)
              // navigation.navigate('MainLayout')
            }}
          />
        </View>
      </View>
  )
}

export default CustomButtomTab
