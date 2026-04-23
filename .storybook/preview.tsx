import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { CanvasRenderer, echarts } from '../src/index.ts';

echarts.use(CanvasRenderer);

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          boxSizing: 'border-box',
          padding: 16,
          background: '#fff',
        }}
      >
        <div style={{ width: '100%', maxWidth: 720, margin: '0 auto' }}>
          <Story />
        </div>
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
