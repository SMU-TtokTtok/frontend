import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index';
import check from '@/assets/check_radio.svg';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'none'],
      description: '체크박스 스타일 변형',
    },
    label: {
      control: 'text',
      description: '체크박스 라벨',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    defaultChecked: {
      control: 'boolean',
      description: '기본 체크 상태',
    },
    img: {
      control: false,
      description: '체크 아이콘 (defaultChecked가 true일 때 표시)',
    },
  },
  args: {
    img: <img src={check} alt="check icon" />,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: '체크박스',
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    label: '아이콘이 있는 체크박스',
    img: <img src={check} alt="check icon" />,
    defaultChecked: true,
  },
};

export const None: Story = {
  args: {
    variant: 'none',
    label: '기본 체크박스',
  },
};

export const WithoutLabel: Story = {
  args: {
    variant: 'primary',
    img: <img src={check} alt="check icon" />,
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: '비활성화된 체크박스',
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    variant: 'primary',
    label: '체크된 상태',
    img: <img src={check} alt="check icon" />,
    defaultChecked: true,
  },
};

export const AllVariants: Story = {
  args: {
    variant: 'primary',
    label: '체크박스',
  },
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}
    >
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>Primary Variant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox variant="primary" label="체크박스" />
          <Checkbox
            variant="primary"
            label="아이콘 포함"
            img={<img src={check} alt="check icon" />}
            defaultChecked
          />
          <Checkbox variant="primary" label="비활성화" disabled />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>None Variant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox variant="none" label="기본 체크박스" />
          <Checkbox variant="none" label="체크됨" defaultChecked />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>Without Label</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Checkbox variant="primary" img={<img src={check} alt="check icon" />} />
          <Checkbox variant="primary" img={<img src={check} alt="check icon" />} defaultChecked />
        </div>
      </div>
    </div>
  ),
};
