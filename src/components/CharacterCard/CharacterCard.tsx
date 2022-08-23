import React, {FC} from 'react';
import {ICharacter} from "../../interface";
import {Link} from "react-router-dom";

interface IProps {
    data: ICharacter;
}

const CharacterCard: FC<IProps> = ({data}) => {
    return (
        <Link to={`/character/${data.id}`}>
            <img src={data.image} alt={data.name} width='200px'/>
            <div>{data.name}</div>
            <div>{data.species}</div>
        </Link>
    );
};

export default CharacterCard;