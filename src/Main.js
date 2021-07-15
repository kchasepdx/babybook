import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "/Users/kristenchase/baby-book/src/contexts/AuthContext.js";
import PrivateRoute from "/Users/kristenchase/baby-book/src/pages/PrivateRoute.js";

//Pages
import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Community from "./pages/Community.jsx";
import Questionnaire from "./pages/Questionnaire.jsx";
import Post from "./pages/Post.jsx";
import Book from "./pages/Book.jsx";
import FullPost from "./pages/FullPost.jsx";

const Main = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          {" "}
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/babybook" component={Landing} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/community" component={Community} />
          <PrivateRoute exact path="/questionnaire" component={Questionnaire} />
          <PrivateRoute exact path="/post" component={Post} />
          <PrivateRoute exact path="/book" component={Book} />
          <PrivateRoute exact path="/post/:id" component={FullPost} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Main;
