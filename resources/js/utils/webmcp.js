/**
 * Registers client-side WebMCP tools when the browser exposes navigator.modelContext
 * (Chrome 146+ / Lighthouse Agentic Browsing audit). No-ops cleanly on standard browsers.
 */
export function registerWebMcpTools() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  const mc = navigator.modelContext;
  if (!mc || typeof mc.registerTool !== 'function') return;
  if (window.__8viceWebMcpRegistered) return;
  window.__8viceWebMcpRegistered = true;

  const register = (tool) => {
    try {
      mc.registerTool(tool);
    } catch (_) {
      // Ignore if tool already registered or unsupported browser build
    }
  };

  register({
    name: 'search_8vice_content',
    description: 'Search 8vice advisory services, market intelligence articles, insights, and case studies across EN, ID, and CN.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search keyword such as market entry, government relations, RCEP, EV supply chain, or media relations.',
        },
        lang: {
          type: 'string',
          enum: ['en', 'id', 'cn'],
          description: 'Preferred language code: en, id, or cn.',
        },
      },
      required: ['query'],
    },
    async execute({ query = '', lang = 'en' }) {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&lang=${encodeURIComponent(lang)}`);
      if (!res.ok) return { results: [] };
      return await res.json();
    },
  });

  register({
    name: 'list_8vice_services',
    description: 'List 8vice core Indonesia-China strategic advisory services and their canonical URLs.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    async execute() {
      const origin = window.location.origin;
      return {
        services: [
          { slug: 'advisory', title: 'Strategic Advisory & Market Entry', url: `${origin}/services/advisory` },
          { slug: 'gov-relations', title: 'Government Relations & Stakeholder Engagement', url: `${origin}/services/gov-relations` },
          { slug: 'business-matching', title: 'Business Matching & Strategic Partnerships', url: `${origin}/services/business-matching` },
          { slug: 'comms', title: 'Strategic Communications & Market Positioning', url: `${origin}/services/comms` },
          { slug: 'media-relations', title: 'Media Relations & Crisis Communications', url: `${origin}/services/media-relations` },
          { slug: 'investment', title: 'Investment & Business Development Facilitation', url: `${origin}/services/investment` },
        ],
      };
    },
  });

  register({
    name: 'get_8vice_contact_info',
    description: 'Get 8vice official contact email, Jakarta office address, and consultation channels.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    async execute() {
      const origin = window.location.origin;
      return {
        organization: '8vice Strategic Advisory',
        email: 'hello@8vice.com',
        office: 'SOHO Building, Jl. Letjen M.T. Haryono Kav. 2, Jakarta Selatan 12810, Indonesia',
        contactPage: `${origin}/contact`,
        llmsContext: `${origin}/llms.txt`,
      };
    },
  });
}
