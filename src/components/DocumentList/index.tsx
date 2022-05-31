import { useEffect, useState } from "react";
import { Container } from "./style";

export function DocumentList() {
  const [documentData, setDocumentData] = useState([])
  var cnpj = document.getElementById('cnpj')
  useEffect(() => {
    fetch('https://managersaas.tecnospeed.com.br:8081/ManagerAPIWeb/nfce/consulta?CNPJ=32021120000161&GRUPO=32021120000161&Filtro=situacao%3DAUTORIZADA',{
      method: 'GET',  
      headers:{
          'Authorization': 'Basic YWRtaW46QkE1MjIyMzM0QUM4NkEwOUNERDY4MjAyMDMwMEVBNUQ=',
          'Content-Type': 'application/json',
          'Accept': '*/*'
        }
    })
    .then(response => {
      return response;
    })
    .then(data => console.log(data))
  }, []);
  console.log(documentData)
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

