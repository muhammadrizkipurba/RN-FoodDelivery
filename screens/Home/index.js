import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { HorizontalFoodCard } from '../../components';
import VerticalFoodCard from '../../components/VerticalFoodCard';
import { COLORS, icons, SIZES, dummyData } from '../../constants';
import FilterModal from './views/FilterModal';

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 30,
          marginBottom: 15,
        }}
      >
        <Text 
          style={{
            fontSize: 16,
            fontWeight: '600'
          }}
        >
          {title}
        </Text>

        <TouchableOpacity
          onPress={onPress}
        > 
          <Text 
            style={{
              color: COLORS.primary,
              fontSize: 13,
              fontWeight: '600'
            }}
          >
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  )
}

const Home = () => {
  
  const [selectedCategoryID, setSelectedCategoryID] = useState(0);
  const [selectedMenuType, setSelectedMenuType] = useState(0);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    handleChangeCategory(selectedCategoryID, selectedMenuType);
  }, []);

  const handleChangeCategory = (categoryID, menuTypeID) => {
    // Retrieve popular menu
    let selectedPopular = dummyData.menu.find(a => a.name === 'Popular');

    // Retrieve recommended menu
    let selectedRecommends = dummyData.menu.find(a => a.name === 'Recommended');

    // Find the menu based on the menuTypeID
    let selectedMenu = dummyData.menu.find(a => a.id === menuTypeID);
    
    // Set the popular menu based on the categoryID
    setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryID)));
    
    // Set the recommended menu based on the categoryID
    setRecommends(selectedRecommends?.list.filter(a => a.categories.includes(categoryID)));
    
    // Set the menu based on the categoryID
    setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryID)));
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding*1.5,
          marginTop: 20,
          marginBottom: 10,
          paddingHorizontal: 20,
          borderRadius: SIZES.radius,
          backgroundColor: '#e9e9e970'
        }}
      >
        <Image 
          source={icons.search}
          style={{
            height: 15,
            width: 15,
            tintColor: COLORS.black
          }}
        />
        
        <TextInput 
          style={{
            flex: 1,
            marginLeft: 20,
            fontSize: 14,
            fontWeight: '600'
          }}
          placeholder="Search food..."
        />

        <TouchableOpacity
          onPress={() => setShowFilterModal(true)}
        >
          <Image 
            source={icons.filter}
            style={{
              height: 24,
              width: 24,
              tintColor: COLORS.black
            }}
          />

        </TouchableOpacity>
      </View>
    )
  };

  const renderMenuTypes = () => {
    return (
      <FlatList 
        horizontal
        data={dummyData.menu}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 15
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: 15,
                marginRight: index === dummyData.menu.length-1 ? 15 : 0,
                borderRadius: 10,
                paddingVertical: 8,
                paddingHorizontal: 15,
                backgroundColor: selectedMenuType === item.id ? COLORS.primary : COLORS.highlight,
              }}
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryID, item.id)
              }}
            >
              <Text 
                style={{
                  color: selectedMenuType === item.id ? COLORS.white : COLORS.black,
                  fontSize: 15,
                  fontWeight: '600'
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    )
  };

  const renderRecommendedSection = () => {
    return (
      <Section
        title='Recommended'
        onPress={() => console.log('Show all recommended')}
      >
        <FlatList 
          data={recommends}
          key={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <HorizontalFoodCard 
                containerStyle={{
                  height: 155,
                  width: SIZES.width*0.85,
                  marginLeft: 15,
                  marginRight: index === recommends.length-1 ? 15 : 0,
                  paddingRight: 10,
                  alignItems: 'center'
                }}
                imageStyle={{
                  marginLeft: 15,
                  height: 100,
                  width: 100
                }}
                item={item}
                onPress={() => console.log('Horizontal food card')}
              />
            )
          }}
        />
      </Section>
    )
  };
  
  const renderPopularSection = () => {
    return (
      <Section
        title='Popular Near You'
        onPress={() => console.log('Show all popular menu')}
      >
        <FlatList 
          data={popular}
          key={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <VerticalFoodCard 
                containerStyle={{
                  marginLeft: 15,
                  marginRight: index === popular.length-1 ? 15 : 0,
                }}
                imageStyle={{
                  marginLeft: 15,
                  height: 100,
                  width: 100
                }}
                item={item}
                onPress={() => console.log('Vertical food card')}
              />
            )
          }}
        />
      </Section>
    )
  };

  const renderCategories = () => {
    return (
      <FlatList 
        data={dummyData.categories}
        key={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 55,
                marginTop: 15,
                marginLeft: 15,
                marginRight: index === dummyData.categories.length-1 ? 15 : 0,
                paddingHorizontal: 15,
                borderRadius: 15,
                backgroundColor: selectedCategoryID === item.id ? COLORS.primary : COLORS.highlight
              }}
              onPress={() => {
                setSelectedCategoryID(item.id);
                handleChangeCategory(item.id, selectedMenuType)
              }}
            >
              <Image 
                source={item.image}
                style={{
                  height: 30,
                  width: 30,
                }}
                resizeMode="contain"
              />
              <Text 
                style={{
                  marginLeft: 10,
                  alignSelf: 'center',
                  color: selectedCategoryID === item.id ? COLORS.white : COLORS.darkgray,
                  fontSize: 15,
                  fontWeight: '600'
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    )
  };

  const renderDeliveryTo = () => {
    return (
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginHorizontal: 15
        }}
      >
        <Text
          style={{
            color: COLORS.black,
            fontSize: 14,
            fontWeight: '600',
            textTransform: 'uppercase'
          }}
        > 
          Delivery to
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center'
          }}
          onPress={() => console.log('Open map')}
        >
          <Image 
            source={icons.location}
            style={{
              height: 15,
              width: 15,
              marginRight: 10,
              tintColor: COLORS.black
            }}
          />
          <Text 
            style={{
              color: COLORS.darkgray,
              fontSize: 14,
              fontWeight: '500'
            }}
          >
            {dummyData?.myProfile?.address}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <View style={{flex: 1, marginBottom: 200}}>
      {/* SEARCH SECTION */}
      {renderSearch()}

      { showFilterModal && 
        <FilterModal 
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      }

      {/* LIST */}
      <FlatList 
        data={menuList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20
        }}
        ListHeaderComponent={
          <View>
            {renderDeliveryTo()}
            {renderCategories()}
            {renderPopularSection()}
            {renderRecommendedSection()}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard 
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: 15,
                marginBottom: 10,
                paddingHorizontal: 15
              }}
              imageStyle={{
                height: 100,
                width: 100
              }}
              item={item}
              onPress={() => console.log('Horizontal Food Card')}
            />
          )
        }}
      />
    </View>
  )
}

export default Home