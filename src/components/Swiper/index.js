import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  container: {
    height: 200,
  },

  wrapper: {

  },

  slide: {
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  image: {
    width:"100%",
    height:"100%",
  },

}

class Swipper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          autoplay
          // 底部四点按钮
          showsPagination={true}
          // 是否显示控制按钮（即左右两侧的箭头是否可见）
          showsButtons={true}
          autoplayTimeout={2.5}
          style={styles.wrapper}
        >

          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('./img/1.jpg')}
          />

          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('./img/2.jpg')}
          />

          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('./img/3.jpg')}
          />

          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('./img/4.jpg')}
          />

        </Swiper>
      </View>
    )
  }
}

export default Swipper 