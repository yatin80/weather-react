import React from 'react'

const ButtonIcon = (props) => {
    return (
        <i className={`bi bi-${props.btnIcon}`}></i>
    )
}

export default function Button({ name, clickHandler, btnIcon, className }) {
    return (
        <>
            <button className={`btn ${className || ''}`} onClick={clickHandler}>
                {btnIcon && <ButtonIcon btnIcon={btnIcon} />}
                {name}
            </button>
        </>
    )
}
