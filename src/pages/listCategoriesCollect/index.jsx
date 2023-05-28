import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import { apiAxios } from '../../services/api';

import styles from './categories.module.css'

function ListCategoriesCollect(){
    const [categories, setCategories] = useState([])

    useEffect(() => {
        apiAxios.get('http://localhost:3333/category').then(({data}) => setCategories(data))
    }, [])

    return(
        <ul className={styles.container}>
            {categories.map((category) => (
            <li key={category.id}>
                <Link to={`/${category.slug}/listar-coletas`} className='btn btn-info'>
                    {category.title}
                </Link>
            </li>
            ))}
        </ul>
    )
}

export { ListCategoriesCollect };
