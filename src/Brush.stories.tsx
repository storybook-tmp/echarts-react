import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, Brush } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/Brush',
  component: Brush,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Brush>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateData = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push(Math.sin(i / 10) * 100 + 100);
  }
  return data;
};

export const Default: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '600px' }}
      xAxis={[
        {
          type: 'category',
          data: Array.from({ length: 100 }, (_, i) => `Day ${i + 1}`),
          gridIndex: 0,
        },
        {
          type: 'category',
          data: Array.from({ length: 100 }, (_, i) => `Day ${i + 1}`),
          gridIndex: 1,
        },
      ]}
      yAxis={[
        {
          type: 'value',
          gridIndex: 0,
        },
        {
          type: 'value',
          gridIndex: 1,
        },
      ]}
      grid={[{ left: 60, right: 50, height: '60%' }, { left: 60, right: 50, height: '25%' }]}
      series={[
        {
          data: generateData(),
          type: 'line',
          smooth: true,
          xAxisIndex: 0,
          yAxisIndex: 0,
        },
        {
          data: generateData(),
          type: 'line',
          smooth: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
        },
      ]}
    >
      <Brush xAxisIndex={1} yAxisIndex={1} />
    </LineChart>
  ),
};

export const FixedBrush: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '600px' }}
      xAxis={[
        {
          type: 'category',
          data: Array.from({ length: 100 }, (_, i) => `Day ${i + 1}`),
          gridIndex: 0,
        },
        {
          type: 'category',
          data: Array.from({ length: 100 }, (_, i) => `Day ${i + 1}`),
          gridIndex: 1,
        },
      ]}
      yAxis={[
        {
          type: 'value',
          gridIndex: 0,
        },
        {
          type: 'value',
          gridIndex: 1,
        },
      ]}
      grid={[{ left: 60, right: 50, height: '60%' }, { left: 60, right: 50, height: '25%' }]}
      series={[
        {
          data: generateData(),
          type: 'line',
          smooth: true,
          xAxisIndex: 0,
          yAxisIndex: 0,
        },
        {
          data: generateData(),
          type: 'line',
          smooth: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
        },
      ]}
    >
      <Brush xAxisIndex={1} yAxisIndex={1} startValue={20} endValue={30} />
    </LineChart>
  ),
};
