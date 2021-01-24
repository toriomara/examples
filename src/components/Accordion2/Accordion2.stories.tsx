import React, {useState} from 'react'
import {action} from "@storybook/addon-actions"
import {Accordion2, AccordionPropsType} from "./Accordion2"
import {Story} from "@storybook/react/types-6-0"

export default {
    title: 'components/Accordion2',
    component: Accordion2
}

const callback = action('Accordion mode change event fired')
const onClickCallback = action('Some item clicked')

export const MenuCollapsedMode = () => <Accordion2 titleValue={"Users"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback} />
export const UserUncollapsedMode = () => <Accordion2 titleValue={"Users"} collapsed={false} onChange={callback} onClick={onClickCallback} items={[
    {title: "Dima", value: 1},
    {title: "Valera", value: 2},
    {title: "Artem", value: 3},
    {title: "Victor", value: 4}
]} />

export const ChangingMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion2 titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} onClick={(id) => { alert(`User ID ${id} should be happy!`)}} items={[
        {title: "Dima", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4}
    ]} />
}
