import type { Preview } from '@storybook/react-vite';
import React from 'react';

function StoryFrame({ Story }: { Story: React.FC }) {
  const [, setRenderPass] = React.useState(0);

  React.useLayoutEffect(() => {
    setRenderPass(1);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '24px',
        background:
          'linear-gradient(180deg, rgba(246, 248, 251, 1) 0%, rgba(235, 240, 247, 1) 100%)',
        boxSizing: 'border-box',
      }}
    >
      <Story />
    </div>
  );
}

const preview: Preview = {
  decorators: [
    (Story) => <StoryFrame Story={Story} />,
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
