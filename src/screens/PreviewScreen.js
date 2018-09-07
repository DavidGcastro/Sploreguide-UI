import React from 'react'
import GoBack from '../components/GoBack'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import PreviewCard from '../components/PreviewCard'
import experiences from '../experiences'
import landingStyles from '../styles/landingStyles'

const PreviewScreen = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{flexDirection: 'row', alignItems: 'baseline', alignContent: 'center', justifyContent: 'space-between', marginTop: 28, marginHorizontal: 20, marginBottom: 15}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Landing')}>
          <GoBack />
        </TouchableOpacity>
        <Text style={landingStyles.TopText}>Hello World</Text>
      </View>
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
              onPress={() =>
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
