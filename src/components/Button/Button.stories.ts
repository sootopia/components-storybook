import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Base Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    rounded: 'small',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Button',
    rounded: 'small',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    label: 'Button',
    rounded: 'small',
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    label: 'Button',
    rounded: 'small',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'medium',
    label: 'Button',
    rounded: 'small',
  },
};

export const Xsmall: Story = {
  args: {
    variant: 'primary',
    size: 'xsmall',
    label: 'Button',
    rounded: 'small',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Button',
    rounded: 'small',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Button',
    rounded: 'small',
  },
};

export const Xlarge: Story = {
  args: {
    variant: 'primary',
    size: 'xlarge',
    label: 'Button',
    rounded: 'small',
  },
};

export const RoundedMedium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    rounded: 'medium',
  },
};

export const RoundedLarge: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    rounded: 'large',
  },
};

export const RoundedFull: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    rounded: 'full',
  },
};
