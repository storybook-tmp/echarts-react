import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/GraphChart',
  component: GraphChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GraphChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NetworkDiagram: Story = {
  render: () => (
    <div style={{ width: 500, height: 400 }}>
      <GraphChart
        series={[
          {
            type: 'graph',
            layout: 'force',
            data: [
              { name: 'Node 1', id: '1' },
              { name: 'Node 2', id: '2' },
              { name: 'Node 3', id: '3' },
              { name: 'Node 4', id: '4' },
              { name: 'Node 5', id: '5' },
            ],
            links: [
              { source: '1', target: '2' },
              { source: '1', target: '3' },
              { source: '2', target: '4' },
              { source: '3', target: '4' },
              { source: '4', target: '5' },
            ],
            roam: true,
            label: { show: true },
            itemStyle: {
              borderColor: '#3b82f6',
              borderWidth: 2,
              color: '#93c5fd',
            },
            lineStyle: {
              color: '#cbd5e1',
            },
          },
        ]}
        use={SVGRenderer}
      />
    </div>
  ),
};

export const CircularLayout: Story = {
  render: () => (
    <div style={{ width: 500, height: 400 }}>
      <GraphChart
        series={[
          {
            type: 'graph',
            layout: 'circular',
            data: [
              { name: 'A', id: 'a' },
              { name: 'B', id: 'b' },
              { name: 'C', id: 'c' },
              { name: 'D', id: 'd' },
              { name: 'E', id: 'e' },
              { name: 'F', id: 'f' },
            ],
            links: [
              { source: 'a', target: 'b' },
              { source: 'b', target: 'c' },
              { source: 'c', target: 'd' },
              { source: 'd', target: 'e' },
              { source: 'e', target: 'f' },
              { source: 'f', target: 'a' },
            ],
            roam: true,
            label: { show: true },
            itemStyle: {
              borderColor: '#10b981',
              borderWidth: 2,
              color: '#a7f3d0',
            },
            lineStyle: {
              color: '#cbd5e1',
            },
          },
        ]}
        use={SVGRenderer}
      />
    </div>
  ),
};
