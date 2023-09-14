import { Link } from 'react-router-dom';
import s from './Card.module.css';

const Card = ({ src, alt, subtitle, title, id }) => {
    return (
        <Link to={`/photos/${id}`}>
            <div className={s.Card}>
                <img src={src} alt={alt} className={s['card__image']} />
                <p className={s['Card-title']}>{title}</p>
                <p className={s['Card-subtitle']}>{subtitle}</p>
            </div>
        </Link>);
}

export default Card;