import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext'; // Ensure the path to UserContext is correct
import './Profile.css'; // Import custom CSS for styling

const Profile = () => {
    const { user } = useContext(UserContext); // Assuming user is part of the context
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${user.token}`, // Assuming you're using JWT authentication
                    },
                });

                if (!response.ok) { // Check if response status is OK
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error.message); // Store the error message
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchUserData();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>; // Show loading if user data is not available
    }

    if (error) {
        return <div>Error fetching user data: {error}</div>; // Show error message
    }

    return (
        <div className="profile-container">
            <h1 className="profile-title">Profile Page</h1>
            <div className="profile-card">
                <div className="profile-image-section">
                    <img 
                        src={userData.profilePicture || "/default-profile.png"} 
                        alt="Profile" 
                        className="profile-image"
                    />
                    <button className="upload-button">Upload New Picture</button>
                </div>
                <div className="profile-info-section">
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
                </div>
            </div>

            <div className="profile-activity">
                <h2>Recent Activity</h2>
                {userData.activities && userData.activities.length > 0 ? (
                    <ul>
                        {userData.activities.map((activity, index) => (
                            <li key={index}>
                                {activity.description} - {new Date(activity.date).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recent activity available.</p>
                )}
            </div>

            <div className="account-settings">
                <h2>Account Settings</h2>
                <button className="btn-update">Update Email</button>
                <button className="btn-password">Change Password</button>
            </div>
        </div>
    );
};

export default Profile;
