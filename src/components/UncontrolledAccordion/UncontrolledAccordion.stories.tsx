import React, {useState} from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {UncontrolledAccordion} from "./UncontrolledAccordion"
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action('Accordion mode change event fired')


export const ChangingMode = () => {
    return <UncontrolledAccordion titleValue={"Users"} />
}
