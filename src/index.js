import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "reactstrap";
import Divider from "@material-ui/core/Divider";
import Informacao from "./inforcacao";
import "./styles.css";

const HookContador = React.lazy(() => import("./contador/HookContador"));
const StateContador = React.lazy(() => import("./contador/StateContador"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Row>
          <Col>
            <HookContador />
          </Col>
          <br />
          <Divider />
          <Col>
            <StateContador />
          </Col>
        </Row>
        <br />
        <Divider />
        <br />
        <Row>
          <Col>
            <Informacao />
          </Col>
        </Row>
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
