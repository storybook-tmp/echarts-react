import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { GraphChart } from '@fanciers/echarts-react';
import type { GraphSeriesOption } from 'echarts';

type GraphNode = NonNullable<NonNullable<GraphSeriesOption['data']>[number]>;
type GraphLink = NonNullable<NonNullable<GraphSeriesOption['links']>[number]>;

const nodes: GraphNode[] = [
  { id: '0', name: 'Node A', symbolSize: 40, category: 0 },
  { id: '1', name: 'Node B', symbolSize: 30, category: 0 },
  { id: '2', name: 'Node C', symbolSize: 25, category: 1 },
  { id: '3', name: 'Node D', symbolSize: 20, category: 1 },
  { id: '4', name: 'Node E', symbolSize: 15, category: 2 },
];

const links: GraphLink[] = [
  { source: '0', target: '1' },
  { source: '0', target: '2' },
  { source: '1', target: '3' },
  { source: '2', target: '4' },
  { source: '3', target: '4' },
];

function GraphChartStory(props: { style?: React.CSSProperties; layout?: 'force' | 'circular' }) {
  return (
    <GraphChart
      style={props.style}
      series={[
        {
          type: 'graph',
          layout: props.layout ?? 'force',
          data: nodes,
          links,
          roam: true,
          label: { show: true, position: 'right' },
          force: { repulsion: 100 },
          categories: [{ name: 'Type A' }, { name: 'Type B' }, { name: 'Type C' }],
        },
      ]}
    />
  );
}

const meta = {
  title: 'AI Generated/Medium/GraphChart',
  component: GraphChartStory,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GraphChartStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Force: Story = {
  args: {
    style: { width: 500, height: 400 },
    layout: 'force',
  },
};

export const Circular: Story = {
  args: {
    style: { width: 500, height: 400 },
    layout: 'circular',
  },
};
