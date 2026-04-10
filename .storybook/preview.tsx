import type { Preview } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { CanvasRenderer, echarts } from '@fanciers/echarts-react';

echarts.use([CanvasRenderer]);

function StorySurface({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: '24px',
        background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
      }}
    >
      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>{children}</div>
    </div>
  );
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <StorySurface>
        <Story />
      </StorySurface>
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
