import cls from "./card.module.scss"
export default function Card({ img, title, text, card, active, onClick, ...other }) {
    return (
        <div className={cls.Card} {...other} onClick={onClick}>
            <div className={`${cls.Card__img} ${active && cls.Card__imgAcive} ${card == 1 && cls.Card__img1} ${card == 2 && cls.Card__img2} ${card == 3 && cls.Card__img3}`}>
                <img src={img} alt="img" />
            </div>
            <h3 className={cls.Card__title}>{title}</h3>
            <p className={cls.Card__text}>{text}</p>
        </div>
    )
}
