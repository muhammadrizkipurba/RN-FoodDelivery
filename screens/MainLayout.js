import React, { useEffect, useRef } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { connect } from 'react-redux'
import { Header } from '../components'
import CustomButtomTab from '../components/CustomButtomTab'
import { COLORS, dummyData, icons, SIZES, utils } from '../constants'
import { setSelectedTab } from '../redux/tab/tabActions';
import { Home, Cart, Notification, Favourite, Search } from '../screens';

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTabFunct }) => {

  const flatListRef = useRef();

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
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false
      });
      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };
    
    if(selectedTab === utils.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false
      });
      searchTabFlex.value = withTiming(4, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };

    if(selectedTab === utils.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false
      });
      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };

    if(selectedTab === utils.screens.favourite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false
      });
      favouriteTabFlex.value = withTiming(4, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };

    if(selectedTab === utils.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false
      });
      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.white, { duration: 500 });
    };
  }, [selectedTab]);

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
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment='center'
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={utils.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 700));
            wait.then(() => {
              flatListRef.current?.scrollToIndex({ index: info.index, animated: false });
            });
          }}
          renderItem={({item, idx}) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width
                }}
              >
                {item.label === utils.screens.home && <Home />}
                {item.label === utils.screens.search && <Search />}
                {item.label === utils.screens.cart && <Cart />}
                {item.label === utils.screens.favourite && <Favourite />}
                {item.label === utils.screens.notification && <Notification />}
              </View>
            )
          }}
        />
      </View>

      {/* FOOTER */}
      <CustomButtomTab 
        selectedTab={selectedTab}
        setSelectedTabFunct={setSelectedTabFunct}
        homeFlexStyle={homeFlexStyle}
        homeColorStyle={homeColorStyle}
        searchFlexStyle={searchFlexStyle}
        searchColorStyle={searchColorStyle}
        cartFlexStyle={cartFlexStyle}
        cartColorStyle={cartColorStyle}
        favouriteFlexStyle={favouriteFlexStyle}
        favouriteColorStyle={favouriteColorStyle}
        notificationFlexStyle={notificationFlexStyle}
        notificationColorStyle={notificationColorStyle}
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