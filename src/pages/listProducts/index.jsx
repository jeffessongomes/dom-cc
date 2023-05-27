import Table from 'react-bootstrap/Table';

function ListProducts(){
    return(
        <form>
            <button type="submit" className='btn btn-success w-100 mb-2 mt-2'>Finalizar coleta</button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </form>
    )
}

export { ListProducts };
