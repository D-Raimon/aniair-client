import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ShowForm from '../shared/ShowForm'

const EditShow = (props) => {
  const [show, setShow] = useState({ name: '', airDay: '', numOfEps: '', url: '', shortDescription: '', longDescription: '', trailer: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/shows/${props.match.params.id}`)
      .then(res => setShow(res.data.show))
      .catch()
  }, [])

  const handleChange = event => {
    event.persist()
    setShow(show => ({ ...show, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/shows/${props.match.params.id}`,
      method: 'PATCH',
      data: { show }
    })
      .then(res => setUpdated(true))
      .catch()
  }

  if (updated) {
    return <Redirect to={`/shows/${props.match.params.id}`} />
  }

  return (
    <ShowForm
      show={show}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default EditShow
