import type { Meta, StoryObj } from '@storybook/react-vite';
import { Legend, PieChart, Title, Toolbox, Tooltip } from '@fanciers/echarts-react';

const meta = {
  component: PieChart,
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const TrafficSources: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: 360 }}
      series={[
        {
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '56%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            formatter: '{b}: {d}%',
          },
          data: [
            { value: 42, name: 'Direct' },
            { value: 28, name: 'Search' },
            { value: 18, name: 'Referral' },
            { value: 12, name: 'Email' },
          ],
        },
      ]}
    >
      <Title text="Traffic sources" left="center" />
      <Tooltip trigger="item" />
      <Legend bottom={8} />
      <Toolbox
        right={16}
        feature={{
          saveAsImage: {},
          restore: {},
        }}
      />
    </PieChart>
  ),
};
