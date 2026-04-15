import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart } from '@fanciers/echarts-react';

const meta: Meta = {
  component: GraphChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const nodes = [
  { name: 'Alice', symbolSize: 40 },
  { name: 'Bob', symbolSize: 30 },
  { name: 'Carol', symbolSize: 30 },
  { name: 'Dave', symbolSize: 25 },
  { name: 'Eve', symbolSize: 25 },
  { name: 'Frank', symbolSize: 20 },
];

const links = [
  { source: 'Alice', target: 'Bob' },
  { source: 'Alice', target: 'Carol' },
  { source: 'Bob', target: 'Dave' },
  { source: 'Carol', target: 'Dave' },
  { source: 'Carol', target: 'Eve' },
  { source: 'Dave', target: 'Frank' },
  { source: 'Eve', target: 'Frank' },
];

export const ForceDirected: Story = {
  render: () => (
    <GraphChart
      style={{ width: '100%', height: 400 }}
      series={{
        type: 'graph',
        layout: 'force',
        data: nodes,
        links,
        label: { show: true, position: 'right' },
        force: { repulsion: 1000, edgeLength: [80, 200] },
        lineStyle: { color: '#aaa' },
      }}
    />
  ),
};

export const CircularLayout: Story = {
  render: () => (
    <GraphChart
      style={{ width: '100%', height: 400 }}
      series={{
        type: 'graph',
        layout: 'circular',
        data: nodes,
        links,
        label: { show: true, position: 'right' },
        circular: { rotateLabel: true },
        lineStyle: { color: '#aaa', curveness: 0.3 },
      }}
    />
  ),
};

export const WithCategories: Story = {
  render: () => (
    <GraphChart
      style={{ width: '100%', height: 400 }}
      series={{
        type: 'graph',
        layout: 'force',
        categories: [{ name: 'Team A' }, { name: 'Team B' }],
        data: [
          { name: 'Alice', symbolSize: 40, category: 0 },
          { name: 'Bob', symbolSize: 30, category: 0 },
          { name: 'Carol', symbolSize: 30, category: 1 },
          { name: 'Dave', symbolSize: 25, category: 1 },
          { name: 'Eve', symbolSize: 25, category: 0 },
        ],
        links: [
          { source: 'Alice', target: 'Bob' },
          { source: 'Alice', target: 'Carol' },
          { source: 'Bob', target: 'Dave' },
          { source: 'Carol', target: 'Eve' },
        ],
        label: { show: true, position: 'right' },
        force: { repulsion: 800, edgeLength: [60, 150] },
        lineStyle: { color: '#aaa' },
      }}
    />
  ),
};
