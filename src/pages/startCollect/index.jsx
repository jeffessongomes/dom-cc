import styles from "./startCollect.module.css"

import { apiAxios } from "../../services/api"
import { useParams, Navigate } from "react-router-dom"
import { useState } from "react"

function StartCollect(){
    const [isLoading, setIsLoading] = useState()
    const [dataError, setDataError] = useState('')
    const [collectCreate, setCollectCreate] = useState('')

    const {category} = useParams()

    const handleStartCollect = async () => {
        setIsLoading(true)

        try{
            const {data} = await apiAxios.post('collect', {
                title: category
            })

            setCollectCreate(data.id)
            setIsLoading(false)
        }catch(err) {
            const { response = {} } = err
            const { data = {} } = response

            setDataError(data)
            setIsLoading(false)
        }
    }

    return(
        <div className={styles.container}>
            {
                !!dataError &&
                <Navigate to={`/${dataError.title}/${dataError.id}/cadastro/finalizar`} replace />
            }
            {
                !!collectCreate &&
                    <Navigate to={`/${category}/${collectCreate}/cadastro`} replace />
            }
            <span>
                Aplicação criada por 
                <a href="https://www.linkedin.com/in/jpbenjamim/" target="_blank"> Jonas Benjamim</a>
            </span>
            <button type="button" onClick={() => handleStartCollect()} className="btn btn-info">
                Iniciar Coleta
            </button>
            {isLoading && 
            <span>
                Iniciando coleta...
            </span>
            }
        </div>
    )    
}

export {StartCollect}
