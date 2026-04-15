import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, DataZoom } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/DataZoom',
  component: DataZoom,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DataZoom>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateData = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push(Math.random() * 300);
  }
  return data;
};

export const SliderZoom: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`),
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          data: generateData(),
          type: 'line',
          smooth: true,
        },
      ]}
    >
      <DataZoom type="slider" start={0} end={30} />
    </LineChart>
  ),
};

export const InsideZoom: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`),
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          data: generateData(),
          type: 'line',
          smooth: true,
        },
      ]}
    >
      <DataZoom type="inside" start={0} end={30} />
    </LineChart>
  ),
};
