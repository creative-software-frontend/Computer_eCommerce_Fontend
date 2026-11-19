type SocialLink = {
  label: string
  href: string
}

type StoreLocation = {
  id: string
  name: string
  placeId: string
  address: string
  phone: string
  hours: string
  area: string
  image: string
  features: readonly string[]
}

type SiteConfig = {
  name: string
  shortName: string
  legalName: string
  url: string
  title: string
  description: string
  contact: {
    phone: {
      primary: string
      secondary: string
    }
    email: {
      support: string
      careers: string
      privacy: string
    }
    headOfficeAddress: readonly string[]
  }
  socials: {
    facebook: SocialLink
    youtube: SocialLink
    instagram: SocialLink
    linkedin: SocialLink
  }
  legal: {
    termsPath: string
    privacyPath: string
  }
  currency: {
    code: string
    symbol: string
    label: string
    locale: string
  }
  shipping: {
    insideDhakaFee: number
    outsideDhakaFee: number
    freeShippingThreshold: number
  }
  storageKeyPrefix: string
  stores: readonly StoreLocation[]
}

export const SITE_CONFIG = {
  name: "TechnoCore Solution",
  shortName: "TechnoCore",
  legalName: "TechnoCore Solution Ltd.",
  url: "https://technocoresolution.com.bd",
  title: "TechnoCore Solution | PC Builder & Computer Store in Bangladesh",
  description:
    "Shop genuine computer components, gaming PCs, laptops, accessories, and custom builds in Bangladesh with expert support and nationwide delivery.",
  contact: {
    phone: {
      primary: "16580",
      secondary: "09678-002003",
    },
    email: {
      support: "support@technocoresolution.com.bd",
      careers: "careers@technocoresolution.com.bd",
      privacy: "privacy@technocoresolution.com.bd",
    },
    headOfficeAddress: ["AG Castle, 6th Floor", "IDB Bhaban Rd, Dhaka 1207"],
  },
  socials: {
    facebook: { label: "Facebook", href: "#" },
    youtube: { label: "YouTube", href: "#" },
    instagram: { label: "Instagram", href: "#" },
    linkedin: { label: "LinkedIn", href: "#" },
  },
  legal: {
    termsPath: "/terms",
    privacyPath: "/privacy",
  },
  currency: {
    code: "BDT",
    symbol: "৳",
    label: "BDT (৳) / EN",
    locale: "en-IN",
  },
  shipping: {
    insideDhakaFee: 79,
    outsideDhakaFee: 119,
    freeShippingThreshold: 2000,
  },
  storageKeyPrefix: "technocore",
  stores: [
    {
      id: "multiplan",
      name: "ECS Computer City (Multiplan)",
      placeId: "ChIJc-zbise4VTcRA3uOHA_suRI",
      address: "69, 71 Elephant Rd, Dhaka 1205",
      phone: "+880 1620-009502",
      hours: "11:00 AM - 8:00 PM (Closed on Tuesday)",
      area: "Elephant Road",
      image: "/latest-products/zotac-rtx-5060-amp.webp",
      features: [
        "Flagship Showroom",
        "PC Building & Testing",
        "Official Warranty Point",
      ],
    },
    {
      id: "idb",
      name: "IDB Bhaban Branch",
      placeId: "ChIJhbGCgk7HVTcR_FveSe2dAl4",
      address: "E/8-A, IDB Bhaban, Dhaka 1207",
      phone: "+880 1700-000000",
      hours: "10:00 AM - 8:00 PM",
      area: "Agargaon",
      image: "/latest-products/gigabyte-gs27qa.webp",
      features: ["Experience Zone", "Gaming Gear & Peripherals", "Corporate Sales"],
    },
  ],
} as const satisfies SiteConfig
