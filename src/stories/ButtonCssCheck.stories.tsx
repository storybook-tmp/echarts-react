import preview from '#.storybook/preview';
import { expect } from 'storybook/test';
import { Button } from './Button';

const meta = preview.meta({
  component: Button,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const CssCheck = meta.story({
  args: {
    primary: true,
    label: 'Submit',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i });
    await expect(button).toBeVisible();
    // storybook-button--primary uses background-color: #555ab9 — fails if CSS did not load.
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(85, 90, 185)');
  },
});
