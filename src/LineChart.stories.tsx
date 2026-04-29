import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { LineChart, SVGRenderer, Title, Tooltip, Legend } from '@fanciers/echarts-react';

const meta: Meta = {
  component: LineChart as any,
  tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <LineChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', data: [820, 932, 901, 934, 1290, 1330] }]}
    >
      <Title text="Monthly Trend" />
      <Tooltip />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('svg')).not.toBeNull();
    });
  },
};

export const Area: Story = {
  render: () => (
    <LineChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', data: [150, 230, 224, 218, 135, 147, 260], areaStyle: {} }]}
    >
      <Title text="Weekly Traffic" />
      <Tooltip />
    </LineChart>
  ),
};

export const MultiSeries: Story = {
  render: () => (
    <LineChart
      use={[SVGRenderer]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', data: [120, 132, 101, 134], name: 'Revenue' },
        { type: 'line', data: [220, 182, 191, 234], name: 'Profit' },
      ]}
    >
      <Title text="Financial Overview" />
      <Legend />
      <Tooltip />
    </LineChart>
  ),
};
