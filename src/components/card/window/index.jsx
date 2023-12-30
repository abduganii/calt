import cls from './window.module.scss'
import { Imagecons } from '../../icons'

export default function WindowCard({ title, img, shodow, click, onClick, className, ...other }) {
    return (
        <div className={`${cls.WindowCard} ${shodow && cls.WindowCard__shodow} ${click == "true" && cls.WindowCard__back}`} {...other} onClick={onClick}>
            <div className={`${cls.WindowCard__img} ${className && className}`}>
                {
                    img ? <img src={img} alt={"img"} /> :
                        <Imagecons />
                }
            </div>
            <p >{title}</p>
        </div>
    )
}
