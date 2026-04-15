import type { Meta, StoryObj } from '@storybook/react-vite';
import { EffectScatterChart, CanvasRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  component: EffectScatterChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <EffectScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'value' }}
      series={[{
        type: 'effectScatter',
        data: [
          [10, 20], [20, 30], [30, 25], [40, 50], [50, 40],
          [60, 70], [70, 55], [80, 90], [90, 80], [100, 95],
        ],
        symbolSize: 15,
      }]}
    >
      <Title title={{ text: 'Effect Scatter' }} />
      <Tooltip tooltip={{}} />
    </EffectScatterChart>
  ),
};

export const RippleEffect: Story = {
  render: () => (
    <EffectScatterChart
      use={CanvasRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'value' }}
      series={[{
        type: 'effectScatter',
        data: [
          [15, 35], [25, 55], [35, 45], [45, 75], [55, 60],
        ],
        symbolSize: 20,
        rippleEffect: { brushType: 'stroke', scale: 4, period: 3 },
      }]}
    >
      <Title title={{ text: 'Ripple Effect' }} />
      <Tooltip tooltip={{}} />
    </EffectScatterChart>
  ),
};
