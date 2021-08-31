import React from 'react'
import 'react-native-gesture-handler'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import { COLORS, icons, SIZES, dummyData, FONTS, utils } from '../../constants';
import CustomDrawerItem from './CustomDrawerItem';

const CustomDrawerContent = ({ navigation, setProgress, selectedTab, setSelectedTab }) => {
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
          <CustomDrawerItem 
            label={utils.screens.home}
            icon={icons.home}
            isFocused={selectedTab === utils.screens.home}
            onPress={() => {
              setSelectedTab(utils.screens.home);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem 
            label={utils.screens.my_wallet}
            icon={icons.wallet}
            isFocused={selectedTab === utils.screens.my_wallet}
            onPress={() => {
              setSelectedTab(utils.screens.my_wallet);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem 
            label={utils.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === utils.screens.notification}
            onPress={() => {
              setSelectedTab(utils.screens.notification);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem 
            label={utils.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === utils.screens.favourite}
            onPress={() => {
              setSelectedTab(utils.screens.favourite);
              navigation.navigate('MainLayout');
            }}
          />
          
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

export default CustomDrawerContent;