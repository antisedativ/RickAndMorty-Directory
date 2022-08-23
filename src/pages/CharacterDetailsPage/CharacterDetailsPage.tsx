import React from 'react';
import {useGetCharacterDetailsByIdQuery} from "../../store/api/charcters";
import {Navigate, useParams} from "react-router-dom";

const CharacterDetailsPage = () => {
    const {id} = useParams();
    const {data, isLoading, error} = useGetCharacterDetailsByIdQuery(Number(id) || null);

    if(isLoading) return <h1>Loading...</h1>

    if(error) return <Navigate  to={"/"} replace/>

    if(!data) return <h1>Data not found :(</h1>

    return (
        <div>
            <img src={data.image} alt={data.name}/>
            <div>{data.name}</div>
            <div>{data.species}</div>
            <div>{data.gender}</div>
        </div>
    );
};

export default CharacterDetailsPage;