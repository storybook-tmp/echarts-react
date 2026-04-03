import type { Meta, StoryObj } from '@storybook/react-vite';

import { CanvasRenderer, GraphChart, Tooltip } from './index.js';

const nodeData = [
  { name: 'API', value: 40, symbolSize: 52, category: 0 },
  { name: 'Web', value: 32, symbolSize: 44, category: 0 },
  { name: 'Search', value: 24, symbolSize: 36, category: 1 },
  { name: 'Billing', value: 28, symbolSize: 38, category: 1 },
  { name: 'Auth', value: 18, symbolSize: 28, category: 2 },
  { name: 'Jobs', value: 20, symbolSize: 30, category: 2 },
];

const links = [
  { source: 'API', target: 'Web' },
  { source: 'API', target: 'Search' },
  { source: 'API', target: 'Billing' },
  { source: 'Web', target: 'Auth' },
  { source: 'Billing', target: 'Auth' },
  { source: 'Search', target: 'Jobs' },
];

const meta = {
  title: 'AI Generated/Complex/GraphChart',
  component: GraphChart,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <GraphChart {...args}>
      <Tooltip trigger="item" />
    </GraphChart>
  ),
} satisfies Meta<typeof GraphChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForceDirected: Story = {
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 420 },
    series: {
      type: 'graph',
      layout: 'force',
      roam: true,
      label: {
        show: true,
      },
      force: {
        repulsion: 180,
        edgeLength: 90,
      },
      data: nodeData,
      links,
      categories: [{ name: 'Core' }, { name: 'Products' }, { name: 'Platform' }],
    },
  },
};

export const CircularMap: Story = {
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 420 },
    series: {
      type: 'graph',
      layout: 'circular',
      roam: true,
      circular: {
        rotateLabel: true,
      },
      lineStyle: {
        curveness: 0.3,
      },
      label: {
        show: true,
      },
      data: nodeData,
      links,
    },
  },
};
