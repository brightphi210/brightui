import { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    imageSrc: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    price: { control: 'text' },
    buttonText: { control: 'text' },
    onButtonClick: { action: 'button clicked' },
    className: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/300x200',
    title: 'Product Name',
    description: 'This is a sample product description.',
    price: '$99.99',
    buttonText: 'Add to Cart',
  },
};

export const CustomContent: Story = {
  args: {
    className: 'bg-gray-100 border border-gray-300',
    children: (
      <div>
        <h2 className="text-lg font-bold">Custom Header</h2>
        <p className="text-gray-600">This is a custom section inside the card.</p>
      </div>
    ),
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'No Image Card',
    description: 'This card has no image but still retains its structure.',
    buttonText: 'Learn More',
    onButtonClick: () => alert('Button clicked!'),
  },
};

export const OnlyCustomContent: Story = {
  args: {
    children: (
      <div>
        <h2 className="text-2xl font-bold">Fully Custom Content</h2>
        <p className="text-gray-600">
          This card is entirely customized with no default props like title, description, or image.
        </p>
      </div>
    ),
  },
};
