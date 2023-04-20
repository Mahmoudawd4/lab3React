import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import axios from 'axios';

function PostsComponent() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch({ type: 'SET_POSTS', payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className="container my-4">
      <h2>All Posts</h2>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 my-3" key={post.id}>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsComponent;
