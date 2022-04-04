import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {testAPI} from "./bll/Request_API";

export const Request = () => {

    const [status, setStatus] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [chacked, setChacked] = useState<boolean>(false);

    const onChangeHandler = () => {
        testAPI.createRequest(true)
            .then(response => {
                    setStatus(response.data.info);
                    setError(response.data.errorText);
                    setChacked(true);
            })
            .catch(error => {
                setError(error)
                console.log({...error});
            })
    }
    const onClearHandler = () => {
        setError('');
        setStatus('');
        setChacked(false);
    }

    return (
        <div>
            <SuperButton
                onClick={onChangeHandler}
                style={{padding: "10px 40px"}}
            >
                Send
            </SuperButton>

            <SuperCheckbox
                checked={chacked}
                onChangeChecked={onChangeHandler}
                onChange={onChangeHandler}
                type="checkbox"
            />

            <div>
                {status}
            </div>
            <div style={{color: "red"}}>
                {error}
            </div>

            <SuperButton onClick={onClearHandler}>
                Clear Message
            </SuperButton>
        </div>
    );
};
