import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/*<Route exact path="/" component={HomePage}/>*/}
          {/*<Route path="/signIn" component={SignInPage}/>*/}
          <Route render={()=> <h1>404 Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
