import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from './charts';

const meta = {
  title: 'AI Generated/Simple/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400, height: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  },
};

export const Donut: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
        ],
      },
    ],
  },
};
