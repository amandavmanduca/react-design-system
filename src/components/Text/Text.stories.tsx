import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './index';
 
export default {
    title: 'Components/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj = {}
export const Small: StoryObj = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj = {
    args: {
        size: 'lg'
    }
}