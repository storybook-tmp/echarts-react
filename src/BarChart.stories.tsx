import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { BarChart, SVGRenderer, Title, Tooltip, Legend } from '@fanciers/echarts-react';

const meta: Meta = {
  component: BarChart as any,
  tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <BarChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: [120, 200, 150, 80, 70] }]}
    >
      <Title text="Weekly Sales" />
      <Tooltip />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('svg')).not.toBeNull();
    });
  },
};

export const Stacked: Story = {
  render: () => (
    <BarChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', stack: 'total', data: [320, 302, 301, 334], name: 'Product A' },
        { type: 'bar', stack: 'total', data: [120, 132, 101, 134], name: 'Product B' },
      ]}
    >
      <Title text="Quarterly Revenue" />
      <Legend />
      <Tooltip />
    </BarChart>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <BarChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'category', data: ['Brazil', 'Indonesia', 'USA', 'India', 'China'] }}
      series={[{ type: 'bar', data: [18203, 23489, 29034, 104970, 131744] }]}
    >
      <Title text="Population by Country" />
      <Tooltip />
    </BarChart>
  ),
};
