import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart, Title, Legend, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTitleAndLegend: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', data: [150, 230, 224, 218, 135, 147, 260], name: 'Email' },
        { type: 'line', data: [80, 120, 160, 200, 180, 140, 100], name: 'Social' },
      ]}
    >
      <Title title={{ text: 'Weekly Traffic', subtext: 'By channel' }} />
      <Legend legend={{ data: ['Email', 'Social'], bottom: 0 }} />
    </LineChart>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', data: [820, 932, 901, 934, 1290, 1330], name: 'Visits' },
        { type: 'line', data: [200, 310, 250, 380, 410, 520], name: 'Conversions' },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
};

export const FullyDecorated: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 450 }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', data: [500, 800, 1200, 950], name: '2023', smooth: true },
        { type: 'line', data: [600, 900, 1100, 1300], name: '2024', smooth: true },
      ]}
    >
      <Title title={{ text: 'Quarterly Revenue', subtext: 'Year-over-year comparison', left: 'center' }} />
      <Legend legend={{ data: ['2023', '2024'], bottom: 0 }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
};
