import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 24,
          minHeight: 420,
          boxSizing: 'border-box',
          background: '#fff',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
