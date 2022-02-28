import React, {useState} from 'react'
import s from "./Styles.module.css";
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export const Clock = () => {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

        const onMouseEnter = () => {
            setShow(true)
        }
        const onMouseLeave = () => {
            setShow(false)
        }

        const stringTime = date?.toLocaleTimeString();
        const stringDate = date?.toLocaleDateString();

        return (
            <div>
                <div
                    className={s.Clock}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <span className={s.Time}>{stringTime}</span>
                    {show && (
                        <span className={s.Date}>{stringDate}</span>
                    )}
                </div>
                <div style={{display: "flex"}}>
                    <SuperButton onClick={start}>start</SuperButton>
                    <SuperButton onClick={stop}>stop</SuperButton>
                </div>
            </div>
        )
    }
