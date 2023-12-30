import { useEffect, useRef, useState } from "react";
import cls from "./app.module.scss";
import img from "/Home.svg";
import img1 from "./assets/window.png";
import img2 from "./assets/window1.png";
import img3 from "./assets/window2.png";

import { PlusIcons, RoundIcons } from "./components/icons";
import { TypeProfil, WindowArr } from "./data";
import TypeProfile from "./components/card/type-profile";
import CheckBox from "./components/form/checkbox";
import WindowCard from "./components/card/window";
import InputCalt from "./components/form/input-calt";

function App() {
  const [GlobalImage, setGlobalImg] = useState(img)

  const [typeProfile, setTypeProfile] = useState(false)
  const [windowId, setWindowId] = useState(false)
  const [windowId2, setWindowId2] = useState(false)
  const [CheckValue, setCheckValue] = useState(true)
  const [CheckValue2, setCheckValue2] = useState(true)
  const [leftValue, setLeftValue] = useState(0)
  const [rightValue, setRightValue] = useState(0)
  const [openBottom, setOpenBottom] = useState(true)


  const elementRefs = useRef();
  const elementRefs1 = useRef();
  const elementRefs2 = useRef();
  const elementRefs3 = useRef();


  const handleScroll = (e) => {

    const rect = elementRefs?.current.getBoundingClientRect();
    const rect1 = elementRefs1?.current.getBoundingClientRect();
    const rect2 = elementRefs2?.current.getBoundingClientRect();
    const rect3 = elementRefs3?.current.getBoundingClientRect();
    console.log(rect.top)
    if (rect.top >= 500 & rect.top <= 650) {
      setGlobalImg(img)
    }
    if (rect1.top >= 500 & rect1.top <= 650) {
      setGlobalImg(img1)
    }
    if (rect2.top >= 500 & rect2.top <= 650) {
      setGlobalImg(img2)
    }

    if (rect3.top >= 500 & rect3.top <= 650) {
      setGlobalImg(img3)
    }
  };

  console.log(GlobalImage)
  return (
    <main className={`${cls.main}`}>
      <div className={cls.main__Left}>
        <div className={cls.main__Left__svg}>
          <RoundIcons />
        </div>
        <div className={cls.main__img}>
          <img
            src={GlobalImage}
            alt="img"
          />
        </div>
        <div className={`${cls.main__bottom} ${openBottom ? cls.main__bottomTrue : ""}`}>
          <div className={cls.main__bottom__open} onClick={() => setOpenBottom(!openBottom)}>
            <div className={`${openBottom ? cls.main__bottom__open__active : ""}`}></div>
          </div>
          <div className={cls.main__bottom__flex}>
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
      </div>

      <div className={`${cls.main__right}`} onScroll={(e) => handleScroll(e)}>
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
        <h3 className={cls.main__head}  >Тип профиля</h3>
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
        <h3 className={cls.main__head} >Цвет</h3>
        <div className={cls.main__flex} style={{ gap: "10px" }}>
          <div className={cls.main__ColorBox}></div>
          <div className={cls.main__ColorBox}></div>
          <div className={cls.main__ColorBox}></div>
          <div className={cls.main__ColorBox}></div>
          <div className={cls.main__ColorBox}></div>

        </div>
        <p className={cls.main__dics} style={{ marginTop: "32px" }}>
          <span> Советы!</span> При выборе профиля для фасада рекомендуем учесть стиль, прочность, цвет и размеры.
        </p>

        <h3 className={cls.main__head} ref={elementRefs}>Cтекла</h3>
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

        <h3 className={cls.main__head} >Высота и ширина</h3>
        <div className={cls.main__flex} style={{ gap: "5px", marginBottom: "19px" }}>
          <input className={cls.main__sizeInput} type="number" placeholder="?-mm" />
          <input className={`${cls.main__sizeInput} ${cls.main__sizeInputImg}`} type="number" placeholder="?-mm" />
        </div>
        <p className={cls.main__dics} style={{ maxWidth: "266px" }}>
          Наши эксперты создадут идеальное решение под ваши требования.
        </p>

        <h3 className={cls.main__head} ref={elementRefs1}>Тип открывания</h3>

        <CheckBox
          text={"Петли"}
          text2={"Подемные механизми"}
          style={{ maxWidth: "336px" }}
          className={!CheckValue2 ? cls.mainCheckValueRight : ""}
          onClick={() => setCheckValue2(!CheckValue2)}
        />
        {
          WindowArr && <div className={cls.main__flex} style={{ marginTop: "25px", maxWidth: "336px" }}>
            {
              WindowArr?.map(e => (
                <WindowCard
                  key={e?.id}
                  title={e?.title}
                  shodow={true}
                  click={`${windowId2 == e?.id && true}`}
                  className={`${windowId2 == e?.id ? "focus" : ""}`}
                  onClick={() => setWindowId2(e?.id)}
                />
              ))
            }
          </div>
        }
        <h3 className={cls.main__head} ref={elementRefs2}>Количество фасадов</h3>

        <InputCalt
          value={leftValue}
          setValue={setLeftValue}
          label={"Левий"}
          style={{ margin: "0 auto 12px auto" }}
        />
        <InputCalt
          value={rightValue}
          setValue={setRightValue}
          label={"Правый"}
          style={{ margin: "auto" }}
        />

        <h3 className={cls.main__head} ref={elementRefs3}>Встроенная или накладная ручка, с какой стороны ее закрепить?</h3>
        {
          TypeProfil && <div className={cls.main__flex} style={{ gap: "4px" }}>
            {
              TypeProfil?.map(e => (
                <TypeProfile
                  key={e?.id}
                  title={e?.title}
                  // text={e?.text}
                  style={{ padding: "21px" }}
                  className={`${typeProfile == e?.id ? "focus" : ""}`}
                  onClick={() => setTypeProfile(e?.id)}
                />
              ))
            }
          </div>
        }

        <h3 className={cls.main__head} >Добавте комментарии</h3>

        <textarea
          style={{ marginBottom: "60px" }}
          className={cls.main__textArea}
          placeholder={"Комментарий"}
          rows={6}
        ></textarea>

        <button className={cls.main__btn} style={{ marginBottom: "10px", background: "#6d66601a", color: "#6D6660" }}>Есть ли еще другие размеры</button>
        <button className={cls.main__btn}>Оформить заказ</button>
      </div>

    </main >
  );
}

export default App;
