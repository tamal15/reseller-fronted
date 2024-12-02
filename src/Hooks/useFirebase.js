import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";

import { useEffect, useState } from "react";
import initial from "../Login/Firebase/firebase.init";

initial();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [buyer, setBuyer] = useState(false);
  const [buyers, setBuyers] = useState(false);
  const [error, setError] = useState("");

  const [toggle,setToggle]=useState(false)
const handleClick=()=>{
    setToggle(false)
}

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Register user with email, password, and payment details
  const registerUser = (email, password, name, bkashNumber, refCode, location, status = "pending", navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        verifyEmail();
        const newUser = { email, displayName: name, bkashNumber, refCode };
        setUser(newUser);

        // Save user to database with payment details
        sendUser(email, name, bkashNumber, refCode, status, 'POST');

        // Send name to Firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {})
          .catch((error) => {});

        setAuthError('');
        const destination = location?.state?.from || '/';
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };


  //lOGIN WITW EMAIL AND PASSWORD COUSTM 
  const loginWithOwnEmailAndPass = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        navigate(destination)
        // setError('');
        setAuthError('')
      })
      .catch((error) => {
        // setError(error.message);
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false));

  }

  // Verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {
        console.log(result);
      });
  };

   //LOG OUT USER METHOD
   const userLogOut = () => {
    setIsLoading(true)
    setToggle(false)
    signOut(auth)
      .then(() => {

      }).catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
  }

  // Save user to database
  const sendUser = (email, displayName, bkashNumber, refCode, status = "pending", method) => {
    const user = { email, displayName, bkashNumber, refCode, status, balance: 0 };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
  };

  // Observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // Load user roles from database
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setBuyer(data?.buyer);
      });
  }, [user.email]);

  // Load admin role from database
  useEffect(() => {
    fetch(`http://localhost:5000/userLogin/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data?.admin));
  }, [user.email]);

  return {
    user,
    // loginWithGoogle,
    registerUser,
    isLoading,
    authError,
    toggle,
    setToggle,
    error,
    admin,
    buyer,
    buyers,
    userLogOut,
    loginWithOwnEmailAndPass
  };
}

export default useFirebase;
