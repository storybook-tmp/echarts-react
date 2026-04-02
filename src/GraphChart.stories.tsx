import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart, Tooltip, Legend } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/GraphChart',
  component: GraphChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof GraphChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForceLayout: Story = {
  render: () => (
    <GraphChart
      style={{ width: 600, height: 500 }}
      series={[
        {
          type: 'graph',
          layout: 'force',
          roam: true,
          label: { show: true },
          force: { repulsion: 100 },
          nodes: [
            { id: '0', name: 'Alpha', symbolSize: 50, value: 10 },
            { id: '1', name: 'Beta', symbolSize: 35, value: 8 },
            { id: '2', name: 'Gamma', symbolSize: 25, value: 5 },
            { id: '3', name: 'Delta', symbolSize: 40, value: 12 },
            { id: '4', name: 'Epsilon', symbolSize: 20, value: 4 },
            { id: '5', name: 'Zeta', symbolSize: 30, value: 7 },
          ],
          links: [
            { source: '0', target: '1' },
            { source: '0', target: '2' },
            { source: '0', target: '3' },
            { source: '1', target: '4' },
            { source: '2', target: '5' },
            { source: '3', target: '5' },
          ],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </GraphChart>
  ),
};

export const CircularLayout: Story = {
  render: () => (
    <GraphChart
      style={{ width: 600, height: 500 }}
      series={[
        {
          type: 'graph',
          layout: 'circular',
          circular: { rotateLabel: true },
          roam: true,
          label: { show: true, position: 'right', formatter: '{b}' },
          lineStyle: { color: 'source', curveness: 0.3 },
          nodes: [
            { id: '0', name: 'Node A', symbolSize: 40, category: 0 },
            { id: '1', name: 'Node B', symbolSize: 30, category: 0 },
            { id: '2', name: 'Node C', symbolSize: 35, category: 1 },
            { id: '3', name: 'Node D', symbolSize: 25, category: 1 },
            { id: '4', name: 'Node E', symbolSize: 20, category: 2 },
            { id: '5', name: 'Node F', symbolSize: 28, category: 2 },
          ],
          links: [
            { source: '0', target: '1' },
            { source: '0', target: '2' },
            { source: '1', target: '3' },
            { source: '2', target: '4' },
            { source: '3', target: '5' },
            { source: '4', target: '0' },
          ],
          categories: [{ name: 'Type A' }, { name: 'Type B' }, { name: 'Type C' }],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
      <Legend legend={{ data: ['Type A', 'Type B', 'Type C'] }} />
    </GraphChart>
  ),
};
