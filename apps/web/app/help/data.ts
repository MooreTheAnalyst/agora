export interface Article {
  slug: string;
  title: string;
  categorySlug: string;
  content: string;
}

export const mockArticles: Article[] = [
  {
    slug: "what-is-agora",
    title: "What is Agora?",
    categorySlug: "getting-started",
    content: "# What is Agora?\n\nAgora is a decentralized event management platform...\n\n## Getting Started\n\n1. Sign up for an account\n2. Create an event\n3. Sell tickets",
  },
  {
    slug: "how-to-buy-tickets",
    title: "How to Buy Tickets",
    categorySlug: "buying-tickets",
    content: "# How to Buy Tickets\n\nBuying tickets on Agora is simple.\n\n## Steps\n\n- Navigate to an event page\n- Click **Buy Ticket**\n- Confirm transaction in your wallet",
  },
  {
    slug: "connecting-your-wallet",
    title: "Connecting Your Wallet",
    categorySlug: "stellar-web3",
    content: "# Connecting Your Wallet\n\nTo interact with Agora, you need a Stellar wallet.\n\n## Supported Wallets\n\n- Freighter\n- Albedo\n\n```js\n// Example code snippet\nconst connect = async () => {\n  await stellar.connect();\n};\n```\n\n### Troubleshooting\n\nIf you experience issues, make sure your browser extension is up to date.",
  },
  {
    slug: "understanding-xlm",
    title: "Understanding XLM",
    categorySlug: "stellar-web3",
    content: "# Understanding XLM\n\nXLM is the native cryptocurrency of the Stellar network.\n\n## Why XLM?\n\n- Fast transactions\n- Low fees",
  },
  {
    slug: "smart-contracts",
    title: "Smart Contracts on Soroban",
    categorySlug: "stellar-web3",
    content: "# Smart Contracts\n\nAgora uses Soroban smart contracts for event logic.",
  }
];

export const getArticlesByCategory = (categorySlug: string) => {
  return mockArticles.filter((a) => a.categorySlug === categorySlug);
};

export const getArticle = (categorySlug: string, slug: string) => {
  return mockArticles.find((a) => a.categorySlug === categorySlug && a.slug === slug);
};
