import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectProfile, selectUser } from "./features/userSlice";
import Feed from "./Feed/Feed";
import { auth } from "./firebase";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";
import Profile from "./Profile";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });

  //   //eslint-disable-next-line
  // }, []);

  return (
    <div className="app">
      <Header />
      {user==null ? (
        <Login />
      ) : (
      profile?(<div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>):(
          <>
            <Profile></Profile>
          </>
        )
      )}
    </div>
  );
}

export default App;
