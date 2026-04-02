import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { GraphChart } from './charts';
import { Title, Legend } from './components';

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

export const SimpleNetwork: Story = {
  render: (args) => (
    <GraphChart {...args}>
      <Title text="Network Graph" />
      <Legend />
    </GraphChart>
  ),
  args: {
    style: { width: '700px', height: '500px' },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: [
          { name: 'Node A' },
          { name: 'Node B' },
          { name: 'Node C' },
          { name: 'Node D' },
          { name: 'Node E' },
        ],
        links: [
          { source: 0, target: 1 },
          { source: 0, target: 2 },
          { source: 1, target: 3 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
        ],
        roam: true,
        label: { show: true },
        emphasis: {
          focus: 'adjacency',
        },
      },
    ],
  },
};

export const ComplexNetwork: Story = {
  render: (args) => (
    <GraphChart {...args}>
      <Title text="Complex Network Topology" subtext="Interactive visualization" />
      <Legend orient="vertical" left="left" />
    </GraphChart>
  ),
  args: {
    style: { width: '800px', height: '600px' },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: [
          { name: 'Server A', category: 0 },
          { name: 'Server B', category: 0 },
          { name: 'Client 1', category: 1 },
          { name: 'Client 2', category: 1 },
          { name: 'Client 3', category: 1 },
          { name: 'Database', category: 2 },
        ],
        links: [
          { source: 0, target: 2 },
          { source: 0, target: 3 },
          { source: 1, target: 2 },
          { source: 1, target: 4 },
          { source: 0, target: 5 },
          { source: 1, target: 5 },
        ],
        categories: [
          { name: 'Servers' },
          { name: 'Clients' },
          { name: 'Database' },
        ],
        roam: true,
        label: { show: true },
        emphasis: {
          focus: 'adjacency',
        },
      },
    ],
  },
};
