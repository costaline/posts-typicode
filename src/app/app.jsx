import React from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import Layout from "~hocs/layout";
import Home from "~routes/home";
import Posts from "~routes/posts";
import Post from "~routes/post";

import "./app.scss";
import styles from "./app.module.scss";

const App = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            className={styles.link}
            activeClassName={styles.active}
          >
            Posts
          </NavLink>
        </nav>
      </header>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id" component={Post} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
