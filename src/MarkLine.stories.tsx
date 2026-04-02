import type { Meta, StoryObj } from '@storybook/react-vite';
import { CanvasRenderer, LineChart, MarkLine } from './index.js';

const meta = {
  title: 'AI Generated/Complex/MarkLine',
  component: MarkLine,
  decorators: [
    (Story) => (
      <LineChart
        use={CanvasRenderer}
        style={{ width: '100%', height: 320 }}
        xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }}
        yAxis={{ type: 'value' }}
        series={[{ type: 'line', smooth: true, data: [820, 932, 901, 934, 1290] }]}
      >
        <Story />
      </LineChart>
    ),
  ],
} satisfies Meta<typeof MarkLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AverageLine: Story = {
  args: {
    data: [{ type: 'average', name: 'Average' }],
  },
};

export const ThresholdLine: Story = {
  args: {
    data: [{ yAxis: 1000, name: 'Target' }],
    lineStyle: {
      color: '#c62828',
      type: 'dashed',
    },
  },
};
