import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { createProject } from '../api/projects';
function NewProjectModal({ isOpen, setIsOpen }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null);

  const handleClose = () => setIsOpen(false);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmitForm = () => {
    createProject(title, description, image)
    window.location.reload(true);
    setIsOpen(false)
  }
  return (
    <Modal show={isOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter data for new project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitForm}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter project title"
                    value={title}
                    onInput={(e) => {
                        setTitle(e.target.value);
                    }} 
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                 as="textarea"
                 rows={3}
                 value={description}
                 onInput={(e) => {
                    setDescription(e.target.value);
                 }}  
                />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Art image</Form.Label>
                <Form.Control 
                    type="file"
                    onChange={handleFileChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default NewProjectModal