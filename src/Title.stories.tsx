import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, CanvasRenderer, Title } from './index.js';

const meta = {
  title: 'AI Generated/Simple/Title',
  component: Title,
  decorators: [
    (Story) => (
      <BarChart
        use={CanvasRenderer}
        style={{ width: '100%', height: 320 }}
        xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr'] }}
        yAxis={{ type: 'value' }}
        series={[{ type: 'bar', data: [12, 18, 10, 24] }]}
      >
        <Story />
      </BarChart>
    ),
  ],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Quarterly revenue',
    left: 'left',
  },
};

export const CenteredWithSubtitle: Story = {
  args: {
    text: 'Quarterly revenue',
    subtext: 'North America',
    left: 'center',
  },
};
