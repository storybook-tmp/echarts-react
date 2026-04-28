import preview from '../../.storybook/preview';
import { expect, fn } from 'storybook/test';

import { Button } from './Button';

const meta = preview.meta({
  component: Button,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
});

export const Primary = meta.story({
  args: {
    primary: true,
    label: 'Save',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /save/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  },
});

export const Secondary = meta.story({
  args: {
    label: 'Cancel',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /cancel/i });
    await expect(button).toBeVisible();
  },
});

export const Large = meta.story({
  args: {
    size: 'large',
    label: 'Large Button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /large button/i });
    await expect(button).toBeVisible();
  },
});

export const Small = meta.story({
  args: {
    size: 'small',
    label: 'Small Button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /small button/i });
    await expect(button).toBeVisible();
  },
});

export const CssCheck = meta.story({
  args: {
    primary: true,
    label: 'Submit',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i });
    // .storybook-button--primary uses background-color: #555ab9 — fails if CSS did not load.
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(85, 90, 185)');
  },
});
