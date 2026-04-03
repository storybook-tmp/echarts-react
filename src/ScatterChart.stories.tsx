import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterChart, Tooltip, Legend } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/ScatterChart',
  component: ScatterChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <ScatterChart
      style={{ width: 500, height: 400 }}
      xAxis={[{ scale: true }]}
      yAxis={[{ scale: true }]}
      series={[
        {
          type: 'scatter',
          data: [
            [10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81], [11.0, 8.33],
            [14.0, 9.96], [6.0, 7.24], [4.0, 4.26], [12.0, 10.84], [7.0, 4.82],
          ],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
  ),
};

export const MultipleGroups: Story = {
  render: () => (
    <ScatterChart
      style={{ width: 500, height: 400 }}
      xAxis={[{ scale: true }]}
      yAxis={[{ scale: true }]}
      series={[
        {
          type: 'scatter',
          name: 'Group A',
          data: [[10, 20], [15, 35], [12, 28], [18, 42], [8, 15], [20, 30]],
        },
        {
          type: 'scatter',
          name: 'Group B',
          data: [[25, 50], [30, 65], [22, 48], [28, 72], [35, 80], [32, 60]],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
      <Legend legend={{}} />
    </ScatterChart>
  ),
};
