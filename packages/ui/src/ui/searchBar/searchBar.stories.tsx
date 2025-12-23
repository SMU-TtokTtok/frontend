import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './index';
import search from '@/assets/search.svg';

const meta = {
  title: 'UI/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '검색바 스타일 변형 (Input variant)',
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
    iconStyle: {
      control: 'text',
      description: '아이콘 컨테이너에 적용할 추가적인 클래스 이름',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: '검색어를 입력하세요',
    icon: <img src={search} />,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: '검색어를 입력하세요',
    icon: <img src={search} />,
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    placeholder: '검색어를 입력하세요',
    icon: <img src={search} />,
  },
};

export const WithClickHandler: Story = {
  args: {
    variant: 'primary',
    placeholder: '검색어를 입력하세요',
    icon: <img src={search} />,
    onClick: () => alert('검색 아이콘 클릭!'),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    placeholder: '비활성화된 검색바',
    icon: <img src={search} />,
    disabled: true,
  },
};

export const AllVariants: Story = {
  args: {
    variant: 'primary',
    placeholder: '검색어를 입력하세요',
    icon: <img src={search} />,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Primary</label>
        <SearchBar
          variant="primary"
          placeholder="검색어를 입력하세요"
          icon={<img src={search} />}
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Secondary</label>
        <SearchBar
          variant="secondary"
          placeholder="검색어를 입력하세요"
          icon={<img src={search} />}
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Tertiary</label>
        <SearchBar
          variant="tertiary"
          placeholder="검색어를 입력하세요"
          icon={<img src={search} />}
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
          With Click Handler
        </label>
        <SearchBar
          variant="primary"
          placeholder="아이콘을 클릭하세요"
          icon={<img src={search} />}
          onClick={() => alert('검색!')}
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Disabled</label>
        <SearchBar
          variant="primary"
          placeholder="비활성화된 검색바"
          icon={<img src={search} />}
          disabled
        />
      </div>
    </div>
  ),
};
