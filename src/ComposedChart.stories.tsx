import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { BarChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Title, Tooltip, Legend, Toolbox } from './components';

const meta: Meta<any> = {
  component: BarChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer],
    style: { width: 700, height: 450 },
    xAxis: { type: 'category' as const, data: ['Q1', 'Q2', 'Q3', 'Q4'] },
    yAxis: { type: 'value' as const },
    series: [
      { type: 'bar' as const, name: 'Revenue', data: [500, 800, 600, 900] },
      { type: 'bar' as const, name: 'Profit', data: [200, 350, 250, 420] },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FullFeatured: Story = {
  render: (args) => (
    <BarChart {...args}>
      <Title title={{ text: 'Quarterly Report', subtext: 'Revenue vs Profit' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{}} />
      <Toolbox toolbox={{ feature: { saveAsImage: {} } }} />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const canvas = canvasElement.querySelector('canvas');
    await expect(canvas).not.toBeNull();
    await expect(canvas!.height).toBeGreaterThan(0);
  },
};

export const StackedBars: Story = {
  args: {
    series: [
      { type: 'bar' as const, name: 'Revenue', stack: 'total', data: [500, 800, 600, 900] },
      { type: 'bar' as const, name: 'Profit', stack: 'total', data: [200, 350, 250, 420] },
    ],
  },
  render: (args) => (
    <BarChart {...args}>
      <Title title={{ text: 'Stacked Bar Chart' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{}} />
    </BarChart>
  ),
};
