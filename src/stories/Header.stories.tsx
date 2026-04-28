import preview from '#.storybook/preview';
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
  render: () => (
    <Header
      user={{ name: 'Jane Doe' }}
      onLogin={() => {}}
      onLogout={() => {}}
      onCreateAccount={() => {}}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Jane Doe')).toBeVisible();
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
