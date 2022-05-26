import { Container } from "./style";

export function DocumentList() {
  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Chave da Nota</th>
              <th>Número</th>
              <th>Série</th>
              <th>Situação</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>29220432021120000161650010000015321090833422</td>
              <td>1</td>
              <td>1</td>
              <td>AUTORIZADA</td>
              <td>02/04/2022</td>
              <td>86.00</td>
            </tr>
            <tr>
              <td>29220432021120000161650010000015321090833422</td>
              <td>1</td>
              <td>1</td>
              <td>CANCELADA</td>
              <td>02/04/2022</td>
              <td>86.00</td>
            </tr>
            <tr>
              <td>29220432021120000161650010000015321090833422</td>
              <td>1</td>
              <td>1</td>
              <td>REJEITADA</td>
              <td>02/04/2022</td>
              <td>86.00</td>
            </tr>
            <tr>
              <td>29220432021120000161650010000015321090833422</td>
              <td>1</td>
              <td>1</td>
              <td>INUTILIZADA</td>
              <td>02/04/2022</td>
              <td>86.00</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
