import Button from "../components/Button";
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from "react";
type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<StoryProps>;
export declare const Color: Story;
