import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart } from './charts';

const meta = {
  title: 'AI Generated/Complex/GraphChart',
  component: GraphChart,
  decorators: [
    (Story) => (
      <div style={{ width: 600, height: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GraphChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: [
          { name: 'Node 1', symbolSize: 50 },
          { name: 'Node 2', symbolSize: 30 },
          { name: 'Node 3', symbolSize: 40 },
          { name: 'Node 4', symbolSize: 25 },
          { name: 'Node 5', symbolSize: 35 },
        ],
        links: [
          { source: 'Node 1', target: 'Node 2' },
          { source: 'Node 1', target: 'Node 3' },
          { source: 'Node 2', target: 'Node 4' },
          { source: 'Node 3', target: 'Node 5' },
          { source: 'Node 4', target: 'Node 5' },
        ],
        force: { repulsion: 200 },
        label: { show: true },
      },
    ],
  },
};

export const Circular: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    series: [
      {
        type: 'graph',
        layout: 'circular',
        data: [
          { name: 'A', symbolSize: 40 },
          { name: 'B', symbolSize: 40 },
          { name: 'C', symbolSize: 40 },
          { name: 'D', symbolSize: 40 },
          { name: 'E', symbolSize: 40 },
          { name: 'F', symbolSize: 40 },
        ],
        links: [
          { source: 'A', target: 'B' },
          { source: 'B', target: 'C' },
          { source: 'C', target: 'D' },
          { source: 'D', target: 'E' },
          { source: 'E', target: 'F' },
          { source: 'F', target: 'A' },
        ],
        label: { show: true },
      },
    ],
  },
};
