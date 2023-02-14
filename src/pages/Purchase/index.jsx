import { PurchaseCard, PurchaseTitle } from "./style";
import { MainTitle } from "../../components/MainTitle/style";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../components/GlobalComponents/style";
import { FlexContainer } from "../../components/FlexContainer/style";
const Component = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("state") === "error") {
      setStatus({
        message:
          "Ocurrio un error con la compra, revisá que el importe no supere el crédito disponible en tu cuenta",
        error: true,
      });
    }
    if (searchParams.get("state") === "success") {
      setStatus({
        message: "La compra se realizo con exito",
        error: false,
      });
    }
  }, [searchParams]);
  return (
    <>
      <MainTitle>Estado de Compra</MainTitle>
      {!!status && (
        <PurchaseCard>
          <PurchaseTitle>{status.message}</PurchaseTitle>
          <FlexContainer justify="center">
            <Button
              style={{ width: "100%" }}
              onClick={() => {
                navigate(!!status.error ? "/cart" : "/list");
              }}
            >
              {!!status.error ? "Volver al Carrito" : "Volver al catálogo"}
            </Button>
          </FlexContainer>
        </PurchaseCard>
      )}
    </>
  );
};

export default Component;
