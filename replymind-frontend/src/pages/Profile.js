import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http:localhost:5000/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http:localhost:5000/api/users/${id}`, user);
      alert('Profile updated');
    } catch (error) {
      console.error(error);
      alert('Update failed');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http:localhost:5000/api/users/${id}`);
      alert('Profile deleted');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Delete failed');
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div>
        <label>Profession:</label>
        <select
          value={user.profession}
          onChange={(e) => setUser({ ...user, profession: e.target.value })}
        >
          <option value="Marketing Professional">Marketing Professional</option>
          <option value="Entrepreneur">Entrepreneur</option>
          <option value="Content Creator">Content Creator</option>
        </select>
      </div>
      <div>
        <label>Interests:</label>
        <select
          multiple
          value={user.interests}
          onChange={(e) => setUser({ ...user, interests: [...e.target.selectedOptions].map(o => o.value) })}
        >
          {user.profession === 'Marketing Professional' && (
            <>
              <option value="Growth marketing">Growth marketing</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Product Marketing">Product Marketing</option>
              <option value="Paid marketing">Paid marketing</option>
              <option value="Organic marketing">Organic marketing</option>
            </>
          )}
          {user.profession === 'Entrepreneur' && (
            <>
              <option value="Startup enthusiast">Startup enthusiast</option>
              <option value="SME">SME</option>
              <option value="Product enthusiast">Product enthusiast</option>
              <option value="Product Leader">Product Leader</option>
              <option value="Product owner">Product owner</option>
            </>
          )}
          {user.profession === 'Content Creator' && (
            <>
              <option value="Youtube">Youtube</option>
              <option value="Twitch">Twitch</option>
              <option value="Twitter">Twitter</option>
              <option value="Video Content">Video Content</option>
            </>
          )}
        </select>
      </div>
      <div>
        <label>Bio:</label>
        <textarea
          value={user.bio}
          onChange={(e) => setUser({ ...user, bio: e.target.value })}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Profile;