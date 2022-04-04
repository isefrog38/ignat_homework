import React from 'react'
import s from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>

            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}pm</div>
            </div>
        </div>
    )
}

export default Message


/*
function Message(props: MessageType) {
    return (
        <div className={s.AllBlock}>
            <img className={s.card__image} src={props.avatar} alt=""/>
            <div className={s.message}>
                <div className={s.card}>

                    <div className={s.box}>
                        <h3>{props.name}</h3>
                        <h5>{props.message} <span className={s.time}>{props.time}pm</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}*/
