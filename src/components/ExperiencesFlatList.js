import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import PreviewCard from './PreviewCard'

const ExperiencesFlatList = ({ navigation, experiences, favoriteIds, confirm, refetch }) => {
  let _keyExtractor = (item, index) => item._id

  return (
    <FlatList
      data={experiences}
      keyExtractor={_keyExtractor}
      extraData={favoriteIds}
      renderItem={({item}) => {
        let isFavorite = favoriteIds.includes(item._id)
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              refetch()
              navigation.navigate('Experience', { isFavorite, item, previous: navigation.state.routeName })
            }}
          >
            <PreviewCard
              experience={item}
              isFavorite={isFavorite}
              confirm={confirm} />
          </TouchableOpacity>)
      }}
    />
  )
}

export default ExperiencesFlatList
