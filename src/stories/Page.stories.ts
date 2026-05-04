import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Page } from './Page';

const meta = {
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Pages in Storybook' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Log in' })).toBeVisible();
    await expect(canvas.queryByRole('button', { name: 'Log out' })).not.toBeInTheDocument();
  },
};

export const LoggedIn: Story = {
  play: async ({ canvas, userEvent }) => {
    const loginButton = canvas.getByRole('button', { name: /Log in/i });

    await expect(loginButton).toBeVisible();
    await userEvent.click(loginButton);

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(canvas.getByText(/welcome,/i)).toBeVisible();
    await expect(logoutButton).toBeVisible();
  },
};
