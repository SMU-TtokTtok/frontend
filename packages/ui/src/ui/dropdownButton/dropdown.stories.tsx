import type { Meta, StoryObj } from '@storybook/react';
import { DropDownButton } from './index';

const meta = {
  title: 'UI/DropDownButton',
  component: DropDownButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'tertiary', 'gray', 'form'],
      description: '드롭다운 버튼 스타일 변형',
    },
    className: {
      control: 'text',
      description: '추가적인 클래스 이름',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
  },
} satisfies Meta<typeof DropDownButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: '선택하세요',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: '에러 상태',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    children: 'Gray',
  },
};

export const Form: Story = {
  args: {
    variant: 'form',
    children: 'Form',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    children: '비활성화',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
        minWidth: '200px',
      }}
    >
      <DropDownButton variant="default">Default</DropDownButton>
      <DropDownButton variant="error">Error</DropDownButton>
      <DropDownButton variant="tertiary">Tertiary</DropDownButton>
      <DropDownButton variant="gray">Gray</DropDownButton>
      <DropDownButton variant="form">Form</DropDownButton>
      <DropDownButton variant="default" disabled>
        Disabled
      </DropDownButton>
    </div>
  ),
};
