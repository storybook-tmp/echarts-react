import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, CanvasRenderer, DataZoom, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: DataZoom,
};

export default meta;
type Story = StoryObj<typeof meta>;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const salesData = [120, 200, 150, 80, 70, 110, 130, 160, 90, 210, 180, 140];

export const SliderZoom: Story = {
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: months }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: salesData }]}
    >
      <Title title={{ text: 'Monthly Sales with DataZoom' }} />
      <Tooltip tooltip={{}} />
      <DataZoom dataZoom={[{ type: 'slider', start: 0, end: 100 }]} />
    </BarChart>
  ),
};

export const InsideZoom: Story = {
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: months }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: salesData }]}
    >
      <Title title={{ text: 'Drag to Zoom' }} />
      <Tooltip tooltip={{}} />
      <DataZoom dataZoom={[{ type: 'inside', start: 0, end: 100 }]} />
    </BarChart>
  ),
};

export const BothZoom: Story = {
  render: () => (
    <BarChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: months }}
      yAxis={{ type: 'value' }}
      series={[{ type: 'bar', data: salesData }]}
    >
      <Title title={{ text: 'Slider + Inside Zoom' }} />
      <Tooltip tooltip={{}} />
      <DataZoom dataZoom={[
        { type: 'slider', start: 0, end: 100 },
        { type: 'inside', start: 0, end: 100 },
      ]} />
    </BarChart>
  ),
};
