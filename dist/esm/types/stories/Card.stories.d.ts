import { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Default: Story;
export declare const CustomContent: Story;
export declare const WithoutImage: Story;
export declare const OnlyCustomContent: Story;
