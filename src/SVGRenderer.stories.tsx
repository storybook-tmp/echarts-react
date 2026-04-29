import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { BarChart } from './charts';
import { SVGRenderer } from 'echarts/renderers';
import { Title } from './components';

const meta: Meta<any> = {
  component: BarChart,
  tags: ['ai-generated'],
  args: {
    use: [SVGRenderer],
    style: { width: 600, height: 400 },
    xAxis: { type: 'category' as const, data: ['A', 'B', 'C', 'D'] },
    yAxis: { type: 'value' as const },
    series: [{ type: 'bar' as const, data: [50, 80, 30, 60] }],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    // SVGRenderer uses SVG instead of Canvas
    const svg = canvasElement.querySelector('svg');
    await expect(svg).not.toBeNull();
  },
};

export const WithTitle: Story = {
  render: (args) => (
    <BarChart {...args}>
      <Title title={{ text: 'SVG Rendered Chart' }} />
    </BarChart>
  ),
};
