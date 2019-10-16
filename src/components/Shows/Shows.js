import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

class Shows extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shows: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/shows`)
      .then(res => this.setState({ shows: res.data.shows }))
      .catch(console.error)
  }

  render () {
    const shows = this.state.shows.map(show => (
      <li key={show._id}>
        <Link to={`/shows/${show._id}`}>{show.name}</Link>
      </li>
    ))

    return (
      <Layout>
        <ul>
          {shows}
        </ul>
      </Layout>
    )
  }
}

export default Shows
