import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
//import { FlatList } from 'react-native-bidirectional-infinite-scroll';
import { queryMoreMessages } from './mockMessage';
import { MessageBubble } from './MessageBubble';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Message/Message.style';
import { getCounter } from '@/selectors/CounterSelectors';

export function Message() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);
  useEffect(() => getData(), []);
  const counter = useSelector(getCounter);
  console.log('counter ==>  nè  ', counter);
  const getData = () => {
    console.log(offset);
    if (!loading && !isListEnd) {
      console.log('getData');
      setLoading(true);
      // Service to get the data from the server to render
      fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + offset)
        // Sending the currect offset with get request
        .then((response) => response.json())
        .then((responseJson) => {
          // Successful response from the API Call
          console.log(responseJson);
          if (responseJson.results.length > 0) {
            setOffset(offset + 1);
            // After the response increasing the offset
            setDataSource([...dataSource, ...responseJson.results]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={styles.footer}>
        {loading ? <ActivityIndicator color="black" style={{ margin: 15 }} /> : null}
      </View>
    );
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}
