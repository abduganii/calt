import cls from './inputCalt.module.scss'
import { DecreazeIcons, IncreazeIcons } from '../../icons'

export default function InputCalt({ label, setValue, value = 0, className, ...other }) {
    return (
        <div className={`${cls.InputCalt} ${className && className}`} {...other}>
            <p>{label}</p>
            <div className={cls.InputCalt__input} >
                <div className={`${value == 0 && cls.InputCalt__input__desible}`} onClick={() => value > 0 ? setValue(value - 1) : value}><DecreazeIcons /></div>
                <p >{value}</p>
                <div onClick={() => setValue(value + 1)}><IncreazeIcons /></div>
            </div>
        </div >
    )
}
