import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { GraphChart } from './charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Tooltip } from './components';

const meta: Meta<any> = {
  component: GraphChart,
  tags: ['ai-generated'],
  args: {
    use: [CanvasRenderer],
    style: { width: 600, height: 400 },
    series: [
      {
        type: 'graph' as const,
        layout: 'force' as const,
        data: [
          { name: 'Node 1', symbolSize: 30 },
          { name: 'Node 2', symbolSize: 20 },
          { name: 'Node 3', symbolSize: 25 },
          { name: 'Node 4', symbolSize: 15 },
        ],
        links: [
          { source: 'Node 1', target: 'Node 2' },
          { source: 'Node 1', target: 'Node 3' },
          { source: 'Node 2', target: 'Node 4' },
        ],
        force: { repulsion: 200 },
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

export const WithTooltip: Story = {
  render: (args) => (
    <GraphChart {...args}>
      <Tooltip tooltip={{ trigger: 'item' }} />
    </GraphChart>
  ),
};

export const Circular: Story = {
  args: {
    series: [
      {
        type: 'graph' as const,
        layout: 'circular' as const,
        data: [
          { name: 'A', symbolSize: 30 },
          { name: 'B', symbolSize: 30 },
          { name: 'C', symbolSize: 30 },
          { name: 'D', symbolSize: 30 },
        ],
        links: [
          { source: 'A', target: 'B' },
          { source: 'B', target: 'C' },
          { source: 'C', target: 'D' },
          { source: 'D', target: 'A' },
        ],
      },
    ],
  },
};
