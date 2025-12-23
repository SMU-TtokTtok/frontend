import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '인풋 스타일 변형',
      defaultValue: 'primary',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    className: {
      control: 'text',
      description: '추가적인 클래스 이름',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: '검색어를 입력하세요',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: '이메일을 입력하세요',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    placeholder: '내용을 입력하세요',
  },
};

export const WithError: Story = {
  args: {
    variant: 'secondary',
    placeholder: '비밀번호를 입력하세요',
    isError: true,
    errorMessage: '비밀번호는 8자 이상이어야 합니다',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    placeholder: '비활성화된 입력',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Primary</label>
        <Input variant="primary" placeholder="검색어를 입력하세요" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Secondary</label>
        <Input variant="secondary" placeholder="이메일을 입력하세요" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Tertiary</label>
        <Input variant="tertiary" placeholder="내용을 입력하세요" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>With Error</label>
        <Input
          variant="secondary"
          placeholder="비밀번호를 입력하세요"
          isError={true}
          errorMessage="비밀번호는 8자 이상이어야 합니다"
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Disabled</label>
        <Input variant="primary" placeholder="비활성화된 입력" disabled />
      </div>
    </div>
  ),
};
