import React, {FC} from 'react';
import {ICharacter} from "../../interface";
import {Link} from "react-router-dom";
import { disconnect } from 'process';
import cl from './CharacterCard.module.scss'

interface IProps {
    data: ICharacter;
}

const CharacterCard: FC<IProps> = ({data}) => {
    return (
        <div className={cl.wrapper}>
            <Link to={`/character/${data.id}`} className={cl.card}>
                <img src={data.image} alt={data.name}/>
                <div className={cl.card__name}>{data.name}</div>
                {/* <div>{data.species}</div> */}
            </Link>
        </div>
    );
};

export default CharacterCard;