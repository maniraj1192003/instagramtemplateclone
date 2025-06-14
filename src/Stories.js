import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Stories() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/stories')
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error('Error fetching profiles:', err));
  }, []);

  const tot = profiles.length; // total stories count

  return (
    <div className="stories-container">
      {profiles.map((story) => (
        <Link
          key={story.id}
          to={`/stories/${story.id}/${tot}`}
          className="d-flex flex-column align-items-center text-center text-decoration-none"
          style={{ color: 'inherit' }}
        >
          <div className="gradient-ring">
            <img
              src={story.user.profile_pic}
              alt={story.user.username}
              className="story-dp"
            />
          </div>
          <small className="text-muted mt-2">{story.user.username}</small>
        </Link>
      ))}
    </div>
  );
}

export default Stories;
