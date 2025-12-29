import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import './ProfileForm.css';

export default function ProfileForm() {
  const [profileData, setProfileData] = useState({
    firstName: 'Ahmad',
    lastName: 'AL-Ahmad',
    username: '@ahmad',
    phone: '+44 254 230 5891',
    email: 'ahmad@gmail.com'
  });

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving profile:', profileData);
    alert('Profile saved successfully!');
  };

  const { logout } = useAuth();

  const handleSignOut = () => {
    logout();
    alert('Signed out successfully!');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Manage Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-image-section">
          <div className="profile-image">
            <img src="/src/shared/assets/images/Group.png" alt="Profile" />
          </div>
          <div className="profile-info">
            <h3>Ahmad AL-Ahmad</h3>
            <button className="change-image-btn">Change image</button>
          </div>
        </div>

        <div className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={profileData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-actions">
            <button className="sign-out-btn" onClick={handleSignOut}>
              Sign Out
            </button>
            <button className="save-btn" onClick={handleSave}>
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}