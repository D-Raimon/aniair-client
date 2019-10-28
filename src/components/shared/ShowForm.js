import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ShowForm = ({ show, handleSubmit, handleChange }) => {
  const cancelPath = show._id ? `#/shows/${show._id}` : '#shows'
  /* above parameters use destructuring, another way to write it would be
  const MovieForm = (props) => (
    const movie = props.movie
    const handleSubmit = props.handleSubmit
    and so on... easier to just use destructuring
  */
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Kimetsu no Yaiba"
          name="name"
          onChange={handleChange}
          value={show.name}
          required
        />
      </Form.Group>
      <Form.Group controlId="airDay">
        <Form.Label>Air Day</Form.Label>
        <Form.Control
          type="text"
          placeholder="Saturday"
          name="airDay"
          onChange={handleChange}
          value={show.airDay}
          required
        />
      </Form.Group>
      <Form.Group controlId="numOfEps">
        <Form.Label>Number of Episodes</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="12"
          name="numOfEps"
          onChange={handleChange}
          value={show.numOfEps}
          required
        />
      </Form.Group>
      <Form.Group controlId="url">
        <Form.Label>Thumbnail Url</Form.Label>
        <Form.Control
          type="text"
          placeholder="https://..."
          name="url"
          onChange={handleChange}
          value={show.url}
          required
        />
      </Form.Group>
      <Form.Group controlId="shortDescription">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Fourth season of..."
          name="shortDescription"
          onChange={handleChange}
          value={show.shortDescription}
          required
        />
      </Form.Group>
      <Form.Group controlId="longDescription">
        <Form.Label>Long Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Based on the popular light novel of the same name, Ookami to Koushinryou, also known as..."
          name="longDescription"
          onChange={handleChange}
          value={show.longDescription}
          required
        />
      </Form.Group>
      <Form.Group controlId="trailer">
        <Form.Label>Trailer Url</Form.Label>
        <Form.Control
          type="text"
          placeholder="https://..."
          name="trailer"
          onChange={handleChange}
          value={show.trailer}
          required
        />
      </Form.Group>
      <Button variant="danger" size="sm" type="submit">Submit</Button>
      <Button variant="warning" size="sm" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default ShowForm
