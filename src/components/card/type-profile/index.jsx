import cls from './typeProfile.module.scss'

export default function TypeProfile({ className, title, text, onClick, ...other }) {
    return (
        <div className={`${cls.TypeProfile} ${className && className}`} onClick={onClick}>
            <p>{title}</p>
            <span>{text}</span>
        </div>
    )
}
