export type StaticBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  published: string;
  author: string;
  coverImage?: string;
};

export const staticBlogPosts: StaticBlogPost[] = [
  {
    id: "retirement-planning-basics",
    slug: "retirement-planning-basics",
    title: "Retirement Planning Basics for Young Professionals",
    excerpt:
      "A practical framework to start retirement planning early with realistic goals, diversification, and disciplined contributions.",
    content: `
      <p>Retirement planning is most effective when started early. Even small monthly contributions can grow meaningfully through compounding over long horizons.</p>
      <h2>Start with clear milestones</h2>
      <p>Define short-term and long-term targets, then map them to suitable products. Track progress quarterly and update assumptions as your income grows.</p>
      <h2>Focus on consistency over timing</h2>
      <p>Systematic investing helps reduce emotional decisions. Maintain a disciplined plan and rebalance periodically instead of chasing short-term market moves.</p>
    `,
    published: "2026-01-15T10:00:00.000Z",
    author: "AssetArc Team",
    coverImage: "/services/MUTUAL FUNDS.webp",
  },
  {
    id: "building-an-emergency-fund",
    slug: "building-an-emergency-fund",
    title: "How to Build an Emergency Fund Without Stress",
    excerpt:
      "Learn a simple way to create a safety cushion for unexpected expenses while continuing your long-term financial plan.",
    content: `
      <p>An emergency fund protects you from disruptions like medical bills, temporary job loss, or urgent repairs. It prevents forced liquidation of long-term investments.</p>
      <h2>How much should you keep?</h2>
      <p>A common rule is to maintain 3 to 6 months of essential expenses in highly liquid instruments.</p>
      <h2>Automate contributions</h2>
      <p>Set up automatic monthly transfers to build the fund steadily. Increase your contribution whenever your income increases.</p>
    `,
    published: "2026-02-02T10:00:00.000Z",
    author: "AssetArc Team",
    coverImage: "/services/FIX DEPOSIT.webp",
  },
  {
    id: "smart-diversification-for-families",
    slug: "smart-diversification-for-families",
    title: "Smart Diversification Strategies for Families",
    excerpt:
      "A balanced allocation approach that combines growth, stability, and protection for family-oriented goals.",
    content: `
      <p>Family financial planning should combine growth assets with protection-oriented products. The right mix depends on your goals and timeline.</p>
      <h2>Balance growth and safety</h2>
      <p>Use diversified equity exposure for long-term growth, while keeping debt and fixed-income allocations for stability and near-term needs.</p>
      <h2>Review annually</h2>
      <p>Major life changes can impact your ideal allocation. Conduct an annual review and adjust your plan accordingly.</p>
    `,
    published: "2026-03-08T10:00:00.000Z",
    author: "AssetArc Team",
    coverImage: "/services/insurance.webp",
  },
];
