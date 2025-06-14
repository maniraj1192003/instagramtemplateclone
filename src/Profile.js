import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [follower, setFollower] = useState([]);

  useEffect(() => {
    // Fetch profile
    axios.get('http://localhost:3003/profile')
      .then(res => {
        setProfile(res.data);
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
      });

    // Fetch followers
    axios.get('http://localhost:3003/followers')
      .then(res => {
        setFollower(res.data);
      })
      .catch(error => {
        console.error("Error fetching followers:", error);
      });
  }, []);

  const handleChange = (e) => {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = () => {
    axios.put('http://localhost:3003/profile', profile)
      .then(() => {
        alert("Profile updated successfully!");
      })
      .catch(err => {
        console.error("Update error:", err);
      });
  };

  const handleUnfollow = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/followers/${id}`);
      // Update UI after delete
      setFollower(prev => prev.filter(f => f.id !== id));
      alert("Unfollowed successfully");
    } catch (error) {
      console.error("Unfollow error:", error);
      alert("Unfollow failed");
    }
  };

  return (
    <div className="container mt-4">
      {profile ? (
        <div>
          <img
            src={profile.profile_pic}
            alt="Profile"
            className="img-fluid rounded-circle"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h5 className="mt-3">{profile.username}</h5>

          <input
            type='text'
            value={profile.username}
            name='username'
            className='form-control my-3'
            onChange={handleChange}
          />

          <input
            type='text'
            value={profile.profile_pic}
            name='profile_pic'
            className='form-control mb-3'
            onChange={handleChange}
          />

          <button
            onClick={handleUpdate}
            className='btn btn-primary'>
            Update
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      <hr className="my-4" />

      <h5>Followers</h5>
      <div>
        {follower.length > 0 ? (
          follower.map(f => (
            <div key={f.id} className='d-flex align-items-center my-2'>
              <span>{f.username}</span>
              <button
                className='btn btn-secondary ms-auto'
                onClick={() => handleUnfollow(f.id)}>
                Unfollow
              </button>
            </div>
          ))
        ) : (
          <p>No followers found.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
