import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Image, ImageProps } from './Image'

export default {
  title: 'Atoms/Image',
  component: Image,
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Basic: Story<ImageProps> = Template.bind({})
Basic.args = {
  src: 'https://pbs.twimg.com/profile_images/435723695760232448/nyW36M2P_400x400.png',
  alt: 'Zaizi logo',
}

export const WithCustomStyles = Template.bind({})
WithCustomStyles.args = {
  src: 'https://pbs.twimg.com/profile_images/435723695760232448/nyW36M2P_400x400.png',
  alt: 'Zaizi logo',
  style: {
    width: '200px',
  },
}

export const WithLink = Template.bind({})
WithLink.args = {
  src: 'https://pbs.twimg.com/profile_images/435723695760232448/nyW36M2P_400x400.png',
  alt: 'Zaizi logo',
  link: 'https://zaizi.com',
}
