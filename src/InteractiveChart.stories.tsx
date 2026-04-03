import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, DataZoom, Toolbox, Tooltip, Legend } from '@fanciers/echarts-react';

const meta: Meta = {
  component: BarChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const salesData = [200, 310, 250, 380, 410, 520, 480, 390, 450, 370, 420, 510];

export const WithToolbox: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: months }}
      yAxis={{ type: 'value' }}
      series={{ type: 'bar', data: salesData, name: 'Sales' }}
    >
      <Toolbox
        toolbox={{
          feature: {
            saveAsImage: {},
            restore: {},
            dataView: { readOnly: false },
          },
        }}
      />
    </BarChart>
  ),
};

export const WithDataZoom: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: months }}
      yAxis={{ type: 'value' }}
      series={{ type: 'bar', data: salesData, name: 'Monthly Sales' }}
    >
      <DataZoom
        dataZoom={[
          { type: 'slider', start: 0, end: 60 },
          { type: 'inside', start: 0, end: 60 },
        ]}
      />
    </BarChart>
  ),
};

export const FullyInteractive: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 450 }}
      xAxis={{ type: 'category', data: months }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', data: salesData, name: 'This Year' },
        { type: 'bar', data: [150, 280, 220, 340, 370, 480, 440, 350, 400, 330, 380, 460], name: 'Last Year' },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{ bottom: 0 }} />
      <Toolbox toolbox={{ feature: { saveAsImage: {}, restore: {} } }} />
      <DataZoom dataZoom={[{ type: 'slider', bottom: 30 }]} />
    </BarChart>
  ),
};
