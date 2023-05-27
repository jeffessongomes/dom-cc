import { Link } from 'react-router-dom'

import styles from './categories.module.css'

function Categories(){
    return(
        <ul className={styles.container}>
            <li>
                <Link to="/cozinha/cadastro" className='btn btn-info'>
                    Cozinha
                </Link>
            </li>
        </ul>
    )
}

export { Categories };
