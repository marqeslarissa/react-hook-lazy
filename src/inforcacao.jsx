import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";

class Informacao extends PureComponent {
  render() {
    return (
      <div>
        <Typography variant="subtitle1">
          Usando state Hook (arquivo 'HookContador.jsx'): 14 linhas de código.
        </Typography>
        <Typography variant="subtitle1">
          Usando this.state (arquivo 'StateContador.jsx'): 26 linhas de código.
        </Typography>
        <Typography variant="subtitle1">Para fazer a mesma operação</Typography>
        <br />
        <a href="url">https://pt-br.reactjs.org/docs/hooks-intro.html</a>
      </div>
    );
  }
}
export default Informacao;
