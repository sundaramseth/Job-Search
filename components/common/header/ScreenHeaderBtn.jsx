import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handelPress}) => {
  return (
  <TouchableOpacity style={styles.btnContainer} onpress={handelPress}>
    <Image 
    source={iconUrl}
    resizeMode="cover"
    style={styles.btnImg(dimension)}
    />
  </TouchableOpacity>
  )
}

export default ScreenHeaderBtn