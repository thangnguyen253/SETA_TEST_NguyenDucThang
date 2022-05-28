import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Paginating from '../components/Paginating';
import PostForm from '../components/PostForm';

function PostPage() {
  const postList = useSelector((state) => state.post.post);
  const [openAddPost, setOpenAddPost] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPageItems = 10;

  const lastPostIndex = currentPage * perPageItems;
  const firstPostIndex = lastPostIndex - perPageItems;
  const currentPosts = postList.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNum) => setCurrentPage(pageNum);
  return (
    <Container className="d-flex flex-column" fluid>
      <PostForm openAddPost={openAddPost} setOpenAddPost={setOpenAddPost} />
      <h1>Post Management</h1>
      <div className="align-self-end">
        <Button color="primary" onClick={() => setOpenAddPost(true)}>
          + Add Post
        </Button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>UserID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts &&
            currentPosts.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="align-self-center">
        <Paginating
          perPageItems={perPageItems}
          totalPosts={postList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}

export default PostPage;
