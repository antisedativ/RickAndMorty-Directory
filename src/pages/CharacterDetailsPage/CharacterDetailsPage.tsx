import React from 'react';
import {useGetCharacterDetailsByIdQuery} from "../../store/api/charcters";
import {Navigate, useParams} from "react-router-dom";
import styles from './CharacterDetailsPage.module.scss'
import NotFound from '../NotFound/NotFound';

const CharacterDetailsPage = () => {
    const {id} = useParams();
    const {data, isLoading, error} = useGetCharacterDetailsByIdQuery(Number(id) || null);

    if(isLoading) return <h1>Loading...</h1>

    if(error) return <Navigate  to={"/"} replace/>

    if(!data) return <NotFound />

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <img src={data.image} alt={data.name}/>
                    <div className={[styles.item, styles.stat].join(' ')}>
                        <span>Status:</span> 
                        <span className={styles.status}></span> {data.status}
                    </div>
                    <div className={styles.item}>
                        <span>Species:</span> {data.species}
                    </div>
                    <div className={styles.item}>
                        <span>Gender:</span> {data.gender}
                    </div>
                    <div className={styles.item}>
                        <span>Origin:</span> {data.origin.name}
                    </div>
                    <div className={styles.item}>
                        <span>Location:</span> {data.location.name}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{data.name}</div>
                    <hr />
                    <p className={styles.history}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita enim atque nulla, eum tenetur quibusdam. Suscipit dicta quos, assumenda error qui neque deleniti amet exercitationem a deserunt similique cumque maxime?
                    Eius recusandae eligendi quidem consectetur amet nesciunt ex, quo laudantium quas, sunt, quam non nihil at corrupti cumque? Distinctio repellendus repudiandae tempore dolorem earum illum ab perferendis architecto, voluptates iste.</p>
                </div>

            </div>
        </div>
    );
};

export default CharacterDetailsPage;