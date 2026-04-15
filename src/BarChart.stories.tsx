import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, CanvasRenderer, Legend, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: BarChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: [120, 200, 150, 80, 70, 110, 130] }]}
    />
  ),
};

export const Horizontal: Story = {
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'category', data: ['Brazil', 'Indonesia', 'USA', 'India', 'China'] }}
      series={[{ type: 'bar', data: [18203, 23489, 29034, 104970, 131744] }]}
    />
  ),
};

export const Stacked: Story = {
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Direct', stack: 'total', data: [320, 302, 301, 334, 390, 330, 320] },
        { type: 'bar', name: 'Email', stack: 'total', data: [120, 132, 101, 134, 90, 230, 210] },
        { type: 'bar', name: 'Search', stack: 'total', data: [220, 182, 191, 234, 290, 330, 310] },
      ]}
    >
      <Title title={{ text: 'Stacked Bar Chart' }} />
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </BarChart>
  ),
};
