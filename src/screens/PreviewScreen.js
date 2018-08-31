import React from 'react'
import GoBack from '../components/GoBack'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import PreviewCard from '../components/PreviewCard'
import experiences from '../experiences'

const PreviewScreen = props => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Landing')}>
        <GoBack />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          flex: 1
        }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {experiences.map((experience, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={experience =>
                props.navigation.navigate('Experience', { experience })
              }>
              ><PreviewCard experience={experience} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default PreviewScreen
