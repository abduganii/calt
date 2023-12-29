import { useState } from "react";
import cls from "./app.module.scss";
import img from "/Home.svg";
import Card from "./components/card";
import CheckWindow from "./components/checkWindow";
import ChooseBtn from "./components/choose-btn";
import SizeInput from "./components/size-input";
import { ColersArr, ProfileArr, WindowsArr, WindowsTypeArr } from "./data";
import { PlusIcons, RoundIcons } from "./components/icons";

function App() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [profile, setProfile] = useState(false);
  const [windowType, setWindowType] = useState(1);
  const [windowTypeId, setWindowTypeId] = useState(false);
  const [windowId, setWindowId] = useState(false);
  const [openType, setOpenType] = useState(false);

  return (
    <main className={`${cls.main}`}>
      <div className={cls.main__Left}>
        <div className={cls.main__Left__svg}>
          <RoundIcons />
        </div>
        <div className={cls.main__img}>
          <img src={img} alt="img" />
        </div>
        <div className={cls.main__bottom}>
          <div className={cls.main__bottom__logo}>
            <p>Сделана в:</p>
            <a href="http://Getter.uz" target="_blank">
              <img src="/Getter.svg" alt="img" width={74} height={30} />
            </a>
          </div>
          <div className={cls.main__bottom__wrap}>
            <div className={cls.main__bottom__content}>
              <h4 className={cls.main__bottom__title}>Стоимость:</h4>
              <p className={cls.main__bottom__text}>
                Определенное оборудование оплачивается за квадратный метр,
                другое - за штуку.
              </p>
            </div>
            <div className={cls.main__bottom__line}></div>
            <div className={cls.main__bottom__price}>
              <h4 className={cls.main__bottom__title}>235.09$</h4>
              <p className={cls.main__bottom__text}>+ 25.08$ Добавили стекло</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${cls.main__right}`}>
        <div className={cls.main__right__header}>
          <div className={cls.main__right__header_wrap}>
            <div
              className={`${cls.main__right__btn} ${cls.main__right__btnActive}`}
            >
              Первое заказ
            </div>
            <div className={cls.main__right__btn}>Больше нет</div>
            <div>
              <PlusIcons />
            </div>
          </div>
        </div>
        {/* <div className={cls.main__right__top}></div> */}
        <h2 className={cls.main__right__title}>
          Изготовление рамочных фасадов
        </h2>
      </div>
    </main>
  );
}

export default App;
