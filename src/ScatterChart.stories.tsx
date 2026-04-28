import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { ScatterChart } from './charts';
import { Title, Tooltip } from './components';
import { SVGRenderer } from 'echarts/renderers';

const meta = {
  component: ScatterChart,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ScatterChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'scatter',
          data: [
            [10.0, 8.04], [8.07, 6.95], [13.0, 7.58], [9.05, 8.81],
            [11.0, 8.33], [14.0, 7.66], [13.4, 6.81], [10.0, 6.33],
            [14.0, 8.96], [12.5, 6.82], [9.15, 7.2], [11.5, 7.2],
          ],
        },
      ]}
    >
      <Title title={{ text: 'Scatter Plot' }} />
      <Tooltip tooltip={{}} />
    </ScatterChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const textEls = svg!.querySelectorAll('text');
      const titleFound = Array.from(textEls).some((el) => el.textContent === 'Scatter Plot');
      expect(titleFound).toBe(true);
    });
  },
};

export const TwoSeries: Story = {
  render: () => (
    <ScatterChart
      use={SVGRenderer}
      style={{ width: 600, height: 400 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          type: 'scatter',
          name: 'Group A',
          data: [
            [10, 8], [8, 7], [13, 8], [9, 9], [11, 8],
          ],
        },
        {
          type: 'scatter',
          name: 'Group B',
          data: [
            [6, 4], [5, 3], [7, 5], [4, 6], [8, 5],
          ],
        },
      ]}
    >
      <Tooltip tooltip={{}} />
    </ScatterChart>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const svg = canvasElement.querySelector('svg');
      expect(svg).not.toBeNull();
      const paths = svg!.querySelectorAll('path');
      expect(paths.length).toBeGreaterThan(0);
    });
  },
};
