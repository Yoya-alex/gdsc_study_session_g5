import React from 'react';
import './GroupMembers.css'; // Import your CSS file

const GroupMembers = () => {
  // Array of group members' names
  const members = [
    'Member 1',
    'Member 2',
    'Member 3',
    'Member 4',
    'Member 5',
    'Member 6',
    'Member 7',
    'Member 8',
    'Member 9',
    'Member 10',
  ];

  return (
    <div className="group-members">
      <h2>Group 10 Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      {/* Add your CSS styles and image here */}
      <img
        className="group-image"
        src="https://example.com/your-image.jpg"
        alt="Group Image"
      />
    </div>
  );
};

export default GroupMembers;
