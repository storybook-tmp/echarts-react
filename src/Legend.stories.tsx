import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, CanvasRenderer, Legend } from './index.js';

const meta = {
  title: 'AI Generated/Simple/Legend',
  component: Legend,
  decorators: [
    (Story) => (
      <BarChart
        use={CanvasRenderer}
        style={{ width: '100%', height: 320 }}
        xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
        yAxis={{ type: 'value' }}
        series={[
          { type: 'bar', name: 'Desktop', data: [14, 19, 13, 21] },
          { type: 'bar', name: 'Mobile', data: [10, 16, 18, 20] },
        ]}
      >
        <Story />
      </BarChart>
    ),
  ],
} satisfies Meta<typeof Legend>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
    top: 0,
  },
};

export const Vertical: Story = {
  args: {
    show: true,
    orient: 'vertical',
    right: 0,
    top: 'middle',
  },
};
