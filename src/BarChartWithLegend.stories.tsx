import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BarChart } from './charts';
import { Legend, Title } from './components';

const meta = {
  title: 'AI Generated/Complex/BarChartWithLegend',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLegendAndTitle: Story = {
  render: (args) => (
    <BarChart {...args}>
      <Title text="Sales Data by Quarter" />
      <Legend />
    </BarChart>
  ),
  args: {
    style: { width: '700px', height: '450px' },
    xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
    yAxis: { type: 'value' },
    series: [
      { data: [320, 302, 301, 334], type: 'bar', name: 'Sales' },
      { data: [220, 182, 191, 234], type: 'bar', name: 'Revenue' },
    ],
  },
};

export const ComplexMultiSeries: Story = {
  render: (args) => (
    <BarChart {...args}>
      <Title text="Annual Performance Report" subtext="Year 2024" />
      <Legend orient="vertical" right={10} />
    </BarChart>
  ),
  args: {
    style: { width: '800px', height: '500px' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' },
    series: [
      { data: [120, 150, 130, 180, 170, 200], type: 'bar', name: 'Product A' },
      { data: [90, 110, 120, 140, 160, 180], type: 'bar', name: 'Product B' },
      { data: [70, 80, 100, 120, 140, 160], type: 'bar', name: 'Product C' },
    ],
  },
};
