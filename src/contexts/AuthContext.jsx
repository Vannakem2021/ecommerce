import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useMain } from "./MainContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);
  const navigate = useNavigate();
  const {
    clearCart,
    clearWishlist,
    saveUserCartsAndWishlists,
    restoreUserCartsAndWishlists,
    setUserId,
  } = useMain();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserData(currentUser.uid);
        restoreUserCartsAndWishlists(currentUser.uid);
        setUserId(currentUser.uid);
      } else {
        setUser(null);
        setUserId(null);
      }
      setLoading(false); // Set loading to false after auth state is confirmed
    });

    return () => unsubscribe();
  }, [navigate, restoreUserCartsAndWishlists, setUserId]);

  const fetchUserData = async (uid) => {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData) {
        setFullName(userData.fullName);
        setEmail(userData.email);
        setAvatar(userData.avatar);
      }
    }
  };

  const createUser = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      avatar: "default-avatar-url",
    });
    return userCredential;
  };

  const handleSave = async () => {
    if (user) {
      let avatarUrl = avatar;
      if (newAvatar) {
        const avatarRef = ref(storage, `avatars/${user.uid}`);
        await uploadBytes(avatarRef, newAvatar);
        avatarUrl = await getDownloadURL(avatarRef);
      }
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        avatar: avatarUrl,
      });
      alert("Profile updated");
    }
  };

  const handleLogout = async () => {
    if (user) {
      saveUserCartsAndWishlists();
      await signOut(auth);
      clearCart();
      clearWishlist();
      setUser(null);
      setUserId(null);
      navigate("/signin");
    }
  };

  const signin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/profile");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        fullName,
        email,
        avatar,
        newAvatar,
        setFullName,
        setEmail,
        setNewAvatar,
        createUser,
        handleSave,
        handleLogout,
        signin,
        loading, // Pass loading state
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
