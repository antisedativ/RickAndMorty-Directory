import React from 'react';
import {useGetCharacterDetailsByIdQuery} from "../../store/api/charcters";
import {Navigate, useParams} from "react-router-dom";
import styles from './CharacterDetailsPage.module.css'

const CharacterDetailsPage = () => {
    const {id} = useParams();
    const {data, isLoading, error} = useGetCharacterDetailsByIdQuery(Number(id) || null);

    if(isLoading) return <h1>Loading...</h1>

    if(error) return <Navigate  to={"/"} replace/>

    if(!data) return <h1>Data not found :(</h1>

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <img src={data.image} alt={data.name} width='300' height='300'/>
                <div className={styles.description}>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.desc}>{data.species}</div>
                    <div className={styles.desc}>{data.gender}</div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetailsPage;