import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { Tabs, useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-Time", "Freelance"]

const Welcome = () => {

  const router = useRouter();
  const [activeJobTypes, setActiveJobTypes] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
       <Text style={styles.userName}>Hello UserName</Text>
       <Text style={styles.welcomeMessage}>Find your best taste here</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} 
           value="" 
           onChange={()=>{}}
           placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
            <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage} 
            />
          </TouchableOpacity>

      </View>
        <View style={styles.tabsContainer}>
            <FlatList
            data={jobTypes}
            renderItem={({item})=>(
                <TouchableOpacity 
                style={styles.tab(activeJobTypes, item)}
                 onPress={()=>{
                  setActiveJobTypes(item);
                  router.push(`/search/${item}`)
                 }}
                 >
                  <Text style={styles.tabText}>{item}</Text>
                </TouchableOpacity>
             )}
             keyExtractor={item => item}
             contentContainerStyle={{columnGap:SIZES.small}}
             horizontal
            />
          </View>
    </View>
  )
}

export default Welcome