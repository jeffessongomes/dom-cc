import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './register.module.css';

function Register(){
    const [ean, setEan] = useState('');
    const [isRedirect, setIsRedirect] = useState(false);

    const {category = '', finished = '', collect} = useParams();

    if(category === ''){
        return (
            <div>
                Categoria Invalida
            </div>
        )
    }

    const handleSubmitEanSearch = e => {
        e.preventDefault()
        
        if(!!ean){
            setIsRedirect(true);
        }
    }
    

    return(
        <form className={styles.container} onSubmit={e => handleSubmitEanSearch(e)}>
            {
                isRedirect &&
                <Navigate to={`/${category}/${collect}/adicionar-produto/${ean}`} />
            }
            <div className={styles.content}>
                {
                    finished && 
                    <p className=''>
                        Para criar uma nova coleta, você precisa concluir a coleta na {category} antes!
                    </p>
                }
                <div className='input-group'>
                    <input 
                        type="number" 
                        value={ean} 
                        onChange={e => setEan(e.target.value)} 
                        className='form-control' 
                        placeholder="Código de barras" 
                        required
                    />
                </div>
                <button className='btn btn-info' type="submit">Confirmar</button>
            </div>
            <Link to={`/${category}/${collect}/listar-produtos`} className={styles.buttonListProduct}> 
                Listar Produtos
            </Link>
        </form>
    )
}

export { Register };
