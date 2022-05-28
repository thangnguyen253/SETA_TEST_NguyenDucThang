import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal, Toast } from 'react-bootstrap';
import { addPost } from '../actions/postAction';

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function PostForm({ openAddPost, setOpenAddPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [validated, setValidated] = useState(false);

  const [showToastSuccess, setShowToastSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setTitle('');
    setBody('');
    setValidated(false);
    setOpenAddPost(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const newId = randomNumber();
    const newUserId = randomNumber();
    const newPost = {
      id: newId,
      userId: newUserId,
      title: title,
      body: body,
    };

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      const action = addPost(newPost);
      dispatch(action);
      setShowToastSuccess(true);
      handleClose();
    }
  };

  return (
    <>
      <Toast
        onClose={() => setShowToastSuccess(false)}
        show={showToastSuccess}
        delay={3000}
        autohide
        bg="success"
        className="text-white"
      >
        <Toast.Body>Add post successfully!</Toast.Body>
      </Toast>
      <Modal show={openAddPost} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add new post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>

              <Form.Control
                required
                placeholder="Enter the title"
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <Form.Control.Feedback type="invalid">
                Please enter the title!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="body">
              <Form.Label>Body</Form.Label>

              <Form.Control
                required
                as="textarea"
                placeholder="Enter the body"
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter the body!
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>{' '}
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default PostForm;
