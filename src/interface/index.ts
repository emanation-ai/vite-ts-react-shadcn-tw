export interface INavigation {
  title: string
  href: string
}

export interface ICards {
  id?: string | number
  icon: React.ReactNode
  title: string
  desc: string
  btnText?: string
}

export interface IFooterNavigation {
  title: string
  items: INavigation[]
}

export interface IFooter {
  links: IFooterNavigation[]
  copyRights: {
    title: string
    href: string
  }
}

export interface IHomePageContext {
  headerNavigation: INavigation[]
  setHeaderNavigation: React.Dispatch<React.SetStateAction<INavigation[]>>
  heroBannerTitle: string
  setHeroBannerTitle: React.Dispatch<React.SetStateAction<string>>
  heroBannerDesc: string
  setHeroBannerDesc: React.Dispatch<React.SetStateAction<string>>
  heroPrimaryCallToAction: string
  setHeroPrimaryCallToAction: React.Dispatch<React.SetStateAction<string>>
  heroSecondaryCallToAction: string
  setHeroSecondaryCallToAction: React.Dispatch<React.SetStateAction<string>>
  heroBannerImg: string
  setHeroBannerImg: React.Dispatch<React.SetStateAction<string>>
  featureSectionTitle: string
  setFeatureSectionTitle: React.Dispatch<React.SetStateAction<string>>
  featureSectionDesc: string
  setFeatureSectionDesc: React.Dispatch<React.SetStateAction<string>>
  featureSectionCards: ICards[]
  setFeatureSectionCards: React.Dispatch<React.SetStateAction<ICards[]>>
  newsletterSectionTitle: string
  setNewsLetterSectionTitle: React.Dispatch<React.SetStateAction<string>>
  newsletterSectionDesc: string
  setNewsLetterSectionDesc: React.Dispatch<React.SetStateAction<string>>
  newsletterSectionEmail: string
  setNewsLetterSectionEmail: React.Dispatch<React.SetStateAction<string>>
  newsletterSectionCards: ICards[]
  setNewsLetterSectionCards: React.Dispatch<React.SetStateAction<ICards[]>>
  footerNavigation: IFooter
  setFooterNavigation: React.Dispatch<React.SetStateAction<IFooter>>
}
