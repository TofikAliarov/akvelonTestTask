import { AddInvoice } from "./components/invoices/addInvoice/AddInvoice";
import { ChangeInvoice } from "./components/invoices/changeInvoice/ChangeInvoice";
import { Invoices } from "./components/invoices/Invoices";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
function App() {
  return (
    <Router>
      <div className={styles.main}>
        <Switch>
          <Route path="/add">
            <AddInvoice />
          </Route>
          <Route exact path="/">
            <Invoices />
          </Route>
          <Route path="/update:id">
            <ChangeInvoice />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div>
    //   <Invoices></Invoices>
    // </div>
  );
}

export default App;
