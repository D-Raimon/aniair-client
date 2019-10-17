import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ShowForm from '../shared/ShowForm'

const CreateShow = (props) => {
  const [show, setShow] = useState({ name: '', airDay: '', numOfEps: '', url: '', shortDescription: '', longDescription: '', trailer: '' })
  const [created, setCreated] = useState(false)

  const handleChange = event => {
    event.persist()
    setShow(show => ({ ...show, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/shows`,
      method: 'POST',
      data: { show }
    })
      .then(res => setCreated(res.data.show._id))
      .catch(console.error)
  }

  if (created) {
    return <Redirect to={`/shows/${created}`} />
  }

  return (
    <ShowForm
      show={show}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default CreateShow
