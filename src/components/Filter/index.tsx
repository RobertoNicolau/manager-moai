import { Container } from "./style";

export function SearchFilter() {
  return (
    <Container>
      {/*       <form action="#">
        <label htmlFor="grupo">Grupo</label>
        <input type="text" id="grupo" />
        <label htmlFor="cnpj">CNPJ</label>
        <input type="number" />
        <label htmlFor="nfe">NF-e</label>
        <input type="radio" name="modalidade" id="nfe" />
        <label htmlFor="nfce">NFC-e</label>
        <input type="radio" name="modalidade" id="nfce" />
      </form> */}

      <div className="form__group field">
        <input type="number" className="form__field" placeholder="Grupo" />
        <label htmlFor="cnpj" className="form__label">
          CNPJ
        </label>
      </div>
      <div className="form__group field">
        <input type="text" className="form__field" placeholder="Grupo" />
        <label htmlFor="grupo" className="form__label">
          Grupo
        </label>
      </div>
      <div className="container">
        <div className="radio">
          <input id="nfce" name="modalidade" type="radio" defaultChecked />
          <label htmlFor="nfce" className="radio-label">
            NFC-e
          </label>
        </div>

        <div className="radio">
          <input id="nfe" name="modalidade" type="radio" />
          <label htmlFor="nfe" className="radio-label">
            NF-e
          </label>
        </div>
        {/*         <label htmlFor="nfe">NF-e</label>
        <input type="radio" name="modalidade" id="nfe" value="nfe" />
        <label htmlFor="nfce">NFC-e</label>
        <input type="radio" name="modalidade" id="nfce" value="nfce" /> */}
      </div>
    </Container>
  );
}
