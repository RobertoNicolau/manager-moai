import { Container } from "./style";

export function DocumentList(){
    return(
        <>
        <Container>
            <table>
                <tr>
                    <th>Chave da Nota</th>
                    <th>Situação</th>
                    <th>Data</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>29220432021120000161650010000015321090833422</td>
                    <td>AUTORIZADA</td>
                    <td>02/04/2022</td>
                    <td>86.00</td>
                </tr>
                <tr>
                    <td>29220432021120000161650010000015321090833422</td>
                    <td>AUTORIZADA</td>
                    <td>02/04/2022</td>
                    <td>86.00</td>
                </tr>
            </table>
        </Container>

        </>
    );
}