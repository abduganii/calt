import { useState } from "react";
import cls from "./app.module.scss";
import img from "/Home.svg";
import { PlusIcons, RoundIcons } from "./components/icons";
import { TypeProfil, WindowArr } from "./data";
import TypeProfile from "./components/card/type-profile";
import CheckBox from "./components/checkbox";
import WindowCard from "./components/card/window";

function App() {
  const [typeProfile, setTypeProfile] = useState(false)
  const [windowId, setWindowId] = useState(false)
  const [windowId2, setWindowId2] = useState(false)
  const [CheckValue, setCheckValue] = useState(true)
  const [CheckValue2, setCheckValue2] = useState(true)

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
          <div className={cls.main__right__header__wrap}>
            <div
              className={`${cls.main__right__btn} ${cls.main__right__btnActive}`}
            >
              Первое заказ
            </div>
            <div className={cls.main__right__btn}>Больше нет</div>
            <div className={cls.main__right__header__plus}>
              <PlusIcons />
            </div>
          </div>
        </div>
        {/* <div className={cls.main__right__top}></div> */}
        <h2 className={cls.main__right__title}>
          Изготовление рамочных фасадов
        </h2>
        <h3 className={cls.main__head}>Тип профиля</h3>
        {
          TypeProfil && <div className={cls.main__flex} style={{ gap: "4px" }}>
            {
              TypeProfil?.map(e => (
                <TypeProfile
                  key={e?.id}
                  title={e?.title}
                  text={e?.text}
                  className={`${typeProfile == e?.id ? "focus" : ""}`}
                  onClick={() => setTypeProfile(e?.id)}
                />
              ))
            }
          </div>
        }
        <h3 className={cls.main__head}>Цвет</h3>

        <p className={cls.main__dics}>
          <span> Советы!</span> При выборе профиля для фасада рекомендуем учесть стиль, прочность, цвет и размеры.
        </p>

        <h3 className={cls.main__head}>Cтекла</h3>
        <CheckBox
          text={"Тип стекла"}
          text2={"Услуги"}
          className={!CheckValue ? cls.mainCheckValueRight : ""}
          // value={CheckValue ? "type" : "service"}
          onClick={() => setCheckValue(!CheckValue)}
        />
        {
          WindowArr && <div className={cls.main__flex} style={{ gap: "10px", marginTop: "25px" }}>
            {
              WindowArr?.map(e => (
                <WindowCard
                  key={e?.id}
                  title={e?.title}
                  className={`${windowId == e?.id ? "focus" : ""}`}
                  onClick={() => setWindowId(e?.id)}
                />
              ))
            }
          </div>
        }

        <h3 className={cls.main__head}>Высота и ширина</h3>
        <div className={cls.main__flex} style={{ gap: "5px", marginBottom: "19px" }}>
          <input className={cls.main__sizeInput} type="number" placeholder="?-mm" />
          <input className={`${cls.main__sizeInput} ${cls.main__sizeInputImg}`} type="number" placeholder="?-mm" />
        </div>
        <p className={cls.main__dics} style={{ maxWidth: "266px" }}>
          Наши эксперты создадут идеальное решение под ваши требования.
        </p>

        <h3 className={cls.main__head}>Высота и ширина</h3>

        <CheckBox
          text={"Петли"}
          text2={"Подемные механизми"}
          className={!CheckValue2 ? cls.mainCheckValueRight : ""}
          onClick={() => setCheckValue2(!CheckValue2)}
        />
        {
          WindowArr && <div className={cls.main__flex} style={{ gap: "10px", marginTop: "25px" }}>
            {
              WindowArr?.map(e => (
                <WindowCard
                  key={e?.id}
                  title={e?.title}
                  className={`${windowId2 == e?.id ? "focus" : ""}`}
                  onClick={() => setWindowId2(e?.id)}
                />
              ))
            }
          </div>
        }
        <h3 className={cls.main__head}>Количество фасадов</h3>
      </div>
    </main >
  );
}

export default App;
