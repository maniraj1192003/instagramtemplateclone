import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/posts')
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="my-4 border rounded p-3 bg-light" key={post.id}>
              <div className="d-flex align-items-center mb-2">
                <img
                  className="rounded-circle me-2"
                  src={post.user.profile_pic}
                  alt=""
                  width="40"
                  height="40"
                />
                <h6 className="mb-0">{post.user.username}</h6>
              </div>
              <img
                className="w-100 mb-2"
                src={post.image_url}
                alt=""
                style={{ borderRadius: '10px' }}
              />
              <div className="mb-2">
                <i className="bi bi-heart me-3"></i>
                <i className="bi bi-chat me-3"></i>
                <i className="bi bi-send"></i>
              </div>
              <div className="mb-1">
                <strong>{post.likes} likes</strong>
              </div>
              <p className="mb-0">{post.caption}</p>
            </div>
          ))
        ) : (
          <p className="text-center mt-5">Loading posts...</p>
        )}
      </div>
    </div>
  );
}

export default Posts;
