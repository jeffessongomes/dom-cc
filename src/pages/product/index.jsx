import { Link } from 'react-router-dom'
import styles from './product.module.css'

function Product(){
    return(
        <form className={styles.container}>
            <img src="https://cdn-cosmos.bluesoft.com.br/products/7892840819033" alt="Imagem do produto" />
            <h3>Nome do produto</h3>
            <p>123918391283912</p>

            <div className={styles.formGroup}>
                <input className='input-group' type="number" placeholder='Quantidade' />
                <button type='submit' className='btn btn-success'>Incluir</button>
            </div>

            <Link to="/home" className='btn btn-info mt-5'>Voltar</Link>
        </form>
    )
}

export { Product }
