
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  Entypo, EvilIcons
} from '@expo/vector-icons'
import React from 'react'

const createComponent = activity => {
  let { IconTag, iconName } = findActivityIcon(activity)

  switch (IconTag) {
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons
        size={35}
        name={iconName}
        style={{
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
    case 'MaterialIcons':
      return <MaterialIcons
        size={35}
        name={iconName}
        style={{
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
    case 'FontAwesome':
      return <FontAwesome
        size={35}
        name={iconName}
        style={{
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
    case 'Entypo':
      return <Entypo
        size={35}
        name={iconName}
        style={{
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
    case 'EvilIcons':
      return <EvilIcons size={35}
        name={iconName}
        style={{
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
  }
}

const findActivityIcon = (activity) => {
  switch (activity) {
    case 'Historical': return { IconTag: 'MaterialIcons', iconName: 'history' }
    case 'Nature': return { IconTag: 'MaterialCommunityIcons', iconName: 'pine-tree' }
    case 'Sports': return {
      IconTag: 'FontAwesome', iconName: 'soccer-ball-o'
    }
    case 'Nightlife': return { IconTag: 'Entypo', iconName: 'drink' }
    case 'Museums': return { IconTag: 'FontAwesome', iconName: 'building-o' }
    case 'Educational': return { IconTag: 'EvilIcons', iconName: 'pencil' }
    case 'Shopping': return { IconTag: 'MaterialIcons', iconName: 'shopping-basket' }
    case 'Food': return { IconTag: 'MaterialCommunityIcons', iconName: 'food-variant' }
    case 'Arts': return { IconTag: 'MaterialCommunityIcons', iconName: 'drawing-box' }
    default: return { IconTag: 'MaterialCommunityIcons', iconName: 'map-search-outline' }
  }
}

export default createComponent
