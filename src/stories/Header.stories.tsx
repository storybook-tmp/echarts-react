import preview from '../../.storybook/preview';
import { expect, fn } from 'storybook/test';

import { Header } from './Header';

const meta = preview.meta({
  component: Header,
  tags: ['ai-generated'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
});

export const LoggedIn = meta.story({
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/welcome/i)).toBeVisible();
    await expect(canvas.getByText(/jane doe/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /log out/i })).toBeVisible();
  },
});

export const LoggedOut = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /log in/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: /sign up/i })).toBeVisible();
  },
});

export const ClickLogin = meta.story({
  play: async ({ canvas, userEvent, args }) => {
    const loginButton = canvas.getByRole('button', { name: /log in/i });
    await userEvent.click(loginButton);
    await expect(args.onLogin).toHaveBeenCalled();
  },
});
