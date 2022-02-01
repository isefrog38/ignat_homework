import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPress} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onEnterPress}
                   onBlur={setNameCallback}
            />
            <span>{error}</span>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting