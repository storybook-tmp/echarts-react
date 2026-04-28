import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { EffectScatterChart } from './charts';
import { Title, Tooltip } from './components';
import { SVGRenderer } from 'echarts/renderers';

const meta = {
  component: EffectScatterChart,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <EffectScatterChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'effectScatter',
          data: [
            [10, 8], [8, 7], [13, 8], [9, 9], [11, 8],
            [14, 7], [6, 5], [12, 9], [7, 6], [15, 10],
          ],
          rippleEffect: { brushType: 'stroke' },
          symbolSize: 15,
        },
      ]}
    >
      <Title title={{ text: 'Effect Scatter' }} />
      <Tooltip tooltip={{}} />
    </EffectScatterChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Effect Scatter');
      expect(titleFound).toBe(true);
    });
  },
};

export const LargeRipple: Story = {
  render: () => (
    <EffectScatterChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'effectScatter',
          data: [
            [5, 3], [12, 7], [8, 10], [15, 5], [3, 8],
          ],
          rippleEffect: { scale: 5, brushType: 'fill' },
          symbolSize: 20,
        },
      ]}
    >
      <Title title={{ text: 'Large Ripple Effect' }} />
    </EffectScatterChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Large Ripple Effect');
      expect(titleFound).toBe(true);
    });
  },
};
