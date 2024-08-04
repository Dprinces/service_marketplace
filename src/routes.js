// routes.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtisanDirectoryPage from './pages/ArtisanDirectoryPage';
import ArtisanProfilePage from './pages/ArtisanProfilePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage'; // Optional, for handling 404 errors

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/artisans" exact component={ArtisanDirectoryPage} />
      <Route path="/artisan/:id" component={ArtisanProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} /> {/* Handles all unknown routes */}
    </Switch>
  );
};

export default Routes;
