import { useEffect, useState } from 'react';
import { apiAxios } from '../../services/api';
import { Link, useParams } from 'react-router-dom';

import styles from './listcollect.module.css';

function ListCollect(){
    const [collections, setCollections] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        apiAxios.get(`category/${category}/collect`).then(response => {
                const { data } = response

                setCollections(data)
            }
        )
    }, []);

    return(
        <ul className={styles.container}>
            Criado por Jonas Benjamim
            {collections.map((collect) => { 
                if(!collect.finished){
                    return (null)
                }else if(collect.checkCollect){
                    return (null)
                }

                return(
                    <li key={collect.id}>
                        <Link to={`/${collect.title}/coletas/${collect.id}`} className='btn btn-info'>
                            {collect.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
}

export {ListCollect};
