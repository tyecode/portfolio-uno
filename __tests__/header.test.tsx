import { render, screen } from '@testing-library/react'
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ModulzLogoIcon,
} from '@radix-ui/react-icons' // replace with your actual icon path
import SocialMedia from '@/components/header' // replace with your actual component path

describe('SocialMedia array', () => {
  test('should have github item with correct properties', () => {
    const githubItem = SocialMedia.find((item) => item.title === 'github')
    expect(githubItem).toBeDefined()
    expect(githubItem.icon).toEqual(<GitHubLogoIcon width={20} height={20} />)
  })

  test('should have discord item with correct properties', () => {
    const discordItem = SocialMedia.find((item) => item.title === 'discord')
    expect(discordItem).toBeDefined()
    expect(discordItem.icon).toEqual(<DiscordLogoIcon width={20} height={20} />)
  })

  test('should have linkedin item with correct properties', () => {
    const linkedinItem = SocialMedia.find((item) => item.title === 'linkedin')
    expect(linkedinItem).toBeDefined()
    expect(linkedinItem.icon).toEqual(
      <LinkedInLogoIcon width={20} height={20} />
    )
  })

  test('should have modulz item with correct properties', () => {
    const modulzItem = SocialMedia.find((item) => item.title === 'modulz')
    expect(modulzItem).toBeDefined()
    expect(modulzItem.icon).toEqual(<ModulzLogoIcon width={20} height={20} />)
  })
})
