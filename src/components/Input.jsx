import React from 'react'

export default function Input(props) {
    return (
        <>
            <input type='text'
                className={`form-control rounded-5 ${props.className || ''}`}
                placeholder={props.placeholder}
                value={props.inputValue}
                onChange={props.onChange} />

{/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> */}

            
        </>
    )
}
