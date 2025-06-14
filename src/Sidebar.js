import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate =useNavigate();
  return (
    <div className='position-fixed start-0 h-100 d-flex flex-column justify-content-between p-3 bg-white' 
         style={{ width: '250px', borderRight: '1px solid #dbdbdb' }}>
      {/* Top Icons */}
      <div className='d-flex flex-column gap-3'>
        <div className='sidebar-item'><i className="bi bi-house-fill me-2"></i>Home</div>
        <div className='sidebar-item'><i className="bi bi-search me-2"></i>Search</div>
        <div className='sidebar-item'><i className="bi bi-compass me-2"></i>Explore</div>
        <div className='sidebar-item'><i className="bi bi-camera-reels me-2"></i>Reels</div>
        <div className='sidebar-item'><i className="bi bi-chat-dots me-2"></i>Message</div>
        <div className='sidebar-item'><i className="bi bi-heart me-2"></i>Notification</div>
        <div className='sidebar-item'><i className="bi bi-plus-square me-2"></i>Create</div>
        <div onClick={()=>{navigate('/profile')}} className='sidebar-item'><i className="bi bi-person-circle me-2"></i>Profile</div>
      </div>

      {/* Bottom Icons */}
      <div className='d-flex flex-column gap-3 mb-4'>
        <div className='sidebar-item'><i className="bi bi-threads me-2"></i>Thread</div>
        <div className='sidebar-item'><i className="bi bi-list me-2"></i>More</div>
      </div>
    </div>
  );
}

export default Sidebar;