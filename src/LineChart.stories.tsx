import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', data: [150, 230, 224, 218, 135, 147, 260] }]}
    />
  ),
};

export const Area: Story = {
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'line', areaStyle: {}, data: [820, 932, 901, 934, 1290, 1330, 1320] }]}
    >
      <Title title={{ text: 'Area Chart' }} />
    </LineChart>
  ),
};

export const Smooth: Story = {
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', smooth: true, name: 'Series A', data: [120, 200, 150, 80, 70, 110, 130] },
        { type: 'line', smooth: true, name: 'Series B', data: [60, 140, 190, 120, 170, 80, 100] },
      ]}
    >
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
};
