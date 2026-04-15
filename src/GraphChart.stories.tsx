import type { Meta, StoryObj } from '@storybook/react-vite';
import { CanvasRenderer, GraphChart } from './index.js';

const meta = {
  title: 'AI Generated/Complex/GraphChart',
  component: GraphChart,
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 360 },
  },
} satisfies Meta<typeof GraphChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForceDirected: Story = {
  args: {
    series: [
      {
        type: 'graph',
        layout: 'force',
        roam: true,
        force: {
          repulsion: 160,
          edgeLength: 100,
        },
        data: [
          { name: 'Gateway', value: 18, symbolSize: 56 },
          { name: 'API', value: 12, symbolSize: 42 },
          { name: 'Search', value: 9, symbolSize: 34 },
          { name: 'Billing', value: 7, symbolSize: 28 },
          { name: 'Auth', value: 10, symbolSize: 32 },
        ],
        links: [
          { source: 'Gateway', target: 'API' },
          { source: 'Gateway', target: 'Search' },
          { source: 'Gateway', target: 'Billing' },
          { source: 'API', target: 'Auth' },
        ],
      },
    ],
  },
};

export const CircularLayout: Story = {
  args: {
    series: [
      {
        type: 'graph',
        layout: 'circular',
        roam: true,
        lineStyle: {
          curveness: 0.2,
        },
        label: {
          show: true,
        },
        data: [
          { name: 'Design', symbolSize: 36 },
          { name: 'Docs', symbolSize: 30 },
          { name: 'Build', symbolSize: 44 },
          { name: 'Release', symbolSize: 26 },
        ],
        links: [
          { source: 'Design', target: 'Docs' },
          { source: 'Docs', target: 'Build' },
          { source: 'Build', target: 'Release' },
          { source: 'Release', target: 'Design' },
        ],
      },
    ],
  },
};
