import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './containers/MainPage';
import ViewPost from './containers/ViewPost';
import AppContainer from './AppContainer';

const App = () => (
  <AppContainer className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route
          path="/posts/:postId"
          render={routeProps => (
            <ViewPost {...routeProps} postId={routeProps.match.params.postId} />
          )}
        />
      </Switch>
    </Router>
  </AppContainer>
);

export default App;
