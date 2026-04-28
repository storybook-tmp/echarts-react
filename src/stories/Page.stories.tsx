import preview from '../../.storybook/preview';
import { expect } from 'storybook/test';

import { Page } from './Page';

const meta = preview.meta({
  component: Page,
  tags: ['ai-generated'],
  parameters: {
    layout: 'fullscreen',
  },
});

export const Default = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /pages in storybook/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: /log in/i })).toBeVisible();
  },
});

export const LoggedIn = meta.story({
  play: async ({ canvas, userEvent }) => {
    const loginButton = canvas.getByRole('button', { name: /log in/i });
    await expect(loginButton).toBeVisible();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', { name: /log out/i });
    await expect(logoutButton).toBeVisible();
  },
});

export const SignUp = meta.story({
  play: async ({ canvas, userEvent }) => {
    const signUpButton = canvas.getByRole('button', { name: /sign up/i });
    await userEvent.click(signUpButton);
    await expect(canvas.getByText('Jane Doe')).toBeVisible();
  },
});
