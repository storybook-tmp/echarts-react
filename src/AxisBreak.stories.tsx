import type { Meta, StoryObj } from '@storybook/react';
import { BarChart, AxisBreak } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/AxisBreak',
  component: AxisBreak,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AxisBreak>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Category A', 'Category B', 'Category C', 'Very Large Value', 'Category D'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          data: [120, 200, 150, 5000, 180],
          type: 'bar',
        },
      ]}
    >
      <AxisBreak />
    </BarChart>
  ),
};

export const WithBreakpoint: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Small', 'Medium', 'Large', 'Huge', 'Normal'],
      }}
      yAxis={{
        type: 'value',
        splitNumber: 4,
      }}
      series={[
        {
          data: [100, 150, 200, 3000, 120],
          type: 'bar',
        },
      ]}
    >
      <AxisBreak />
    </BarChart>
  ),
};
