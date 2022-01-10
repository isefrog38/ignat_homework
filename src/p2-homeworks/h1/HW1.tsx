import React from 'react';
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";

const messageData = {
    avatar: 'https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808',
    name: 'Alexey Fedorov',
    message: 'Здаров Леха ! Где пропал, брат ?!',
    time: "10:00",
}

function HW1() {
    return (
        <div>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            <AlternativeMessage/>
            <hr/>
        </div>
    )
}

export default HW1
