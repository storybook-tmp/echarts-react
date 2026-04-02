import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart, DataZoom, Legend, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Complex/LineChartAdvanced',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiSeriesWithLegend: Story = {
  render: () => (
    <div style={{ width: 600, height: 400 }}>
      <LineChart
        xAxis={{
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        }}
        yAxis={{ type: 'value' }}
        grid={{ left: 50, right: 20, top: 30, bottom: 60, containLabel: true }}
        series={[
          {
            name: 'CPU Usage',
            data: [45, 52, 38, 65, 52, 48, 62, 71],
            type: 'line',
            smooth: true,
            itemStyle: { color: '#3b82f6' },
          },
          {
            name: 'Memory Usage',
            data: [65, 66, 68, 70, 72, 75, 78, 80],
            type: 'line',
            smooth: true,
            itemStyle: { color: '#ef4444' },
          },
          {
            name: 'Disk Usage',
            data: [28, 29, 30, 35, 38, 40, 42, 45],
            type: 'line',
            smooth: true,
            itemStyle: { color: '#10b981' },
          },
        ]}
        use={SVGRenderer}
      >
        <Legend />
      </LineChart>
    </div>
  ),
};

export const WithDataZoom: Story = {
  render: () => (
    <div style={{ width: 600, height: 450 }}>
      <LineChart
        xAxis={{
          type: 'category',
          data: Array.from({ length: 50 }, (_, i) => `Time ${i + 1}`),
          gridIndex: 0,
        }}
        yAxis={{ type: 'value', gridIndex: 0 }}
        grid={{ left: 50, right: 20, top: 30, bottom: 100, containLabel: true }}
        series={[
          {
            name: 'Temperature',
            data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 30) + 10),
            type: 'line',
            smooth: true,
            itemStyle: { color: '#f59e0b' },
          },
        ]}
        use={SVGRenderer}
      >
        <Legend />
        <DataZoom type="slider" />
      </LineChart>
    </div>
  ),
};
