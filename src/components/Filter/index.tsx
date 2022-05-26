import { Container } from "./style";

export function SearchFilter() {
  return (
    <Container>
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
      <div className="radio__group" tabIndex={3}>
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
      </div>
      <div className="select">
        <label htmlFor="situacao" className="select-label">
          Situação
        </label>
        <select id="situacao" className="select-input">
          <option value="todas">Todas</option>
          <option value="autorizada">Autorizada</option>
          <option value="cancelada">Cancelada</option>
          <option value="rejeitada">Rejeitada</option>
          <option value="inutilizada">Inutilizada</option>
        </select>
      </div>
    </Container>
  );
}
