import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from './Input';

const meta = {
  title: 'Base Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: 'medium',
    rounded: 'medium',
    placeholder: 'Medium size',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    rounded: 'medium',
    placeholder: 'Small size',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    rounded: 'medium',
    placeholder: 'Large size',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    rounded: 'medium',
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    size: 'medium',
    rounded: 'medium',
    placeholder: 'Error',
    error: true,
  },
};
