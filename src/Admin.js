import React from "react";
import UserProfile from "./UserProfile";
import SideNavbar from "./SideNavbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
    let { admin } = useParams();
    const loginEndpoint = "http://localhost:9000/api/";
    // const loginEndpoint = "https://mudapp-backend.vercel.app/api/totalRegisteredUser";
    console.log(admin);

    useEffect(() => {
        const userJSON = localStorage.getItem("user");

        if (userJSON) {
            try {
                const user = JSON.parse(userJSON);

                if (user.payload && user.payload.authority !== "master-admin") {
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error parsing user data:", error);
                // Handle error, e.g., redirect to login
                navigate("/login");
            }
        } else {
            navigate("/login");
        }
    }, [navigate]);

    const Admin = () => {
        return <></>;
    };

    const TotalUsers = ({ count }) => {
        const [users, setUsers] = useState([
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m1",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m2",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m3",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m4",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m5",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m6",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m7",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m8",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m9",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m10",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m1",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m2",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m3",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m4",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m5",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m6",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m7",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m8",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m9",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m10",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            }
        ]
        );
        fetch(`${loginEndpoint}/totalRegisteredUser`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((jsonData) => {
                // Update state with fetched data
                setUsers(jsonData);
            })
            .catch((err) => {
                console.log("Error getting all registered users", err);
            });
        let limitedUsers = [];
        if (count !== 'all') {
            limitedUsers = users.slice(0, parseInt(count)); // Ensure count is parsed to integer
        } else {
            limitedUsers = users;
        }
        return (
            <>
                <div className="all-users" style={{ margin: "2rem", padding: "0.7rem", backgroundColor: "white", borderRadius: "0.7rem", height: "100%", width: "100%" }}>
                    <h3>Registered Users</h3>
                    <div className="" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(10, auto)", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
                        {limitedUsers.map((user) => {
                            return (
                                <div className="user-element" key={user.id} style={{ display: "flex", alignItems: "center" }}>
                                    <img src={user.photo} alt="profile photo" style={{ marginRight: "0.5rem", width: "50px", height: "50px", borderRadius: "50%" }} />
                                    <span>Email: {user.email}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p style={{ marginTop: "0", textAlign: "right" }}>{"Show All >>"}</p>
                </div>





            </>
        );
    };

    const RealTimeUsers = ({ count }) => {
        const [users, setUsers] = useState([
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m1",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m2",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m3",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m4",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m5",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m6",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m7",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m8",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m9",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m10",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m1",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m2",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m3",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m4",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m5",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m6",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m7",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m8",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m9",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m10",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            }
        ]
        );
        fetch(`${loginEndpoint}/getRealTimeUsers`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((jsonData) => {
                // Update state with fetched data
                setUsers(jsonData);
            })
            .catch((err) => {
                console.log("Error getting all registered users", err);
            });
        let limitedUsers = [];
        if (count !== 'all') {
            limitedUsers = users.slice(0, parseInt(count)); // Ensure count is parsed to integer
        } else {
            limitedUsers = users;
        }
        return (
            <>
                <div className="all-users" style={{ margin: "2rem", padding: "0.7rem", backgroundColor: "white", borderRadius: "0.7rem", height: "100%", width: "100%" }}>
                    <h3>Real Time Users</h3>
                    <div className="" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(10, auto)", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
                        {limitedUsers.map((user) => {
                            return (
                                <div className="user-element" key={user.id} style={{ display: "flex", alignItems: "center" }}>
                                    <img src={user.photo} alt="profile photo" style={{ marginRight: "0.5rem", width: "50px", height: "50px", borderRadius: "50%" }} />
                                    <span>Email: {user.email}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p style={{ marginTop: "0", textAlign: "right" }}>{"Show All >>"}</p>
                </div>





            </>
        );
    };

    const AvgScreenTime = () => {
        const [avgTime, setAvgTime] = useState(12900);
        fetch(`${loginEndpoint}/getAvgScrnTimeBasedOnCountry`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((jsonData) => {
                // Update state with fetched data
                setAvgTime(jsonData);
            })
            .catch((err) => {
                console.log("Error getting all registered users", err);
            })
        return (
            <>
                <div className="all-users" style={{ margin: "2rem", padding: "0.7rem", backgroundColor: "white", borderRadius: "0.7rem", height: "100%", width: "40%" }}>
                    <h3>Average Screen Time</h3>
                    <div className="" style={{ display: "flex", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(10, auto)", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
                        <div className="user-element" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            Average Time: {avgTime}
                        </div>
                    </div>
                </div>





            </>
        );
    };

    const ContentWriters = ({ count }) => {
        const [users, setUsers] = useState([
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m1",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m2",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m3",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m4",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m5",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m6",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m7",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m8",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m9",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m10",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m1",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m2",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m3",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m4",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m5",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m6",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m7",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m8",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m9",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            },
            {
                "active": "true",
                "country": "Bangladesh",
                "email": "xfantasy4@email.com",
                "id": "jIGX21EXOPTNqt2ZHgC2wX84m10",
                "photo": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.com/",
                "sernTime": "19"
            }
        ]
        );
        fetch(`${loginEndpoint}/contentWriterBasedOnCountry`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((jsonData) => {
                // Update state with fetched data
                setUsers(jsonData);
            })
            .catch((err) => {
                console.log("Error getting all registered users", err);
            });
        let limitedUsers = [];
        if (count !== 'all') {
            limitedUsers = users.slice(0, parseInt(count)); // Ensure count is parsed to integer
        } else {
            limitedUsers = users;
        }
        return (
            <>
                <div className="all-users" style={{ margin: "2rem", padding: "0.7rem", backgroundColor: "white", borderRadius: "0.7rem", height: "100%", width: "100%" }}>
                    <h3>Content Writers</h3>
                    <div className="" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(10, auto)", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
                        {limitedUsers.map((user) => {
                            return (
                                <div className="user-element" key={user.id} style={{ display: "flex", alignItems: "center" }}>
                                    <img src={user.photo} alt="profile photo" style={{ marginRight: "0.5rem", width: "50px", height: "50px", borderRadius: "50%" }} />
                                    <span>Email: {user.email}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p style={{ marginTop: "0", textAlign: "right" }}>{"Show All >>"}</p>
                </div>
            </>
        );
    };

    const AllPost = ({ count }) => {
        const [users, setUsers] = useState([
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
        ]
        );
        fetch(`${loginEndpoint}/allPosts`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((jsonData) => {
                // Update state with fetched data
                setUsers(jsonData);
            })
            .catch((err) => {
                console.log("Error getting all registered users", err);
            });
        let limitedUsers = [];
        if (count !== 'all') {
            limitedUsers = users.slice(0, parseInt(count)); // Ensure count is parsed to integer
        } else {
            limitedUsers = users;
        }
        return (
            <>
                <div className="all-users" style={{ margin: "2rem", padding: "0.7rem", backgroundColor: "white", borderRadius: "0.7rem", height: "100%", width: "100%" }}>
                    <h3>All Posts</h3>
                    <div className="" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(10, auto)", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
                        {limitedUsers.map((user) => {
                            return (
                                <div className="user-element" key={user.id} style={{ display: "flex", alignItems: "center" }}>
                                    <img src={user.postImage} alt="profile photo" style={{ marginRight: "0.5rem", width: "50px", height: "50px", borderRadius: "50%" }} />
                                    <span>Topic: {user.headline}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p style={{ marginTop: "0", textAlign: "right" }}>{"Show All >>"}</p>
                </div>

            </>
        );
    };

    const BlockedContents = ({ count }) => {
        const [users, setUsers] = useState([
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            {
                "block": true,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to true
            {
                "block": false,
                "country": "Afghanistan",
                "dateTime": "2024-03-16 09:22:50.186",
                "headline": "Phil Foden MasterClass",
                "language": "Kashmiri",
                "postId": "7226f0e0-e344-11ee-9655-f9d0fbc829bc",
                "postImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "profImage": "https://firebasestorage.googleapis.com/vO/b/xfantasy-dOd9f.appspot.co",
                "share": "SZZIkwgG7egnalHFr9msTqMcJjg2",
                "story": "Phil Foden 'is the Player of the Season', according to Pep",
                "userId": "VXsguiApIxXvkNGo¡DOnor8dLcY2"
            },
            // Add more entries with "block" set to false
        ]
        );
        fetch(`${loginEndpoint}/getBlockedContents`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((jsonData) => {
                // Update state with fetched data
                setUsers(jsonData);
            })
            .catch((err) => {
                console.log("Error getting all registered users", err);
            });
        let limitedUsers = [];
        if (count !== 'all') {
            limitedUsers = users.slice(0, parseInt(count)); // Ensure count is parsed to integer
        } else {
            limitedUsers = users;
        }
        return (
            <>
                <div className="all-users" style={{ margin: "2rem", padding: "0.7rem", backgroundColor: "white", borderRadius: "0.7rem", height: "100%", width: "100%" }}>
                    <h3>Blocked Contents</h3>
                    <div className="" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(10, auto)", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
                        {limitedUsers.map((user) => {
                            return (
                                <div className="user-element" key={user.id} style={{ display: "flex", alignItems: "center" }}>
                                    <img src={user.postImage} alt="profile photo" style={{ marginRight: "0.5rem", width: "50px", height: "50px", borderRadius: "50%" }} />
                                    <span>Topic: {user.headline}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p style={{ marginTop: "0", textAlign: "right" }}>{"Show All >>"}</p>
                </div>

            </>
        );
    };

    const Dashboard = () => {
        return (
            <div className="dashboard">
                <div className="" style={{ display: "flex" }}>
                    <TotalUsers count={'10'} />
                    <RealTimeUsers count={'10'} />
                </div>
                <div className="" style={{ display: "flex" }}>
                    <AvgScreenTime />
                    <ContentWriters count={'10'} />
                </div>
                <div className="" style={{ display: "flex" }}>
                    <AllPost count={'10'} />
                    <BlockedContents count={'10'} />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="adminContainer" style={{
                backgroundColor: "whitesmoke", background: "linear-gradient(to bottom, #C0C0FF, #0D47A1 70%)"
            }}>
                <UserProfile tab={admin} />
                <div className="" style={{ display: "flex", justifyContent: "flex-start" }}>
                    <SideNavbar />
                    {admin === 'dashboard' ? <Dashboard /> : ""}
                    {admin === 'totalRegisteredUsers' ? <TotalUsers count={'all'} /> : ""}
                    {admin === 'realTimeUsers' ? <RealTimeUsers count={'all'} /> : ""}
                    {admin === 'maximumContentWriter' ? <ContentWriters count={'all'} /> : ""}
                    {admin === 'listOfBlockedContent' ? <BlockedContents count={'all'} /> : ""}
                </div>
            </div>
        </>
    );
}

export default Admin;
