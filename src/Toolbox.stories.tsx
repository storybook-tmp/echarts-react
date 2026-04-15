import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart, CanvasRenderer, Title, Tooltip, Toolbox, Legend } from '@fanciers/echarts-react';

const meta: Meta = {
  component: Toolbox,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSaveAndRestore: Story = {
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', name: 'Sales', data: [150, 230, 224, 218, 135, 147, 260] },
      ]}
    >
      <Title title={{ text: 'Chart with Toolbox' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Toolbox toolbox={{ feature: { saveAsImage: {}, restore: {}, dataView: {} } }} />
    </LineChart>
  ),
};

export const WithZoomAndBrush: Story = {
  render: () => (
    <LineChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', name: 'Revenue', data: [820, 932, 901, 934, 1290, 1330, 1320] },
        { type: 'line', name: 'Cost', data: [400, 450, 500, 430, 580, 600, 560] },
      ]}
    >
      <Title title={{ text: 'Toolbox with Zoom' }} />
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Toolbox toolbox={{ feature: { dataZoom: {}, magicType: { type: ['line', 'bar'] }, restore: {}, saveAsImage: {} } }} />
    </LineChart>
  ),
};
