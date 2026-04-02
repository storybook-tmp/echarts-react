import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, DataZoom } from './index.js';

// Ensure renderer is loaded
void CanvasRenderer;

const meta = {
  title: 'AI Generated/Medium/DataZoom',
  component: DataZoom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataZoom>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateData = () => {
  const dates = [];
  const values = [];
  for (let i = 0; i < 30; i++) {
    dates.push(`Day ${i + 1}`);
    values.push(Math.floor(Math.random() * 300) + 50);
  }
  return { dates, values };
};

export const Default: Story = {
  render: () => {
    const { dates, values } = generateData();
    return (
      <BarChart
        style={{ width: '100%', height: 400 }}
        xAxis={{ type: 'category', data: dates }}
        yAxis={{ type: 'value' }}
        series={[{ data: values, type: 'bar' }]}
      >
        <DataZoom start={0} end={50} />
      </BarChart>
    );
  },
};

export const VerticalDataZoom: Story = {
  render: () => {
    const { dates, values } = generateData();
    return (
      <BarChart
        style={{ width: '100%', height: 400 }}
        xAxis={{ type: 'category', data: dates }}
        yAxis={{ type: 'value' }}
        series={[{ data: values, type: 'bar' }]}
      >
        <DataZoom type="inside" />
      </BarChart>
    );
  },
};
