import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './index';

const meta = {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'tertiary',
        'light_blue',
        'blue',
        'navy',
        'deep_navy',
        'white',
        'red',
      ],
      description: '태그 스타일 변형',
    },
    children: {
      control: 'text',
      description: '태그 텍스트',
    },
    className: {
      control: 'text',
      description: '추가적인 클래스 이름',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: '기본 태그',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '모집 중',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: '모집 마감',
  },
};

export const LightBlue: Story = {
  args: {
    variant: 'light_blue',
    children: 'Light Blue',
  },
};

export const Blue: Story = {
  args: {
    variant: 'blue',
    children: 'Blue',
  },
};

export const Navy: Story = {
  args: {
    variant: 'navy',
    children: 'Navy',
  },
};

export const DeepNavy: Story = {
  args: {
    variant: 'deep_navy',
    children: 'Deep Navy',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
    children: '역할',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
    children: '마감 임박',
  },
};
