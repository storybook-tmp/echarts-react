import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Button' });

    await expect(button).toBeVisible();
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(85, 90, 185)');
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Button' });

    await expect(button).toBeVisible();
    await expect(button).toHaveClass('storybook-button--secondary');
    await userEvent.click(button);
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Button' });

    await expect(button).toBeVisible();
    await expect(button).toHaveClass('storybook-button--large');
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Button' });

    await expect(button).toBeVisible();
    await expect(button).toHaveClass('storybook-button--small');
  },
};
