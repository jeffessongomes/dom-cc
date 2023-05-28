import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Navigate, useParams } from 'react-router-dom';

import { apiAxios } from '../../services/api';

import styles from './listproducts.module.css';

function ListProducts(){
    const [item, setItem] = useState([]);
    const [isRedirect, setIsRedirect] = useState(false);
    const {collect = ''} = useParams();

    useEffect(() => {
        apiAxios.get(`collect/${collect}`).then(response => {
            const { data = [] } = response;
            
            setItem(data.data);
        })
    }, [])

    const handleSubmitFinishedCollect = async(e) => {
        e.preventDefault()

        try {
            await apiAxios.put(`/collect/${collect}`)   

            setIsRedirect(true);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form onSubmit={e => handleSubmitFinishedCollect(e)}>
            {
                isRedirect &&
                <Navigate to={`/`} />
            }

            <button type="submit" className='btn btn-success w-100 mb-2 mt-2'>Finalizar coleta</button>

            <Table striped bordered hover className={styles.containerTable}>
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
        </form>
    )
}

export { ListProducts };
