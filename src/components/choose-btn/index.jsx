import cls from "./chooseBtn.module.scss"

export default function ChooseBtn({ value, text1, text2, onClick, ...other }) {
    return (
        <div className={cls.ChooseBtn} {...other} onClick={onClick}>
            <div className={`${cls.ChooseBtn__btn} ${value == 1 && cls.ChooseBtn__active}`}>{text1}</div>
            <div className={`${cls.ChooseBtn__btn} ${value == 2 && cls.ChooseBtn__active}`}>{text2}</div>
            <div className={`${cls.ChooseBtn__blue} ${value == 2 && cls.ChooseBtn__blueactive}`}></div>
        </div>
    )
}
