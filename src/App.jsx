import { useState } from "react"
import cls from "./app.module.scss"
import img from "./assets/window.png"
import Card from "./components/card"
import CheckWindow from "./components/checkWindow"
import ChooseBtn from "./components/choose-btn"
import SizeInput from "./components/size-input"
import { ColersArr, ProfileArr, WindowsArr, WindowsTypeArr } from "./data"


function App() {
  const [height, setHeight] = useState()
  const [width, setWidth] = useState()
  const [profile, setProfile] = useState(false)
  const [windowType, setWindowType] = useState(1)
  const [windowTypeId, setWindowTypeId] = useState(false)
  const [windowId, setWindowId] = useState(false)
  const [openType, setOpenType] = useState(false)

  return (
    <main className={`${cls.main}`}>
      <div className={cls.main__Left}>
        <div className={cls.main__img}>
          <img src={img} alt="img" />
        </div>
        <div className={cls.main__bottom}>
          <h3 className={cls.main__bottom__title}>Высота и ширина</h3>
          <p className={cls.main__bottom__text}>Производим качественные и надежные рамочные фасады.</p>
          <h3 className={cls.main__bottom__price}>235.09$</h3>
        </div>
      </div>

      <div className={`${cls.main__right}`}>
        <div className={cls.main__right__top}></div>
        <h2 className={cls.main__right__title}>Изготовление рамочных фасадов</h2>
        <p className={cls.main__right__text}>Производим качественные и надежные рамочные фасады.</p>
        <h3 className={cls.main__right__head}>Высота и ширина</h3>
        <div className={cls.main__right__wrap} style={{ justifyContent: "center" }}>
          <SizeInput value={height} setValue={setHeight} rotate={true} />
          <SizeInput value={width} setValue={setWidth} />
        </div>
        <p className={`${cls.main__right__text} ${cls.main__right__text1}`} >Наши эксперты создадут идеальное решение под ваши требования.</p>

        <h3 className={cls.main__right__head}>Тип профиля и цвет</h3>
        <div className={cls.main__right__wrap}>
          {
            ProfileArr && ProfileArr?.map(e => (
              <Card
                card={1}
                key={e?.id}
                img={e?.img}
                title={e?.title}
                active={profile == e?.id ? true : false}
                text={e?.text}
                onClick={() => setProfile(state => state == e?.id ? false : e?.id)}
              />
            ))
          }
        </div>

        <h3 className={cls.main__right__head}>Выберите цвет профиля</h3>
        <div className={cls.main__right__wrap}>
          {
            ColersArr && ColersArr.map((e) => (
              <img key={e?.id} src={e?.img} width={56} height={56} />
            ))
          }
        </div>
        <p className={`${cls.main__right__text} ${cls.main__right__text2}`}><span>Советы!</span> При выборе профиля для фасада рекомендуем учесть стиль, прочность, цвет и размеры. Наши эксперты помогут подобрать идеальное решение для вашего проекта.</p>

        <h3 className={`${cls.main__right__head}`} >Cтекла</h3>
        <div className={cls.main__right__wrap} >
          <ChooseBtn text1={"Тип стекла"} text2={"Услуги"} value={windowType} style={{ marginBottom: "40px" }} onClick={() => setWindowType(state => state === 1 ? 2 : 1)} />
        </div>
        {
          windowType == 1 ?
            <>
              <div className={cls.main__right__wrap} style={{ marginBottom: "9px" }}>
                <Card
                  card={2}
                  img={'/nowindow.png'}
                  title={"Без стекла"}
                  active={!windowId}
                  onClick={() => setWindowId(false)}
                />
              </div>
              <div className={cls.main__right__wrap}>
                {WindowsArr && WindowsArr?.map(e => (
                  <Card
                    card={2}
                    key={e?.id}
                    img={e?.img}
                    title={e?.text}
                    active={windowId == e?.id ? true : false}
                    onClick={() => setWindowId(state => state == e?.id ? false : e?.id)}
                  />
                ))}
              </div>
            </>
            : <div className={cls.main__right__cont} >
              {
                WindowsTypeArr && WindowsTypeArr?.map(e => (
                  <CheckWindow
                    style={{ marginBottom: "5px" }}
                    key={e?.id}
                    title={e?.title}
                    text={e?.text}
                    check={windowTypeId == e?.id ? true : false}
                    onClick={() => setWindowTypeId(state => state == e?.id ? false : e?.id)}
                  />
                ))
              }
              <div className={cls.main__right__chop}>
                <img className={cls.main__right__chop__img} src="/chop.png" alt="img" width={192} height={86} />
              </div>
              <div className={cls.main__right__messege}>
                <img src="/Union.png" alt="img" />
                <p>
                  <span>Советы!</span> Выбирая стекло для рамки, обратите внимание на стиль, прозрачность, толщину и безопасность. Наши эксперты помогут сделать оптимальный выбор.
                </p>
              </div>
            </div>
        }

        <h3 className={cls.main__right__head}>Тип открывания</h3>
        <div className={cls.main__right__wrap} style={{ marginBottom: "9px" }}>
          <Card
            card={3}
            img={'/nowindow.png'}
            title={"Без фурнитуры"}
            active={!openType}
            onClick={() => setOpenType(false)}
          />
        </div>
        {
          openType ?
            <div className={cls.main__right__cont}>
              <div className={cls.main__right__flex}>
                {WindowsArr && WindowsArr?.map(e => {
                  if (e?.id == openType) {
                    return (
                      <Card
                        card={3}
                        key={e?.id}
                        img={e?.img}
                        title={e?.text}
                        active={openType == e?.id ? true : false}

                      />
                    )
                  }
                })}

                <button className={cls.main__right__typeBtn} onClick={() => setOpenType(false)}>Выбрать другой</button>
              </div>

            </div>
            :
            <div className={cls.main__right__wrap}>
              {WindowsArr && WindowsArr?.map(e => (
                <Card
                  card={3}
                  key={e?.id}
                  img={e?.img}
                  title={e?.text}
                  active={openType == e?.id ? true : false}
                  onClick={() => setOpenType(state => state == e?.id ? false : e?.id)}
                />
              ))}
            </div>
        }
        <p className={`${cls.main__right__text} ${cls.main__right__text2}`}><span>Советы!</span>При выборе профиля для фасада рекомендуем учесть стиль, прочность, цвет и размеры. Наши эксперты помогут подобрать идеальное решение для вашего проекта.</p>


        {/* ///////////// */}
        <div className={cls.main__right__bottom}>

        </div>
      </div>

    </main >
  )
}

export default App