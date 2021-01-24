import React, {useState} from 'react'
import './App.css'
import Accordion from "./components/Accordion/Accordion"
import {Rating, RatingValueType} from "./components/Rating/Rating"
import {OnOff} from "./components/OnOff/OnOff"
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff"
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion"
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating"


//function declaration
function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    /*let [on, setOn] = useState(false)*/
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            {/*<PageTitle title={'This is App component'}/>
            <PageTitle title={'This is my friends'}/>
            Article 1
            <Rating value={3}/>*/}
            <Accordion
                titleValue={'Controlled Accordion'}
                collapsed={accordionCollapsed}
                onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                />
            <UncontrolledAccordion titleValue={'Uncontrolled Accordion'}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating />

            <OnOff on={switchOn} onChange={ (on) => {setSwitchOn(on)}}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App