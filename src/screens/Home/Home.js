import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLOURS, Items } from '../../mocks/database/Database';

import { strings } from '@/localization';
import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';

export function Home({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  const { colors } = useTheme();
  const user = useSelector(getUser);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };
  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.navigate('ProductInfo', { productID: data.id })}
        style={{
          width: '48%',
          marginVertical: 14,
        }}
      >
        <View style={styles.itemDetail}>
          {data.isOff ? (
            <View style={styles.discountView}>
              <Text style={styles.discountText}>{data.offPercentage}%</Text>
            </View>
          ) : null}
          <Image source={data.productImage} style={styles.productImage} />
        </View>
        <Text style={styles.productName}>{data.productName}</Text>
        {data.category == 'accessory' ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesome
                name="circle"
                style={{ fontSize: 12, marginRight: 6, color: COLOURS.green }}
              />
              <Text style={{ fontSize: 12, color: COLOURS.green }}>Available</Text>
            </View>
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome
                name="circle"
                style={{ fontSize: 12, marginRight: 6, color: COLOURS.red }}
              />
              <Text style={{ fontSize: 12, color: COLOURS.red }}>Unavailable</Text>
            </View>
          )
        ) : null}
        <Text>&#8377; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}
        >
          <TouchableOpacity accessibilityRole="button">
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => navigation.navigate('MyCart')}
          >
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10, padding: 16 }}>
          <Text style={styles.titleText}>Hi-Fi Shop & Service</Text>
          <Text style={styles.titleText2}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View style={{ padding: 16 }}>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.categoryText}>Products</Text>
              <Text style={styles.categoryNumber}>41</Text>
            </View>
            <Text style={styles.seeAllText}>SeeAll</Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {products.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.categoryText}>Accessories</Text>
              <Text style={styles.categoryNumber}>78</Text>
            </View>
            <Text style={styles.seeAllText}>SeeAll</Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {accessory.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// return (
//     <View style={styles.container}>
//         <Text style={[typography.title, { color: colors.text }]}>
//             {strings.home.message} {user?.username}
//         </Text>
//         <Text style={[typography.text, { color: colors.text }]}>
//             {strings.home.variant} {Config.BUILD_VARIANT}
//         </Text>
//     </View>
// );
