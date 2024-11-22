import { Meta, StoryObj } from '@storybook/react';
import { FormRadio } from './FormRadio';
declare const meta: Meta<typeof FormRadio>;
export default meta;
type Story = StoryObj<typeof FormRadio>;
export declare const Default: Story;
export declare const Required: Story;
export declare const WithError: Story;
