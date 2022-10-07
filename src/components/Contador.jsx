import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(2);
  const [contatorAux, setContadorAux] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const multiMes = () => {
    setContador(contador * 2);
  };

  const zerarMes = () => {
    setContador(0);
  };

  useEffect(() => {
    if (contador > 12) {
      setContadorAux(true);
      setMensagem("O ano possui apenas 12 meses, seu bobão");
    } else {
      setContadorAux(false);
    }
  }, [contador]);

  useEffect(() => {
    console.log("fui chamado useEffect");
  }, [contatorAux]);

  return (
    <div>
      <div>Olá Contador</div>
      {contatorAux && <Alert severity="error">{mensagem}</Alert>}
      <div>Meu mês de aniversário é: {contador}</div>

      <Button onClick={zerarMes}>Zerar mês</Button>
      <Button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        {" "}
        Aumentar um mês
      </Button>
      <Button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        {" "}
        Diminuir um mês
      </Button>

      <Button onClick={multiMes}> Multiplica mês</Button>
    </div>
  );
};

export default Contador;
