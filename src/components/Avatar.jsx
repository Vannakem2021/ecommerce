import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const [avatar, setAvatar] = useState("default-avatar-url");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setAvatar(userDoc.data().avatar);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <img
      src={avatar}
      alt="Avatar"
      style={{ width: "50px", height: "50px", cursor: "pointer" }}
      onClick={handleClick}
    />
  );
};

export default Avatar;
