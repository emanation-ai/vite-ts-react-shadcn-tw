import React, { createContext, useState } from 'react'
import { ICards, IFooter, IHomePageContext, INavigation } from '@/interface'
import HomeBannerImg from '@/assets/img/home-banner.png'
import {
  CalendarIcon,
  HandIcon,
  InboxIcon,
  TrashIcon,
  UserGroupIcon,
} from '@/components/global/icons'

// @ts-ignore
export const HomePageContext = createContext<IHomePageContext>()

type Props = {
  children?: React.ReactNode
}

const HomePageData: React.FC<Props> = ({ children }) => {
  let [headerNavigation, setHeaderNavigation] = useState<INavigation[]>([
    {
      title: 'Product',
      href: '#',
    },
    {
      title: 'Features',
      href: '#',
    },
    {
      title: 'Marketplace',
      href: '#',
    },
    {
      title: 'Company',
      href: '#',
    },
  ])
  let [heroBannerTitle, setHeroBannerTitle] = useState<string>(
    'Data to enrich your online business',
  )
  let [heroBannerDesc, setHeroBannerDesc] = useState<string>(
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  )
  let [heroPrimaryCallToAction, setHeroPrimaryCallToAction] = useState<string>(
    'Get started',
  )
  let [heroSecondaryCallToAction, setHeroSecondaryCallToAction] = useState<
    string
  >('Learn more')
  let [heroBannerImg, setHeroBannerImg] = useState<string>(HomeBannerImg)
  let [featureSectionTitle, setFeatureSectionTitle] = useState<string>(
    'Subscribe to our newsletter.',
  )
  let [featureSectionDesc, setFeatureSectionDesc] = useState<string>(
    'Nosturd amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.',
  )
  let [featureSectionCards, setFeatureSectionCards] = useState<ICards[]>([
    {
      id: 1,
      icon: <InboxIcon />,
      title: 'Unlimited inboxes',
      desc:
        'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
      btnText: 'Learn more',
    },
    {
      id: 2,
      icon: <UserGroupIcon />,
      title: 'Manage team members',
      desc:
        'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
      btnText: 'Learn more',
    },
    {
      id: 3,
      icon: <TrashIcon />,
      title: 'Spam report',
      desc:
        'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
      btnText: 'Learn more',
    },
  ])
  let [newsletterSectionTitle, setNewsLetterSectionTitle] = useState<string>(
    'Subscribe to our newsletter.',
  )
  let [newsletterSectionDesc, setNewsLetterSectionDesc] = useState<string>(
    'Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.',
  )
  let [newsletterSectionEmail, setNewsLetterSectionEmail] = useState<string>('')
  let [newsletterSectionCards, setNewsLetterSectionCards] = useState<ICards[]>([
    {
      id: 1,
      icon: <CalendarIcon />,
      title: 'Weekly articles',
      desc:
        'Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.',
    },
    {
      id: 2,
      icon: <HandIcon />,
      title: 'No spam',
      desc:
        'Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.',
    },
  ])
  let [footerNavigation, setFooterNavigation] = useState<IFooter>({
    links: [
      {
        title: 'Company',
        items: [
          {
            title: 'About',
            href: '#',
          },
          {
            title: 'Careers',
            href: '#',
          },
          {
            title: 'Brand Center',
            href: '#',
          },
          {
            title: 'Blog',
            href: '#',
          },
        ],
      },
      {
        title: 'Help Center',
        items: [
          {
            title: 'Help Center',
            href: '#',
          },
          {
            title: 'Safety information',
            href: '#',
          },
          {
            title: 'Cancellation options',
            href: '#',
          },
          {
            title: 'Contact Us',
            href: '#',
          },
        ],
      },
      {
        title: 'Legal',
        items: [
          {
            title: 'Privacy Policy',
            href: '#',
          },
          {
            title: 'Terms of Use',
            href: '#',
          },
          {
            title: 'Cookie Policy',
            href: '#',
          },
        ],
      },
      {
        title: 'Download',
        items: [
          {
            title: 'iOS',
            href: '#',
          },
          {
            title: 'Android',
            href: '#',
          },
          {
            title: 'Windows',
            href: '#',
          },
          {
            title: 'macOS',
            href: '#',
          },
        ],
      },
    ],
    copyRights: {
      title: 'Copyright 2023',
      href: '#',
    },
  })

  return (
    <HomePageContext.Provider
      value={{
        headerNavigation,
        heroBannerTitle,
        heroBannerDesc,
        heroPrimaryCallToAction,
        heroSecondaryCallToAction,
        heroBannerImg,
        featureSectionTitle,
        featureSectionDesc,
        featureSectionCards,
        newsletterSectionTitle,
        newsletterSectionDesc,
        newsletterSectionEmail,
        newsletterSectionCards,
        footerNavigation,
        setHeaderNavigation,
        setHeroBannerTitle,
        setHeroBannerDesc,
        setHeroPrimaryCallToAction,
        setHeroSecondaryCallToAction,
        setHeroBannerImg,
        setFeatureSectionTitle,
        setFeatureSectionDesc,
        setFeatureSectionCards,
        setNewsLetterSectionTitle,
        setNewsLetterSectionDesc,
        setNewsLetterSectionEmail,
        setNewsLetterSectionCards,
        setFooterNavigation,
      }}
    >
      {children}
    </HomePageContext.Provider>
  )
}

export default HomePageData
