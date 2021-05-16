import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import I18n from '../../Utils/i18n'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>{I18n.t('hello')}</Text>
      <Icon name="home" size={30} color="blue" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
