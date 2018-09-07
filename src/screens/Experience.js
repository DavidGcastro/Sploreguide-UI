import React from 'react'
import ExperienceFullScreen from '../components/ExperienceFullScreen'

export default class Experience extends React.Component {
  render () {
    const item = this.props.navigation.state.params.experience
    const nav = this.props.navigation
    const previous = this.props.navigation.state.params.previous
    const isFavorite = this.props.navigation.state.params.isFavorite
    return (
      <ExperienceFullScreen item={item} nav={nav} previous={previous} isFavorite={isFavorite} />
    )
  }
}
