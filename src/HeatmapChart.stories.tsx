import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { HeatmapChart, SVGRenderer, Title, Tooltip } from '@fanciers/echarts-react';
import { GridComponent, VisualMapComponent } from 'echarts/components';

const meta: Meta = {
  component: HeatmapChart as any,
  tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const hours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

const heatmapData = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 3], [0, 4, 7],
  [1, 0, 2], [1, 1, 6], [1, 2, 4], [1, 3, 8], [1, 4, 1],
  [2, 0, 1], [2, 1, 9], [2, 2, 3], [2, 3, 5], [2, 4, 2],
  [3, 0, 7], [3, 1, 3], [3, 2, 6], [3, 3, 2], [3, 4, 4],
  [4, 0, 3], [4, 1, 4], [4, 2, 8], [4, 3, 1], [4, 4, 6],
  [5, 0, 6], [5, 1, 2], [5, 2, 5], [5, 3, 9], [5, 4, 3],
  [6, 0, 4], [6, 1, 7], [6, 2, 1], [6, 3, 6], [6, 4, 8],
  [7, 0, 8], [7, 1, 5], [7, 2, 7], [7, 3, 4], [7, 4, 5],
  [8, 0, 9], [8, 1, 8], [8, 2, 2], [8, 3, 7], [8, 4, 9],
];

export const Basic: Story = {
  render: () => (
    <HeatmapChart
      use={[SVGRenderer, GridComponent, VisualMapComponent]}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'category', data: days }}
      yAxis={{ type: 'category', data: hours }}
      visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: '0' }}
      series={[
        {
          type: 'heatmap',
          data: heatmapData,
          label: { show: true },
        },
      ]}
    >
      <Title text="Office Activity" />
      <Tooltip />
    </HeatmapChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('svg')).not.toBeNull();
    });
  },
};
