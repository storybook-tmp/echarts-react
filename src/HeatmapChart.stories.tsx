import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridComponent, VisualMapComponent } from 'echarts/components';
import { HeatmapChart } from './charts';

const meta = {
  title: 'AI Generated/Simple/HeatmapChart',
  component: HeatmapChart,
  decorators: [
    (Story) => (
      <div style={{ width: 600, height: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeatmapChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const useExtras = [GridComponent, VisualMapComponent] as const;

const hours = ['12a', '1a', '2a', '3a', '4a', '5a'];
const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

const data = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 3], [0, 5, 2],
  [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 2], [1, 4, 0], [1, 5, 4],
  [2, 0, 1], [2, 1, 3], [2, 2, 4], [2, 3, 0], [2, 4, 2], [2, 5, 1],
  [3, 0, 0], [3, 1, 2], [3, 2, 1], [3, 3, 9], [3, 4, 0], [3, 5, 0],
  [4, 0, 3], [4, 1, 0], [4, 2, 5], [4, 3, 0], [4, 4, 1], [4, 5, 2],
  [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 4], [5, 4, 8], [5, 5, 2],
  [6, 0, 1], [6, 1, 0], [6, 2, 3], [6, 3, 0], [6, 4, 2], [6, 5, 1],
];

export const Basic: Story = {
  args: {
    use: [...useExtras],
    style: { width: '100%', height: '100%' },
    xAxis: { type: 'category', data: hours },
    yAxis: { type: 'category', data: days },
    visualMap: { min: 0, max: 10, calculable: true },
    series: [{ type: 'heatmap', data, label: { show: true } }],
  },
};

export const WithoutLabels: Story = {
  args: {
    use: [...useExtras],
    style: { width: '100%', height: '100%' },
    xAxis: { type: 'category', data: hours },
    yAxis: { type: 'category', data: days },
    visualMap: { min: 0, max: 10, calculable: true },
    series: [{ type: 'heatmap', data }],
  },
};
