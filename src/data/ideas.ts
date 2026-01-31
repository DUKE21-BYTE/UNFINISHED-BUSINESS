export interface Idea {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  status: "Public Domain" | "Collaboration Open" | "Attribution Required" | "Private License" | "Negotiable";
}

export const allIdeas: Idea[] = [
  // Original Ideas
  {
    id: 1,
    title: "AI-Powered Plant Doctor",
    slug: "ai-powered-plant-doctor",
    description: "A mobile app that identifies plant diseases from photos and suggests organic remedies. Abandoned because I couldn't get a good dataset.",
    category: "Mobile App",
    tags: ["AI", "Gardening", "Mobile"],
    status: "Public Domain"
  },
  {
    id: 2,
    title: "Local Book Swap Network",
    slug: "local-book-swap-network",
    description: "A platform for neighbors to swap physical books. Built the backend but frontend needs work. I moved to a city with no neighbors.",
    category: "Web App",
    tags: ["Social", "Books", "Sustainability"],
    status: "Collaboration Open"
  },
  {
    id: 3,
    title: "SaaS Subscription Manager",
    slug: "saas-subscription-manager",
    description: "Dashboard to track all your company's SaaS spending and usage. Stopped because I found a competitor doing it better.",
    category: "SaaS",
    tags: ["B2B", "Finance", "Dashboard"],
    status: "Attribution Required"
  },
  {
    id: 4,
    title: "Virtual Study Buddy for ADHD",
    slug: "virtual-study-buddy-adhd",
    description: "An avatar-based accountability partner that sits on your screen and gently nudges you if you get distracted. Stopped because Unity integration was hard.",
    category: "EdTech",
    tags: ["Education", "ADHD", "Productivity"],
    status: "Public Domain"
  },
  {
    id: 5,
    title: "Recipe Generator from Leftovers",
    slug: "recipe-generator-leftovers",
    description: "Input what's in your fridge, get a recipe. I know, everyone does this, but mine was going to focus on extremely low-budget meals.",
    category: "Mobile App",
    tags: ["Food", "Budget", "Sustainability"],
    status: "Private License"
  },
  // "Killed By" / Failed Startup Concepts
  {
    id: 6,
    title: "Juicero for Tea",
    slug: "juicero-for-tea",
    description: "An internet-connected tea steeper that uses proprietary tea pods. Realized that tea bags are already perfect.",
    category: "Hardware",
    tags: ["IoT", "Food", "Hardware"],
    status: "Public Domain"
  },
  {
    id: 7,
    title: "AR Glasses for Socializing",
    slug: "ar-glasses-socializing",
    description: "Glasses that show you people's LinkedIn profiles when you look at them. Abandoned due to extreme privacy concerns.",
    category: "Wearables",
    tags: ["AR", "Social", "Privacy"],
    status: "Public Domain"
  },
  {
    id: 8,
    title: "Subscription Laundry Quarters",
    slug: "subscription-laundry-quarters",
    description: "A service sending $20 worth of quarters for $27/month. Turns out people hate math but hate bad deals more.",
    category: "Service",
    tags: ["Subscription", "Convenience", "FinTech"],
    status: "Public Domain"
  },
  {
    id: 9,
    title: "Private Gym Finder",
    slug: "private-gym-finder",
    description: "Airbnb for home gyms. Couldn't solve the insurance liability or the 'creepy stranger in my garage' factor.",
    category: "Web App",
    tags: ["Fitness", "Marketplace", "Sharing Economy"],
    status: "Collaboration Open"
  },
  // Abandoned Reddit Ideas
  {
    id: 10,
    title: "Universal Mis-Translator",
    slug: "universal-mis-translator",
    description: "An app that confidently translates your speech into random, believable but incorrect phrases in the target language. For chaotic tourists.",
    category: "Mobile App",
    tags: ["Humor", "Travel", "Language"],
    status: "Public Domain"
  },
  {
    id: 11,
    title: "Rude Virtual Assistant",
    slug: "rude-virtual-assistant",
    description: "A Siri clone that sighs, judges your questions, or gives you the wrong answer on purpose to teach you self-reliance.",
    category: "AI",
    tags: ["AI", "Humor", "Productivity"],
    status: "Attribution Required"
  },
  {
    id: 12,
    title: "GrubHub for Recipes",
    slug: "grubhub-for-recipes",
    description: "GitHub for cooking. Fork recipes, track changes (commits), open pull requests when you improve someone's lasagna. Stopped at database design.",
    category: "Web App",
    tags: ["Food", "Open Source", "Social"],
    status: "Collaboration Open"
  },
  {
    id: 13,
    title: "Discord Mukbang Bot",
    slug: "discord-mukbang-bot",
    description: "A bot that joins voice channels and plays wet chewing sounds when specific users start talking. My friends banned me.",
    category: "Bot",
    tags: ["Discord", "Humor", "Social"],
    status: "Public Domain"
  },
  {
    id: 14,
    title: "The Unclickable Button",
    slug: "unclickable-button",
    description: "A UI library element that dodges the cursor using inverse kinematics. Intended for 'Cancel Subscription' buttons.",
    category: "Library",
    tags: ["UI/UX", "Frontend", "Humor"],
    status: "Public Domain"
  },
  {
    id: 15,
    title: "Piano that Detunes Itself",
    slug: "self-detuning-piano",
    description: "A web synth where every keystroke slightly detunes the next note. After 5 minutes it becomes a horror movie soundtrack.",
    category: "Web Audio",
    tags: ["Music", "Audio", "Web"],
    status: "Public Domain"
  },
  // Niche & Specific Abandoned Projects
  {
    id: 16,
    title: "Bespoke Furniture Upholstery Network",
    slug: "bespoke-upholstery-network",
    description: "Uber for getting your couch fixed. Connects local artisans with people who have torn furniture. Hard to scale quality control.",
    category: "Marketplace",
    tags: ["Service", "Furniture", "Local"],
    status: "Negotiable"
  },
  {
    id: 17,
    title: "Locater for Backpackers",
    slug: "backpacker-locater",
    description: "Social network for finding other travelers in hostels nearby. Abandoned when I realized Facebook Groups already does this poorly but effectively.",
    category: "Mobile App",
    tags: ["Travel", "Social", "Location"],
    status: "Public Domain"
  },
  {
    id: 18,
    title: "Uber for Awkward Items",
    slug: "uber-awkward-items",
    description: "On-demand truck delivery for things that don't fit in a Sedan (Craiglist couches, IKEA runs). Logistics were a nightmare.",
    category: "Logistics",
    tags: ["Delivery", "Gig Economy", "Transport"],
    status: "Collaboration Open"
  },
  {
    id: 19,
    title: "Cloud OS Workspace",
    slug: "cloud-os-workspace",
    description: "A full operating system in the browser. Stopped because internet speeds in 2015 weren't ready. Maybe they are now?",
    category: "SaaS",
    tags: ["Cloud", "OS", "Productivity"],
    status: "Attribution Required"
  },
  {
    id: 20,
    title: "Vintage Modern Milkman",
    slug: "vintage-modern-milkman",
    description: "Subscription delivery of locally sourced milk in glass bottles. margins were too thin due to breakage.",
    category: "Delivery",
    tags: ["Sustainability", "Food", "Local"],
    status: "Public Domain"
  },
  // More Generic Tech Ideas
  {
    id: 21,
    title: "Tinder for Co-Founders",
    slug: "tinder-for-cofounders",
    description: "Swipe right on tech stacks and business models. Matching algorithm was biased towards JavaScript developers.",
    category: "Mobile App",
    tags: ["Social", "Startup", "Networking"],
    status: "Public Domain"
  },
  {
    id: 22,
    title: "Smart Mirror with AdBlock",
    slug: "smart-mirror-adblock",
    description: "A physical mirror that detects logos on your clothes and blurs them out in the reflection. Too much lag.",
    category: "Hardware",
    tags: ["CV", "Hardware", "Privacy"],
    status: "Public Domain"
  },
  {
    id: 23,
    title: "Blockchain for Cat Lineage",
    slug: "blockchain-cat-lineage",
    description: "Immutable ledger for stray cat adoption history. Realized a SQL database was 1000x cheaper and faster.",
    category: "Web3",
    tags: ["Blockchain", "Pets", "Database"],
    status: "Public Domain"
  },
  {
    id: 24,
    title: "AI Generated Dad Jokes",
    slug: "ai-dad-jokes",
    description: "GPT-2 wrapper that only output puns. Abandoned because the jokes were actually too good and not cringey enough.",
    category: "AI",
    tags: ["NLP", "Humor", "Entertainment"],
    status: "Public Domain"
  },
  {
    id: 25,
    title: "VR Office Simulator",
    slug: "vr-office-simulator",
    description: "Experience the joy of a cubicle from your home. Includes flickering fluorescent lights and background typing noises.",
    category: "VR",
    tags: ["VR", "Work", "Simulation"],
    status: "Public Domain"
  },
  {
    id: 26,
    title: "Code Comment Eraser",
    slug: "code-comment-eraser",
    description: "A CLI tool that removes all comments from a codebase to 'reduce production bundle size'. Dangerous but effective.",
    category: "DevTool",
    tags: ["CLI", "Developer", "Utility"],
    status: "Public Domain"
  },
  {
    id: 27,
    title: "Social Media Detox App",
    slug: "social-media-detox",
    description: "App that locks your phone for 1 hour if you scroll more than 100 meters in a day. Apple didn't approve the API usage.",
    category: "Mobile App",
    tags: ["Health", "Productivity", "Mobile"],
    status: "Public Domain"
  },
  {
    id: 28,
    title: "E-Ink Laptop",
    slug: "e-ink-laptop",
    description: "A laptop with an e-ink display for distraction-free writing. Hardware prototyping was too expensive.",
    category: "Hardware",
    tags: ["Hardware", "Writing", "Productivity"],
    status: "Negotiable"
  },
  {
    id: 29,
    title: "NFT for Colors",
    slug: "nft-for-colors",
    description: "Own a hex code. I stopped because I felt bad about it.",
    category: "Web3",
    tags: ["Crypto", "Art", "Satire"],
    status: "Public Domain"
  },
  {
    id: 30,
    title: "Procedural City Generator",
    slug: "procedural-city-generator",
    description: "Generates infinite 3D cities for game devs. Got stuck on generating realistic sewer systems.",
    category: "Game Dev",
    tags: ["3D", "Procedural", "Game Assets"],
    status: "Collaboration Open"
  },
  {
    id: 31,
    title: "Dog Barks to Text",
    slug: "dog-barks-to-text",
    description: "ML model attempting to translate dog barks into English. It mostly just output 'SQUIRREL' and 'HUNGRY'.",
    category: "AI",
    tags: ["ML", "Pets", "Audio"],
    status: "Public Domain"
  },
  {
    id: 32,
    title: "Reverse LinkedIn",
    slug: "reverse-linkedin",
    description: "Companies post their flaws and red flags, candidates apply if they can tolerate them. Honest hiring.",
    category: "Web App",
    tags: ["Hiring", "Jobs", "Social"],
    status: "Attribution Required"
  },
  {
    id: 33,
    title: "Dream Journal Analytics",
    slug: "dream-journal-analytics",
    description: "Log dreams, get charts on how often you dream about teeth falling out. Freud integration pending.",
    category: "Mobile App",
    tags: ["Health", "Data", "Quantified Self"],
    status: "Public Domain"
  },
  {
    id: 34,
    title: "Crowpsourced Traffic Lights",
    slug: "crowdsourced-traffic-lights",
    description: "Users vote on which light should turn green. Immediate chaos. Regulatory nightmare.",
    category: "Civic Tech",
    tags: ["Traffic", "Social", "Crowdsourcing"],
    status: "Public Domain"
  },
  {
    id: 35,
    title: "OnlyFans for Code",
    slug: "onlyfans-for-code",
    description: "Pay to see my messy, unrefactored private repos. 'Dirty Code' niche.",
    category: "SaaS",
    tags: ["Developer", "Content", "Humor"],
    status: "Public Domain"
  },
  {
    id: 36,
    title: "Spotify for Birds",
    slug: "spotify-for-birds",
    description: "Smart speaker that plays calls of rival birds to keep them away from your garden. Accidental bird fight club.",
    category: "IoT",
    tags: ["Audio", "Nature", "Hardware"],
    status: "Public Domain"
  },
  {
    id: 37,
    title: "AR Graveyard",
    slug: "ar-graveyard",
    description: "Visit a cemetery and see holographic biographies of the deceased. Respectful but creepy.",
    category: "AR",
    tags: ["History", "Social", "Mobile"],
    status: "Private License"
  },
  {
    id: 38,
    title: "Decentralized To-Do List",
    slug: "decentralized-todo",
    description: "A todo list where every item is a transaction on the blockchain. Cost $5 in gas fees to cross off 'Buy Milk'.",
    category: "Web3",
    tags: ["Productivity", "Blockchain", "FinTech"],
    status: "Public Domain"
  },
  {
    id: 39,
    title: "Haptic Feedback Suit for Zoom",
    slug: "haptic-zoom-suit",
    description: "Feel the handshake. Or the awkward pat on the back. abandoned.",
    category: "Hardware",
    tags: ["VR", "Remote Work", "Hardware"],
    status: "Public Domain"
  },
  {
    id: 40,
    title: "Smarter Toaster",
    slug: "smarter-toaster",
    description: "Toaster with a camera inside to get the perfect brownness. Over-engineered and fire hazard.",
    category: "Hardware",
    tags: ["IoT", "Kitchen", "Fire Hazard"],
    status: "Public Domain"
  },
  {
    id: 41,
    title: "Extreme Couponing API",
    slug: "coupon-api",
    description: "Public API for finding stacked coupons at major retailers. Retailers kept blocking my IP.",
    category: "API",
    tags: ["Shopping", "Savings", "Scraper"],
    status: "Public Domain"
  },
    {
    id: 42,
    title: "Focus Music Generator",
    slug: "focus-music-generator",
    description: "Generates infinite ambient noise based on your heart rate. My watch integration failed.",
    category: "Web Audio",
    tags: ["Music", "Productivity", "Health"],
    status: "Public Domain"
  }
];
