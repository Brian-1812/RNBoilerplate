import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native';
import I18n from '../../Utils/i18n'
import IconsSVG from '../../Assets/SVG'

const animation = require('../../Assets/JSON/waiting.json')

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>{"Localization && Internationalization -> "}</Text>
        <Text>{I18n.t('hello')}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{"RN Vector Icons -> "} </Text>
        <Icon name="home" size={30} color="blue" />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{"Custom SVG Icons -> "} </Text>
        <IconsSVG.House width={32} height={32} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{"Lottie animations -> "} </Text>
        <LottieView source={animation} loop autoPlay style={styles.animation}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animation: {
    width: 150,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 30,
    alignItems: 'center'
  },
  label: {
    fontWeight: 'bold',
  }
})

export default Home
