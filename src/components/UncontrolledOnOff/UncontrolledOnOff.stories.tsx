import React, {useState} from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {UncontrolledOnOff} from "./UncontrolledOnOff"
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action('OnOff mode change event fired')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback} />
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

/*export const ChangingMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <UncontrolledOnOff onChange={setValue} />
}*/
