import preview from '#.storybook/preview';
import { expect } from 'storybook/test';
import { Page } from './Page';

const meta = preview.meta({
  component: Page,
  tags: ['ai-generated'],
  parameters: {
    layout: 'fullscreen',
  },
});

export const LoggedOut = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /pages in storybook/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: /log in/i })).toBeVisible();
  },
});

export const LoggedIn = meta.story({
  play: async ({ canvas, userEvent }) => {
    const loginButton = canvas.getByRole('button', { name: /log in/i });
    await userEvent.click(loginButton);
    await expect(canvas.getByText('Jane Doe')).toBeVisible();
    await expect(canvas.getByRole('button', { name: /log out/i })).toBeVisible();
  },
});

export const LogoutFlow = meta.story({
  play: async ({ canvas, userEvent }) => {
    // Log in first
    await userEvent.click(canvas.getByRole('button', { name: /log in/i }));
    await expect(canvas.getByRole('button', { name: /log out/i })).toBeVisible();
    // Then log out
    await userEvent.click(canvas.getByRole('button', { name: /log out/i }));
    await expect(canvas.getByRole('button', { name: /log in/i })).toBeVisible();
  },
});
