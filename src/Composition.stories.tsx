import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, LineChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const LineAndBar: Story = {
  render: () => (
    <LineChart
      compose={[BarChart]}
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: days }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Revenue', data: [320, 302, 301, 334, 390, 330, 320] },
        { type: 'line', name: 'Trend', data: [280, 310, 295, 340, 370, 345, 310], smooth: true },
      ]}
    >
      <Title title={{ text: 'Line + Bar Composition' }} />
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
};

export const DualAxis: Story = {
  render: () => (
    <LineChart
      compose={[BarChart]}
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: days }}
      yAxis={[
        { type: 'value', name: 'Volume' },
        { type: 'value', name: 'Rate (%)' },
      ]}
      series={[
        { type: 'bar', name: 'Volume', yAxisIndex: 0, data: [120, 200, 150, 80, 70, 110, 130] },
        { type: 'line', name: 'Rate', yAxisIndex: 1, data: [6.5, 8.2, 7.1, 5.3, 4.8, 6.0, 7.0], smooth: true },
      ]}
    >
      <Title title={{ text: 'Dual Y-Axis' }} />
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
};

export const StackedLineAndBar: Story = {
  render: () => (
    <LineChart
      compose={[BarChart]}
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: days }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Product A', stack: 'total', data: [120, 132, 101, 134, 90, 230, 210] },
        { type: 'bar', name: 'Product B', stack: 'total', data: [220, 182, 191, 234, 290, 330, 310] },
        { type: 'line', name: 'Total', data: [340, 314, 292, 368, 380, 560, 520], smooth: true },
      ]}
    >
      <Title title={{ text: 'Stacked Bar + Line' }} />
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
};
