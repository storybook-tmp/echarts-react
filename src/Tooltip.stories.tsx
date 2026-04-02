import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, CanvasRenderer, Tooltip } from './index.js';

const meta = {
  title: 'AI Generated/Simple/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <BarChart
        use={CanvasRenderer}
        style={{ width: '100%', height: 320 }}
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
        yAxis={{ type: 'value' }}
        series={[{ type: 'bar', data: [120, 200, 150, 80, 70] }]}
      >
        <Story />
      </BarChart>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AxisTrigger: Story = {
  args: {
    show: true,
    trigger: 'axis',
  },
};

export const ItemTrigger: Story = {
  args: {
    show: true,
    trigger: 'item',
    formatter: '{b}: {c}',
  },
};
