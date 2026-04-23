import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { GraphChart } from './charts.js';
import { Title, Tooltip } from './components.js';

const meta = {
  component: GraphChart,
} satisfies Meta<typeof GraphChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const nodes = [
  { name: 'Node 1', id: '0' },
  { name: 'Node 2', id: '1' },
  { name: 'Node 3', id: '2' },
  { name: 'Node 4', id: '3' },
  { name: 'Node 5', id: '4' },
];

const links = [
  { source: '0', target: '1' },
  { source: '0', target: '2' },
  { source: '1', target: '3' },
  { source: '2', target: '4' },
  { source: '3', target: '4' },
];

export const Default: Story = {
  args: {} as never,
  render: () => (
    <GraphChart
      style={{ width: '100%', height: '100%' }}
      series={[
        {
          type: 'graph',
          nodes: nodes,
          links: links,
          layout: 'force',
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
          },
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const WithTitle: Story = {
  args: {} as never,
  render: () => (
    <GraphChart
      style={{ width: '100%', height: '100%' }}
      series={[
        {
          type: 'graph',
          nodes: nodes,
          links: links,
          layout: 'force',
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
          },
        },
      ]}
    >
      <Title text="Network Graph" subtext="Nodes and connections" />
      <Tooltip formatter="{b}" />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const Circular: Story = {
  args: {} as never,
  render: () => (
    <GraphChart
      style={{ width: '100%', height: '100%' }}
      series={[
        {
          type: 'graph',
          nodes: nodes,
          links: links,
          layout: 'circular',
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: '#aaa',
          },
          symbolSize: 30,
        },
      ]}
    >
      <Title text="Circular Layout" />
    </GraphChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};
