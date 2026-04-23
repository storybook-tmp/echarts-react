import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Header } from './Header';

const meta = {
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText(/welcome,/i)).toBeVisible();
    await expect(canvas.getByText('Jane Doe')).toBeVisible();

    const logoutButton = canvas.getByRole('button', { name: 'Log out' });
    await expect(logoutButton).toBeVisible();
    await userEvent.click(logoutButton);
  },
};

export const LoggedOut: Story = {
  play: async ({ canvas, userEvent }) => {
    const loginButton = canvas.getByRole('button', { name: 'Log in' });
    const createAccountButton = canvas.getByRole('button', { name: 'Sign up' });

    await expect(canvas.getByRole('heading', { name: 'Acme' })).toBeVisible();
    await expect(loginButton).toBeVisible();
    await expect(createAccountButton).toBeVisible();
    await userEvent.click(createAccountButton);
  },
};
