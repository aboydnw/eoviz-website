// Homepage content - easy to update without touching components
export const homepage = {
  hero: {
    badge: "Open Source • Community-Driven • Mission-Focused",
    headline: "You have groundbreaking research.",
    subline: "But getting stakeholders to understand it is the hard part.",
    description: "Your Earth observation data could drive critical decisions, secure funding, and solve real-world problems. But complex datasets, technical barriers, and communication gaps keep your research from reaching the people who need it most.",
    primaryCta: {
      text: "Explore Examples",
      href: "/sandbox",
      icon: "Play"
    },
    secondaryCta: {
      text: "Learn How", 
      href: "/docs",
      icon: "BookOpen"
    },
    video: {
      src: "/videos/demo-stories.mp4",
      title: "Real Impact in Action",
      description: "See how storytelling helps emergency managers understand wildfire risk"
    }
  },

  stakes: {
    failure: {
      headline: "Without better communication, your research stays buried",
      points: [
        {
          bold: "Your hard work sits unused",
          text: "published papers and datasets that nobody knows about or understands"
        },
        {
          bold: "Funding opportunities slip away", 
          text: "stakeholders who don't understand your value won't invest in your future"
        },
        {
          bold: "Scientists waste time",
          text: "answering the same questions over and over because people can't access data themselves"
        },
        {
          bold: "Problems persist",
          text: "the real-world issues your research could solve remain unsolved"
        }
      ]
    },
    success: {
      headline: "But when stakeholders understand your work, everything changes",
      points: [
        {
          bold: "Your scientists save hours",
          text: "browser-based tools let stakeholders explore data without Python or GIS"
        },
        {
          bold: "Stakeholders engage deeply",
          text: "they understand not just what you found, but why it matters"
        },
        {
          bold: "Funding flows",
          text: "clear communication of your value leads to recognition and investment"
        },
        {
          bold: "Real impact happens",
          text: "your research drives decisions, policy changes, and solutions"
        }
      ]
    }
  },

  guide: {
    headline: "We've been there. We've seen brilliant research get overlooked because of communication barriers.",
    description: "Over the past decade, we've worked with NASA and dozens of research organizations who faced the same frustrations: data sitting unused, stakeholders who don't understand findings, and expensive custom tool development that takes months.",
    credentials: [
      {
        title: "5-10 NASA Groups",
        description: "Helped solve communication challenges across multiple NASA divisions"
      },
      {
        title: "Dozens of Tools Built", 
        description: "Custom geospatial visualization tools for research organizations"
      },
      {
        title: "Open Source Foundation",
        description: "Built on years of NASA-funded research and community collaboration"
      }
    ]
  },

  nasa: {
    title: "Supported by NASA IMPACT",
    description: "Years of building tools with NASA taught us that great Earth science often stays locked in academic papers. We created eoViz to change that.",
    logo: {
      src: "/logos/nasa-logo.svg",
      alt: "NASA logo"
    }
  },

  productSuite: {
    headline: "Here's how we help you turn complex data into clear impact",
    description: "Whether you need compelling stories, custom visualization tools, or organized data platforms, we've created a simple path to get your research the attention it deserves.",
    
    plan: {
      title: "Our 3-Step Process",
      steps: [
        {
          number: 1,
          title: "Choose Your Approach",
          description: "Tell us about your data and communication goals. We'll help you determine whether you need stories, tools, catalogs, or a combination."
        },
        {
          number: 2,
          title: "Implement Together", 
          description: "Work with our team to build your solution, or use our open-source tools independently. Your data stays under your control."
        },
        {
          number: 3,
          title: "Watch Impact Grow",
          description: "Stakeholders understand your work, scientists save time, and your research gets the recognition and funding it deserves."
        }
      ]
    },

    products: [
      {
        id: "stories",
        title: "eoStories",
        badge: "Stories",
        icon: "BookOpen",
        iconColor: "blue-600",
        description: "Turn complex research into narratives that stakeholders actually understand and remember",
        benefits: [
          "Decision-makers understand your research impact",
          "Funders see clear evidence of your work's value", 
          "Media coverage that accurately represents your findings",
          "Policy makers have the context they need to act"
        ],
        cta: {
          text: "Learn more",
          href: "/products/eostories"
        }
      },
      {
        id: "tools",
        title: "eoTools", 
        badge: "Tools",
        icon: "Code",
        iconColor: "green-600",
        description: "Get custom visualization tools that show your unique data exactly how stakeholders need to see it",
        benefits: [
          "Your data gets the specialized interface it deserves",
          "Skip expensive GIS team buildouts",
          "Move beyond Google Earth Engine limitations", 
          "Stakeholders interact with data, not just view it"
        ],
        cta: {
          text: "See example tools",
          href: "/products/eotools"
        }
      },
      {
        id: "catalogs",
        title: "eoCatalogs",
        badge: "Catalogs", 
        icon: "Layers",
        iconColor: "purple-600",
        description: "Organize multiple datasets and research projects so people can actually find and use your work",
        benefits: [
          "Researchers discover your datasets easily",
          "Institutional branding showcases your work",
          "Connect data to the stories that explain it",
          "Multi-project coordination without chaos"
        ],
        cta: {
          text: "View examples",
          href: "/products/eocatalogs"
        }
      }
    ]
  },

  valueProposition: {
    headline: "Your data stays yours, your impact grows",
    features: [
      {
        icon: "Layers",
        iconColor: "blue",
        title: "Complete Data Control",
        description: "Self-hosted means your sensitive research data never leaves your infrastructure. No vendor lock-in, no usage fees, no privacy concerns with third-party platforms."
      },
      {
        icon: "Zap", 
        iconColor: "green",
        title: "Built for Research Organizations",
        description: "Every tool is shaped by real challenges faced by research teams who need to communicate complex findings to stakeholders, funders, and decision-makers."
      },
      {
        icon: "Users",
        iconColor: "purple", 
        title: "Open Source Community",
        description: "Contribute improvements, customize for your needs, and benefit from shared development. Built by researchers, for researchers."
      }
    ]
  },

  // Simplified final CTA - focus on the two most effective paths
  cta: {
    badge: "Ready to Get Started?",
    headline: "Let's help your research reach the people who need it",
    description: "See how eoViz works with your data, or talk with our team about your specific challenges.",
    primaryAction: {
      text: "Schedule Discovery Call",
      href: "#contact"
    },
    secondaryAction: {
      text: "Explore Examples First",
      href: "/sandbox"
    }
=======
  cta: {
    badge: "Ready to Get Started?",
    headline: "Let's help your research reach the people who need it",
    description: "Whether you're ready to dive in or want to learn more about how other research organizations are solving these challenges, we're here to help.",
    primaryActions: [
      {
        text: "Schedule Discovery Call",
        href: "#contact",
        variant: "default"
      },
      {
        text: "Take Our Assessment", 
        href: "#assessment",
        variant: "outline"
      }
    ],
    secondaryActions: [
      {
        text: "Explore on GitHub",
        href: "https://github.com",
        icon: "Github"
      },
      {
        text: "Learn More About Our Approach",
        href: "/products"
      }
    ]
  }
}

// Navigation content
export const navigation = {
  logo: {
    src: "/logos/eoviz-logo.png",
    alt: "eoViz logo",
    text: "eoViz"
  },
  menuItems: [
    { label: "Products", href: "/products" },
    { label: "Documentation", href: "/docs" },
    { label: "Sandbox", href: "/sandbox" },
    { label: "Workshop", href: "/workshop" }
  ],
  actions: [
    {
      text: "GitHub",
      href: "https://github.com",
      icon: "Github",
      variant: "ghost"
    },
    {
      text: "Explore Examples", 
      href: "/sandbox",
      variant: "default"
    }
  ]
}

// Footer content
export const footer = {
  logo: {
    src: "/logos/eoviz-logo.png",
    alt: "eoViz logo", 
    text: "eoViz"
  },
  description: "Modular geospatial storytelling platform for Earth observation data.",
  sections: [
    {
      title: "Products",
      links: [
        { label: "eoStories", href: "/products" },
        { label: "eoTools", href: "/products" },
        { label: "eoCatalogs", href: "/products" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Sandbox", href: "/sandbox" },
        { label: "Workshop", href: "/workshop" }
      ]
    },
    {
      title: "Community", 
      links: [
        { label: "GitHub", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Support", href: "#" }
      ]
    }
  ],
  copyright: "© 2025 eoViz. Open source tools for Earth observation storytelling.",
  attribution: "Built with support from NASA IMPACT and the Earth Science Data Systems Program. Part of the global effort to make Earth science data more accessible and actionable."
}
