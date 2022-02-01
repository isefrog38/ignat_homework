import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    deleteBtn?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        deleteBtn, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${deleteBtn ? s.deleteBtn : s.default} ${className}`
    const disabled = `${restProps.disabled ? s.disableBtn : s.default}`

    return (
        <button
            disabled={restProps.disabled}
            className={`${disabled} ${finalClassName}`}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
