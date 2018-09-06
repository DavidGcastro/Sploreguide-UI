import React from 'react'
import ExperienceFullScreen from '../components/ExperienceFullScreen'

export default class Experience extends React.Component {
  render () {
    const item = this.props.navigation.state.params.experience
    const nav = this.props.navigation.goBack
    return (
      <ExperienceFullScreen item={item} nav={nav} />
    )
  }
}
