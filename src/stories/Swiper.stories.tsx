import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Swiper, { SwiperProps } from '../components/Swiper';

const meta: Meta<typeof Swiper> = {
  title: 'Components/Swiper',
  component: Swiper,
  argTypes: {
    autoplay: { control: 'boolean' },
    autoplayInterval: { control: 'number' },
    showNavigation: { control: 'boolean' },
    showPagination: { control: 'boolean' },
    className: { control: 'text' },
    slidesPerView: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Swiper>;

const DemoSlide: React.FC<{ color: string; text: string }> = ({ color, text }) => (
  <div className={`w-full h-64 flex items-center justify-center text-white text-2xl font-bold ${color}`}>
    {text}
  </div>
);

const defaultSlides = [
  <DemoSlide key={1} color="bg-blue-500" text="Slide 1" />,
  <DemoSlide key={2} color="bg-green-500" text="Slide 2" />,
  <DemoSlide key={3} color="bg-red-500" text="Slide 3" />,
  <DemoSlide key={4} color="bg-yellow-500" text="Slide 4" />,
  <DemoSlide key={5} color="bg-purple-500" text="Slide 5" />,
  <DemoSlide key={6} color="bg-pink-500" text="Slide 6" />,
  <DemoSlide key={7} color="bg-indigo-500" text="Slide 7" />,
  <DemoSlide key={8} color="bg-teal-500" text="Slide 8" />,
];

const defaultArgs: SwiperProps = {
  slides: defaultSlides,
  autoplay: false,
  autoplayInterval: 5000,
  showNavigation: true,
  showPagination: true,
  slidesPerView: {
    mobile: 1,
    tablet: 2,
    laptop: 3,
    desktop: 4,
  },
};

export const Default: Story = {
  args: defaultArgs,
};

export const Autoplay: Story = {
  args: {
    ...defaultArgs,
    autoplay: true,
    autoplayInterval: 3000
  },
};

export const WithoutNavigation: Story = {
  args: {
    ...defaultArgs,
    showNavigation: false,
  },
};

export const WithoutPagination: Story = {
  args: {
    ...defaultArgs,
    showPagination: false,
  },
};

export const CustomInterval: Story = {
  args: {
    ...defaultArgs,
    autoplay: true,
    autoplayInterval: 2000,
  },
};

export const CustomStyle: Story = {
  args: {
    ...defaultArgs,
    className: 'rounded-lg shadow-lg',
  },
};

export const CustomResponsive: Story = {
  args: {
    ...defaultArgs,
    slidesPerView: {
      mobile: 1,
      tablet: 2,
      laptop: 2,
      desktop: 3,
    },
    autoplay: true,
    autoplayInterval: 2000
  },
};

