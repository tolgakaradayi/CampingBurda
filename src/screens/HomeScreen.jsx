import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import Search from '../assets/icons/search';
import { colors } from '../constants/Colors';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header title="Camping Burada dostum" />
      <View style={styles.searchSection}>
        <Search fill={'none'} stroke={colors.BLACK} strokeWidth={30} width={20} height={20} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search furniture"
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10, 
  },
});
