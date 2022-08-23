import React from 'react';
import {useGetAllCharactersQuery} from "../../store/api/charcters";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import cl from "./homePage.module.css";
import { Container } from '@mui/material';

const HomePage = () => {
    const {data: allCharacters, isLoading, error} = useGetAllCharactersQuery();

    if(isLoading) return <h1>Loading...</h1>

    if(error) return <h1>ups... </h1>

    return (
        <Container maxWidth="lg">
            <div className={cl.container}>
                {
                    allCharacters?.results.map(data => (
                        <CharacterCard
                            key={data.id}
                            data={data}
                        />
                    ))
                }
            </div>
        </Container>
    );
};

export default HomePage;