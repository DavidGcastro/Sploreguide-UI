import React from 'react'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import experiences from '../experiences'
let item = experiences[0]
export default class Experience extends React.Component {
  render () {
    // const item = this.props.navigation.state.params.experience
    return (
      <ExperienceFullScreen item={item} />
    )
  }
}
