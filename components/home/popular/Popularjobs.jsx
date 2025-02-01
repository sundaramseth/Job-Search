import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobsCard from '../../common/cards/popular/PopularJobCard'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import useFetch from '../../../hook/useFetch';




const Popularjobs = () => {
const router = useRouter()

const {data, isLoading, error} = useFetch('search', {
  query: 'React developer',
  num_pages:1
})

console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
      {isLoading ? (
         <ActivityIndicator size="large" colors={COLORS.primary}/>
       ): error ? (
        <Text>Something Went Wrong!</Text>
       ) : (
        <FlatList
        data={data}
        renderItem={({item}) => (<PopularJobsCard item={item}/>)}
        keyExtractor={item => item?.job_id}
        contentContainerStyle = {{columnGap:SIZES.medium}}
        horizontal
        />
        )}
      </View>
    </View>
  )
}

export default Popularjobs