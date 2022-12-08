import React from 'react';
import { Link } from 'react-router-dom';
import cl from './NotFound.module.scss'

const NotFound:React.FC = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.code}>404</div>
                <Link to='/' className={cl.description}>Go to home page</Link>
                <img src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/6BNj/qhW4RX8ox" alt="" />
            </div>
        </div>
    );
};

export default NotFound;