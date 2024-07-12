import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Check if the user is logged in
    const token = localStorage.getItem('awsToken');
    if (!token) {
      alert('You are not logged in.');
      return;
    }

    // Remove the JWT token
    localStorage.removeItem('awsToken');

    // Optionally, notify the server about logout (not needed for JWT in local storage)
    // axios.post('http://localhost:5000/auth/logout').then(response => console.log(response.data));

    // Redirect to login page or homepage
    window.location.href = '/login'; // Adjust the route as per your routing setup
    alert('You have been logged out.');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-all duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
