import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/suggestions')
      .then(res => res.json())
      .then(data => setSuggestion(data))
      .catch(err => console.log(err));

    fetch('http://localhost:3003/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err));
  }, []);

  const handleFollow = async (id, username) => {
    try {
      await axios.post('http://localhost:3003/followers', {
        id,
        username
      });
      alert('Followed');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='suggestions w-75 m-4'>
      {/* Profile Display */}
      {profile ? (
        <div className="d-flex align-items-center mb-3">
          <img
            className="dp rounded-circle me-2"
            src={profile.profile_pic}
            alt=""
            width="40"
            height="40"
          />
          <h6 className="mb-0">{profile.username}</h6>
          <small className='ms-auto text-primary'>Switch</small>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      {/* Suggestions List */}
      <div className='d-flex'>
        <p>Suggestions for you</p>
        <b className='ms-auto'>See All</b>
      </div>

      <div>
        {suggestion.length > 0 ? (
          suggestion.map((user, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <img
                className="rounded-circle me-2"
                src={user.profile_pic}
                alt=""
                width="32"
                height="32"
              />
              <h6 className="mb-0">{user.username}</h6>
              <a
                onClick={() => handleFollow(user.id, user.username)}
                className='text-primary ms-auto'
                style={{ cursor: 'pointer' }}
              >
                Follow
              </a>
            </div>
          ))
        ) : (
          <p>Loading suggestions...</p>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
