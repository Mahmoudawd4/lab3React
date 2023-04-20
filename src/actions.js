export function setPosts(posts) {
    return { type: 'SET_POSTS', payload: posts };
  }
  
  export function setPost1(post) {
    return { type: 'SET_POST1', payload: post };
  }
  
  export function getAllPosts() {
    return dispatch => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dispatch(setPosts(data)))
        .catch(error => console.log(error));
    };
  }
  
  export function getPost1(posts) {
    const post1 = posts.reduce((acc, post) => {
      if (post.id === 1) {
        acc = post;
      }
      return acc;
    }, null);
    return dispatch => {
      dispatch(setPost1(post1));
    };
  }
  