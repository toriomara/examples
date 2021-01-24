import React, {useState} from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Accordion, AccordionPropsType} from "./Accordion"
import {action} from "@storybook/addon-actions"
import {ButtonProps} from "../../stories/Button"
import {Story} from "@storybook/react/types-6-0"

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
}

const callback = action('Accordion mode change event fired')
const onClickCallback = action('Some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Menu",
    collapsed: true,
    items: []
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Users",
    collapsed: false,
    items: [
        {title: "Dima", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4}
    ]
}

export const ChangingMode: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
    )
}

ChangingMode.args = {
    titleValue: "Users",
    collapsed: false,
    items: [
        {title: "Dima", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4}
    ],
    onClick: (value) => {
        alert(`User with ID ${value} should be happy`)
    }
}

