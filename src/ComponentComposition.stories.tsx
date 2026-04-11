import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { BarChart, LineChart } from './charts.js';
import { DataZoom, Legend, MarkLine, MarkPoint, Title, Tooltip } from './components.js';

// Using BarChart as the meta component but we'll use both BarChart and LineChart in stories
const meta = {
  component: BarChart,
  tags: ['!autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChartWithAllComponents: Story = {
  args: {} as never,
  render: () => (
    <BarChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          name: 'Sales',
        },
      ]}
    >
      <Title text="Monthly Sales" subtext="Q1 2024" />
      <Tooltip trigger="axis" />
      <Legend />
      <DataZoom type="slider" xAxisIndex={0} />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const LineChartWithMarkings: Story = {
  args: {} as never,
  render: () => (
    <LineChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] } as any}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          smooth: true,
          name: 'Value',
        },
      ] as any}
    >
      <Title text="Trend Analysis" subtext="Weekly trend with annotations" />
      <Tooltip />
      <Legend />
      <MarkPoint
        data={[
          { type: 'max', name: 'Max Value' },
          { type: 'min', name: 'Min Value' },
        ]}
      />
      <MarkLine
        data={[
          { type: 'average', name: 'Average' },
        ]}
      />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const ComposedLineBar: Story = {
  args: {} as never,
  render: () => (
    <BarChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          name: 'Bar Series',
        },
        {
          data: [100, 180, 130, 100, 80, 90, 110],
          type: 'line',
          smooth: true,
          name: 'Line Series',
        } as any,
      ] as any}
    >
      <Title text="Mixed Chart Type" subtext="Combining bars and lines" />
      <Tooltip trigger="axis" axisPointer={{ type: 'cross' }} />
      <Legend />
      <DataZoom type="slider" xAxisIndex={0} />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const MultiAxisChart: Story = {
  args: {} as never,
  render: () => (
    <BarChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={[
        { type: 'value', position: 'left' },
        { type: 'value', position: 'right' },
      ] as any}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          name: 'Revenue',
          yAxisIndex: 0,
        },
        {
          data: [100, 180, 130, 100, 80, 90, 110],
          type: 'line',
          smooth: true,
          name: 'Cost',
          yAxisIndex: 1,
        } as any,
      ] as any}
    >
      <Title text="Revenue vs Cost" subtext="Dual axis comparison" />
      <Tooltip trigger="axis" />
      <Legend />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};
