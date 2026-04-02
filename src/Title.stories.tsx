import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, Title } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
        },
      ]}
    >
      <Title text="Sales Chart" />
    </LineChart>
  ),
};

export const WithSubtitle: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
        },
      ]}
    >
      <Title
        text="Sales Chart"
        subtext="Weekly Sales Data"
        left="center"
      />
    </LineChart>
  ),
};
