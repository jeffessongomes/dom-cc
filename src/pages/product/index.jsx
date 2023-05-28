import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import styles from './product.module.css'
import { apiAxios } from '../../services/api'

function Product(){
    const {category = '', collect = '', ean = ''  } = useParams();

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [isRedirect, setIsRedirect] = useState(false);

    useEffect(() => {
        apiAxios.get(`productinfo/${ean}`).then(response => {
            const {data} = response
            setItem(data);
        }).catch(err => {
            console.log(err)
        }) 
    })

    const handleSubmitAddProductToCollect = async (e) => {
        e.preventDefault()
        
        try {
            await apiAxios.post('product', {
                name: item?.nome,
                ean: ean,
                quantity: Number(quantity),
                collectId: collect
            })
            
            setIsRedirect(true)
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <form className={styles.container} onSubmit={e => handleSubmitAddProductToCollect(e)}>
            {
                isRedirect &&
                <Navigate to={`/${category}/${collect}/cadastro/`} />
            }
            <img src={`https://cdn-cosmos.bluesoft.com.br/products/${ean}`} alt="Imagem do produto" />
            <h5>{item?.nome}</h5>
            <p>{ean}</p>

            <div className={styles.formGroup}>
                <input 
                    className='input-group' 
                    type="number" 
                    placeholder='Quantidade' 
                    required
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
                <button type='submit' className='btn btn-success'>Incluir</button>
            </div>

            <Link to={`/${category}/${collect}/cadastro/`} className='btn btn-info mt-5'>Voltar</Link>
        </form>
    )
}

export { Product }
