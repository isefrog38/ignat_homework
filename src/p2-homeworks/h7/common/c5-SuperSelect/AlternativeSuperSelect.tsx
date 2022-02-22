import React, {FocusEvent, useState} from 'react'
import "./MySelect.css";

type Select = {
    items: string[]
    value: string
    onChange: (value : string) => void
}

function AlternativeSuperSelect ({items, value, onChange}: Select) {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onClickHandler = () => setCollapsed(!collapsed);
    const selectedItem = items.find(e => e === value);
    const blur = () => setCollapsed(false);
    const onClickItem = (value: string) => {
        onChange(value);
    }

    return (
        <div>
            <div onClick={onClickHandler} className={"divH"}>
                <h3>{selectedItem}</h3><div className={"arrow"}/>
            </div>
            <span className={"invisibleDiv" + " " + (collapsed ? "active" : " ")} onBlur={blur}>
                {collapsed && items.map(i => (
                    <div tabIndex={0} onClick={() => onClickItem(i)} className={"item"} key={i}>{i}</div>))}
            </span>
        </div>
    )
}

export default AlternativeSuperSelect
