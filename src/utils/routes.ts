/**
 * Routing and 301 legacy redirect resolution for Onix Data Centres.
 */

export type PageRoute = 
  | 'home'
  | 'banks-fintech'
  | 'networks-content'
  | 'enterprise'
  | 'moving-to-onix'
  | 'solutions'
  | 'the-facility'
  | 'certification'
  | 'sustainability'
  | 'about'
  | 'insights'
  | 'contact'
  | 'book-a-tour'
  | 'board-pack'
  | 'fr-senegal';

export interface RouteMatch {
  page: PageRoute;
  hash?: string;
  isRedirected?: boolean;
  originalPath?: string;
  language: 'en' | 'fr';
}

const REDIRECT_MAP: Record<string, { page: PageRoute; hash?: string }> = {
  '/home': { page: 'home' },
  '/home/': { page: 'home' },
  '/o-home': { page: 'home' },
  '/o-home/': { page: 'home' },
  '/o-home/about-us': { page: 'about' },
  '/o-home/about-us/': { page: 'about' },
  '/about-us': { page: 'about' },
  '/about-us/': { page: 'about' },
  '/infrastructure': { page: 'the-facility' },
  '/infrastructure/': { page: 'the-facility' },
  '/thefacility': { page: 'the-facility' },
  '/thefacility/': { page: 'the-facility' },
  '/o-ghana': { page: 'the-facility' },
  '/o-ghana/': { page: 'the-facility' },
  '/o-ghana/colocation': { page: 'solutions', hash: 'colocation' },
  '/o-ghana/colocation/': { page: 'solutions', hash: 'colocation' },
  '/solutions/virtual-machines': { page: 'solutions', hash: 'colocation' },
  '/virtual-machines': { page: 'solutions', hash: 'colocation' },
  '/senegal': { page: 'fr-senegal' },
  '/senegal/': { page: 'fr-senegal' },
  '/fr': { page: 'fr-senegal' },
  '/fr/': { page: 'fr-senegal' },
};

const KNOWN_TOP_LEVEL = [
  'banks-fintech',
  'networks-content',
  'enterprise',
  'enterprise-public-sector',
  'moving-to-onix',
  'solutions',
  'the-facility',
  'thefacility',
  'infrastructure',
  'certification',
  'sustainability',
  'about',
  'about-us',
  'insights',
  'outage-diary',
  'contact',
  'book-a-tour',
  'tour',
  'board-pack',
  'fr',
  'senegal',
  'o-home',
  'o-ghana'
];

export function getBasePath(): string {
  if (typeof window === 'undefined') return '';
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = segments[0].toLowerCase();
    // If the first segment is not a known application route, it is a repo/folder subpath
    if (!KNOWN_TOP_LEVEL.includes(firstSegment)) {
      return `/${firstSegment}`;
    }
  }
  return '';
}

export function resolveRoute(pathname: string, hash = ''): RouteMatch {
  let effectivePath = pathname;
  let effectiveHash = hash;

  // Support hash routing fallback (e.g., #/banks-fintech or #!/banks-fintech)
  if (hash.startsWith('#/') || hash.startsWith('#!/')) {
    const hashClean = hash.replace(/^#[!/]+/, '/');
    const [hPath, hSubHash] = hashClean.split('#');
    effectivePath = hPath;
    effectiveHash = hSubHash ? `#${hSubHash}` : '';
  }

  // Normalize path: lowercase and strip trailing slash unless root
  let cleanPath = effectivePath.toLowerCase();
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Strip subpath / repo base if running on a subfolder (e.g., GitHub Pages /repo-name/)
  const basePath = getBasePath();
  if (basePath && cleanPath.startsWith(basePath.toLowerCase())) {
    cleanPath = cleanPath.slice(basePath.length) || '/';
  }

  // Check legacy redirect map
  if (REDIRECT_MAP[cleanPath]) {
    const target = REDIRECT_MAP[cleanPath];
    return {
      page: target.page,
      hash: target.hash || effectiveHash.replace(/^#/, ''),
      isRedirected: true,
      originalPath: pathname,
      language: target.page === 'fr-senegal' ? 'fr' : 'en',
    };
  }

  // Exact path mapping
  const normalizedHash = effectiveHash.replace(/^#/, '');

  switch (cleanPath) {
    case '':
    case '/':
      return { page: 'home', hash: normalizedHash, language: 'en' };
    case '/banks-fintech':
      return { page: 'banks-fintech', hash: normalizedHash, language: 'en' };
    case '/networks-content':
      return { page: 'networks-content', hash: normalizedHash, language: 'en' };
    case '/enterprise':
    case '/enterprise-public-sector':
      return { page: 'enterprise', hash: normalizedHash, language: 'en' };
    case '/moving-to-onix':
      return { page: 'moving-to-onix', hash: normalizedHash, language: 'en' };
    case '/solutions':
      return { page: 'solutions', hash: normalizedHash, language: 'en' };
    case '/the-facility':
      return { page: 'the-facility', hash: normalizedHash, language: 'en' };
    case '/certification':
      return { page: 'certification', hash: normalizedHash, language: 'en' };
    case '/sustainability':
      return { page: 'sustainability', hash: normalizedHash, language: 'en' };
    case '/about':
      return { page: 'about', hash: normalizedHash, language: 'en' };
    case '/insights':
    case '/outage-diary':
      return { page: 'insights', hash: normalizedHash, language: 'en' };
    case '/contact':
      return { page: 'contact', hash: normalizedHash, language: 'en' };
    case '/book-a-tour':
    case '/tour':
      return { page: 'book-a-tour', hash: normalizedHash, language: 'en' };
    case '/board-pack':
      return { page: 'board-pack', hash: normalizedHash, language: 'en' };
    case '/fr/senegal':
    case '/senegal-fr':
      return { page: 'fr-senegal', hash: normalizedHash, language: 'fr' };
    default:
      return { page: 'home', hash: normalizedHash, language: 'en' };
  }
}

export function getPathForPage(page: PageRoute): string {
  const basePath = getBasePath();
  let subPath = '';
  switch (page) {
    case 'home': subPath = '/'; break;
    case 'banks-fintech': subPath = '/banks-fintech'; break;
    case 'networks-content': subPath = '/networks-content'; break;
    case 'enterprise': subPath = '/enterprise'; break;
    case 'moving-to-onix': subPath = '/moving-to-onix'; break;
    case 'solutions': subPath = '/solutions'; break;
    case 'the-facility': subPath = '/the-facility'; break;
    case 'certification': subPath = '/certification'; break;
    case 'sustainability': subPath = '/sustainability'; break;
    case 'about': subPath = '/about'; break;
    case 'insights': subPath = '/insights'; break;
    case 'contact': subPath = '/contact'; break;
    case 'book-a-tour': subPath = '/book-a-tour'; break;
    case 'board-pack': subPath = '/board-pack'; break;
    case 'fr-senegal': subPath = '/fr/senegal'; break;
  }
  if (subPath === '/') {
    return basePath ? `${basePath}/` : '/';
  }
  return `${basePath}${subPath}`;
}
