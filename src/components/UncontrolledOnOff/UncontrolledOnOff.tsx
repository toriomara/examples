import React, {useState} from "react"
//import s from './OnOff.module.css'

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

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
        backgroundColor: on ? 'greenyellow' : 'white',
    }

    const offStyle = {
        border: "1px solid black",
        backgroundColor: on ? 'white' : 'deeppink',

    }

    const toggle = {
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: on ? 'greenyellow' : 'deeppink',
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={mainBox}>
                <div style={onStyle} onClick={onClicked}/>
                <div style={offStyle} onClick={offClicked}/>
                <div style={toggle}></div>
            </div>


        </div>
    )
}