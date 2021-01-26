// @ts-nocheck
import { Route, Switch } from "react-router-dom";
import Invoice from "./containers/invoice";
import Preview from "./containers/preview";
import Request from "./containers/request";
import Layout from "./hoc/layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Request} />
          <Route path="/generate" component={Invoice} />
          <Route path="/preview" component={Preview} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
