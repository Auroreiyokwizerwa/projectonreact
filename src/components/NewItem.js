import { Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react'

const NewItem = ({onAdd}) => {
    const [text, setText] = useState('')
  const [date, setDate] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, date})

    setText('')
    setDate('')
  }

    return (

        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="ID"
                    value={text} onChange={(e) => setText(e.target.value)}
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    value={text} onChange={(e) => setText(e.target.value)}

                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="description"
                    value={text} onChange={(e) => setText(e.target.value)}
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="date"
                    placeholder="date"
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="price"
                    value={text} onChange={(e) => setText(e.target.value)}
                />
            </Form.Group>
            <br></br>
            <Form.Group>

            <label>category</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>linginier</option>
                    <option value="1">Small size</option>
                    <option value="2">Medium size</option>
                    <option value="3">Big size</option>
                  </select>

            </Form.Group>
            <br></br>
            <Form.Group  form-control-check title="status">
                <h4>Status</h4>
                {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            label="Available"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            label="Temporary Not Available in store"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            />
            <Form.Check
            label="Not in store"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        
        </div>
      ))}
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="file"
                    placeholder="picture"

                />
            </Form.Group>
            <br></br>
            <Button variant="success" type="submit" block >
                SAVE NEW ITEM
            </Button>
        </Form>

    )
}

export default NewItem