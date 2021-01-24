import React, {useState} from "react"
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const mainBox = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        margin: "0 auto",
        width: "30%",
        gridGap: "10px",
        height: "200px",
    }

    const onStyle = {
        border: "1px solid black",
        backgroundColor: props.on ? 'greenyellow' : 'white',
    }

    const offStyle = {
        border: "1px solid black",
        backgroundColor: props.on ? 'white' : 'deeppink',
    }

    const toggle = {
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: props.on ? 'greenyellow' : 'deeppink',

    }

    return (
        <div>
            <div style={mainBox}>
                <div style={onStyle} onClick={ () => { props.onChange(true) }}></div>
                <div style={offStyle} onClick={ () => { props.onChange(false) }}></div>
                <div style={toggle}></div>
            </div>
        </div>
    )
}