import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart } from './charts';

const meta = {
  title: 'AI Generated/Complex/GraphChart',
  component: GraphChart,
} satisfies Meta<typeof GraphChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForceLayout: Story = {
  args: {
    style: { width: 600, height: 500 },
    series: [
      {
        type: 'graph',
        layout: 'force',
        roam: true,
        label: { show: true },
        force: { repulsion: 200, edgeLength: 100 },
        data: [
          { name: 'Node 1', symbolSize: 50 },
          { name: 'Node 2', symbolSize: 30 },
          { name: 'Node 3', symbolSize: 40 },
          { name: 'Node 4', symbolSize: 25 },
          { name: 'Node 5', symbolSize: 35 },
          { name: 'Node 6', symbolSize: 20 },
        ],
        links: [
          { source: 'Node 1', target: 'Node 2' },
          { source: 'Node 1', target: 'Node 3' },
          { source: 'Node 2', target: 'Node 4' },
          { source: 'Node 3', target: 'Node 5' },
          { source: 'Node 4', target: 'Node 6' },
          { source: 'Node 5', target: 'Node 6' },
        ],
      },
    ],
  },
};

export const CircularLayout: Story = {
  args: {
    style: { width: 600, height: 500 },
    series: [
      {
        type: 'graph',
        layout: 'circular',
        roam: true,
        label: { show: true, position: 'right' },
        circular: { rotateLabel: true },
        data: [
          { name: 'Alice', symbolSize: 40 },
          { name: 'Bob', symbolSize: 35 },
          { name: 'Charlie', symbolSize: 30 },
          { name: 'Diana', symbolSize: 45 },
          { name: 'Eve', symbolSize: 25 },
          { name: 'Frank', symbolSize: 38 },
          { name: 'Grace', symbolSize: 28 },
          { name: 'Heidi', symbolSize: 32 },
        ],
        links: [
          { source: 'Alice', target: 'Bob' },
          { source: 'Alice', target: 'Charlie' },
          { source: 'Bob', target: 'Diana' },
          { source: 'Charlie', target: 'Eve' },
          { source: 'Diana', target: 'Frank' },
          { source: 'Eve', target: 'Grace' },
          { source: 'Frank', target: 'Heidi' },
          { source: 'Grace', target: 'Alice' },
          { source: 'Heidi', target: 'Bob' },
        ],
      },
    ],
  },
};
