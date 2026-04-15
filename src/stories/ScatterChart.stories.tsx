import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterChart } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/ScatterChart',
  component: ScatterChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: 450, height: 350 },
    xAxis: { type: 'value', name: 'Height (cm)' },
    yAxis: { type: 'value', name: 'Weight (kg)' },
    series: [
      {
        type: 'scatter',
        data: [
          [170, 65], [175, 72], [160, 55], [180, 80], [165, 60],
          [172, 68], [158, 50], [185, 90], [168, 62], [177, 75],
        ],
      },
    ],
  },
};

export const MultiSeries: Story = {
  args: {
    style: { width: 450, height: 350 },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'scatter',
        name: 'Group A',
        data: [[10, 8], [20, 15], [30, 22], [40, 35], [50, 40]],
      },
      {
        type: 'scatter',
        name: 'Group B',
        data: [[15, 25], [25, 30], [35, 28], [45, 20], [55, 15]],
      },
    ],
  },
};
