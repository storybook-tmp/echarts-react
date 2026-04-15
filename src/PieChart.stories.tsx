import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart, SVGRenderer } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 400, height: 350 }}>
      <PieChart
        series={[
          {
            data: [
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 234, name: 'Affiliate' },
            ],
            type: 'pie',
          },
        ]}
        use={SVGRenderer}
      />
    </div>
  ),
};

export const Donut: Story = {
  render: () => (
    <div style={{ width: 400, height: 350 }}>
      <PieChart
        series={[
          {
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
            type: 'pie',
            radius: ['40%', '70%'],
          },
        ]}
        use={SVGRenderer}
      />
    </div>
  ),
};
