import type { Meta, StoryObj } from '@storybook/react-vite';

import { CanvasRenderer, ScatterChart, Tooltip, VisualMap } from './index.js';

const scatterData = [
  [10, 8, 15],
  [15, 22, 38],
  [22, 17, 28],
  [30, 35, 48],
  [38, 28, 32],
  [45, 44, 60],
  [52, 30, 42],
];

const meta = {
  title: 'AI Generated/Medium/VisualMap',
  component: VisualMap,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <ScatterChart
      style={{ width: '100%', height: 360 }}
      use={CanvasRenderer}
      xAxis={{ type: 'value', name: 'Engagement' }}
      yAxis={{ type: 'value', name: 'Conversion' }}
      series={{
        type: 'scatter',
        data: scatterData,
        symbolSize: (value) => Number(value[2]),
      }}
    >
      <Tooltip trigger="item" />
      <VisualMap {...args} />
    </ScatterChart>
  ),
} satisfies Meta<typeof VisualMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorRamp: Story = {
  args: {
    min: 10,
    max: 60,
    dimension: 2,
    right: 16,
    top: 'center',
    inRange: {
      color: ['#bfdbfe', '#60a5fa', '#1d4ed8'],
    },
  },
};

export const BubbleSizeGuide: Story = {
  args: {
    min: 10,
    max: 60,
    dimension: 2,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: 12,
    inRange: {
      symbolSize: [12, 52],
      colorLightness: [0.8, 0.3],
    },
  },
};
