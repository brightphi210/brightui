
import Button from "../components/Button";
import {Meta, StoryObj} from '@storybook/react'
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText : string
}


// =========== Meta Properties, where i render my components Button and also display how the button will be controlled by the argTypes
const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        color: {
            options: ['red','blue', 'green', 'yellow', 'black', 'white'],
            control: {
                type: 'select',
            }
        },

        size: {
            options: ['sm','md','lg'],
            control: {
                type: 'select',
            }
        },  

        fontWeight: {
            options: ['light', 'medium', 'semiBold', 'bold'],
            control: {
                type: 'select',
            }
        },
    }
};

export default meta;



// =========== Story, this is where i declare type for each individual item or button representation
type Story = StoryObj<StoryProps>;
export const Color: Story = {
    args: {
        buttonText: 'Click Me',
        color: 'white',
        size: 'md',
        fontWeight: 'light'
    },

    render: ({buttonText, ...args}) =>{
        return <Button {...args}>{buttonText}</Button>
    }
}