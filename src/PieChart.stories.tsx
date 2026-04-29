import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { PieChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Title, Tooltip, Legend } from './components';

const meta: Meta<any> = {
  component: PieChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer],
    style: { width: 600, height: 400 },
    series: [
      {
        type: 'pie' as const,
        data: [
          { value: 1048, name: 'Search' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Social' },
          { value: 300, name: 'Video' },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).not.toBeNull();
  },
};

export const Donut: Story = {
  args: {
    series: [
      {
        type: 'pie' as const,
        radius: ['40%', '70%'],
        data: [
          { value: 1048, name: 'Search' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
        ],
      },
    ],
  },
};

export const WithLegend: Story = {
  render: (args) => (
    <PieChart {...args}>
      <Title title={{ text: 'Traffic Sources' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
      <Legend legend={{ orient: 'vertical', left: 'left' }} />
    </PieChart>
  ),
};
