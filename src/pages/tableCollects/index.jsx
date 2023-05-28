import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { apiAxios } from '../../services/api';
import { useParams } from 'react-router-dom';



function TableCollects(){
    const [item, setItem] = useState([])
    const [collectData, setCollectData] = useState({});

    const { collect } = useParams()

    useEffect(() => {
        apiAxios.get(`/collectinfo/${collect}/`).then(response => {
            const { data } = response;

            setCollectData(data.data);
        });

        apiAxios.get(`/collect/${collect}`).then(response => {
            const { data } = response;

            setItem(data.data)
        });
    }, [])

    const handleCheckCollect = async () => {
        try {
            await apiAxios.put(`/collect/${collect}/check`)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <button 
                type="button"  
                disabled={collectData.checkCollect}
                className={`btn ${ collectData.checkCollect ? 'btn-info' : 'btn-success'}`}
                onClick={() => handleCheckCollect()}
            >
                {  
                    collectData.checkCollect ?
                    'Coleta verificada' :
                    'Verificar coleta'
                }
            </button>
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
                    {item.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product?.ean}</td>
                            <td>{product?.name}</td>
                            <td>{product?.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    )
}

export { TableCollects };
