import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './register.module.css';

function Register(){
    const {category = ''} = useParams();

    if(category === ''){
        return (
            <div>
                Categoria Invalida
            </div>
        )
    }

    return(
        <form className={styles.container}>
            <div className={styles.content}>
                <div className='input-group'>
                    <input type="number" className='form-control' placeholder="Código de barras" />
                </div>
                <button className='btn btn-info' type="submit">Confirmar</button>
            </div>
            <Link to="/listar-produtos" className={styles.buttonListProduct}> 
                Listar Produtos
            </Link>
        </form>
    )
}

export { Register };
