import React from 'react'
import c from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={c.AllBlock}>
            <img className={c.card__image} src={props.avatar} alt=""/>
            <div className={c.message}>
                <div className={c.card}>

                    <div className={c.box}>
                        <h3>{props.name}</h3>
                        <h5>{props.message} <span className={c.time}>{props.time}pm</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
