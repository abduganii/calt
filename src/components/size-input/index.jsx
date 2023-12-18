import { SizeIcons } from "../icons"
import cls from "./sizeBtuutun.module.scss"

export default function SizeInput({ value, setValue, rotate }) {

    return (
        <label className={`${cls.SizeInput} ${rotate && cls.SizeInput__rotate} ${value && cls.SizeInput__active}`}  >
            <SizeIcons color={value ? "#484038" : "#918C88"} />
            <input type="number" placeholder="?" value={value} onChange={(e) => setValue(e?.target.value)} />
            <p>-mm</p>
        </label>
    )
}

