import React from "react";
import { useLocation } from "react-router-dom";
import UserProfile from "./UserProfile";

const Element = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const jsonDataString = searchParams.get('jsonData');
    const category = searchParams.get('category');
    const userDetails = JSON.parse(decodeURIComponent(jsonDataString));
    console.log(userDetails);
    console.log(category);
    return (
        <>
            <UserProfile tab={category} />
            <div>
                {userDetails ? (
                    <div>
                        {/* Display user details or post details */}
                        {category === 'user' ? (
                            <div style={styles.container}>
                                <h1 style={styles.heading}>User Details</h1>
                                <div style={styles.details}>
                                    <p><strong>Active:</strong> {userDetails.active.toString()}</p>
                                    <p><strong>Country:</strong> {userDetails.country}</p>
                                    <p><strong>Email:</strong> {userDetails.email}</p>
                                    <p><strong>ID:</strong> {userDetails.id}</p>
                                    <p><strong>Scrn Time:</strong> {userDetails.sernTime}</p>
                                    <img src={userDetails.photo} alt="User Photo" style={styles.image} />
                                </div>
                            </div>
                        ) : category === 'post' ? (
                            <div style={styles.container}>
                                <h1 style={styles.heading}>Post Details</h1>
                                <div style={styles.details}>
                                    <p><strong>Title:</strong> <img src={userDetails.postImage} alt="" /> {userDetails.headline}</p>
                                    <p><strong>Language:</strong> {userDetails.language}</p>
                                    <p><strong>Story:</strong> {userDetails.story}</p>
                                    <p><strong>Block:</strong> {userDetails.block.toString()}</p>
                                    <p><strong>Country:</strong> {userDetails.country}</p>
                                    <p><strong>Date and Time:</strong> {userDetails.dateTime}</p>
                                    <p><strong>Posted By:</strong> <img src={userDetails.profImage} alt="" /> {userDetails.userId}</p>
                                    <p><strong>Shared:</strong> {userDetails.share}</p>
                                </div>
                            </div>
                        ) : (
                            <p>Invalid category</p>
                        )}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    details: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    },
    image: {
        maxWidth: '100%',
        marginTop: '20px',
        borderRadius: '8px',
    },
};


export default Element;
