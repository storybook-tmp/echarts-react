import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridComponent, VisualMapComponent } from 'echarts/components';
import { HeatmapChart } from '@fanciers/echarts-react';

const hours = ['12a','1a','2a','3a','4a','5a','6a','7a','8a','9a','10a','11a',
  '12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p','11p'];
const days = ['Sat','Fri','Thu','Wed','Tue','Mon','Sun'];

const rawData: [number, number, number][] = [
  [0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],
  [1,0,3],[1,1,5],[1,2,1],[1,3,0],[1,4,0],[1,5,1],[1,6,0],[1,7,0],[1,8,2],[1,9,7],[1,10,15],[1,11,10],
  [2,0,1],[2,1,1],[2,2,2],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,1],[2,8,4],[2,9,8],[2,10,12],[2,11,14],
];

const data: [number, number, number][] = rawData.map(([d, h, v]) => [h, d, v]);

const meta = {
  title: 'AI Generated/Medium/HeatmapChart',
  component: HeatmapChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeatmapChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: 600, height: 350 },
    use: [GridComponent, VisualMapComponent],
    xAxis: { type: 'category', data: hours },
    yAxis: { type: 'category', data: days },
    visualMap: { min: 0, max: 15, calculable: true },
    series: [{ type: 'heatmap', data }],
  },
};

export const WithLabels: Story = {
  args: {
    style: { width: 600, height: 350 },
    use: [GridComponent, VisualMapComponent],
    xAxis: { type: 'category', data: hours },
    yAxis: { type: 'category', data: days },
    visualMap: { min: 0, max: 15, calculable: true, orient: 'horizontal', left: 'center', bottom: '5%' },
    series: [{ type: 'heatmap', data, label: { show: true } }],
  },
};
