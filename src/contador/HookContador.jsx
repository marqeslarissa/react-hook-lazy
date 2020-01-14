import React, { useState, useEffect } from "react";

function HookContador() {
  // const [nomeVariavel, SetPraChamarVariavel] = useState(valor_variavel);
  // valor pode ser string, obj, null etc -> useState({}) ou useState(null)...
  const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Contando com Hook</button>
    </div>
  );
}
export default HookContador;
