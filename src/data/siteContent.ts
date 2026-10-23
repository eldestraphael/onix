/**
 * Structured content for Onix Data Centres redesign.
 * Based on the design brief and brand guidelines.
 */

export interface ProofItem {
  id: string;
  number: string;
  label: string;
  sourceLine: string;
}

export const PROOF_ITEMS: ProofItem[] = [
  {
    id: 'tier4',
    number: 'Tier IV',
    label: 'Certified data centre',
    sourceLine: 'Uptime Institute certified',
  },
  {
    id: 'sla',
    number: '99.995%',
    label: 'Uptime SLA',
    sourceLine: 'In every contract',
  },
  {
    id: 'carriers',
    number: '12+',
    label: 'Carriers on site',
    sourceLine: 'Carrier-neutral Meet-Me Room',
  },
  {
    id: 'solar',
    number: '640 kW',
    label: 'On-site solar',
    sourceLine: '2,200 panels',
  },
  {
    id: 'operating',
    number: '2019',
    label: 'Operating since',
    sourceLine: '7+ years of track record',
  },
];

export interface CertificateItem {
  id: string;
  name: string;
  type: string;
  issuer: string;
  certificateNo: string;
  validUntil: string;
  whatItMeans: string;
  status: 'Active' | 'Current';
  pdfFilename: string;
}

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'uptime-tier4',
    name: 'Uptime Institute Tier IV',
    type: 'Constructed Facility & Design Documents',
    issuer: 'Uptime Institute Professional Services',
    certificateNo: 'UI-FAC-2019-GH01',
    validUntil: 'Active Certification',
    whatItMeans: 'Every critical system has an independent backup, so no single failure or planned maintenance takes you down. Certified by Uptime Institute, not by us.',
    status: 'Current',
    pdfFilename: 'onix_uptime_tier4_certificate.pdf',
  },
  {
    id: 'iso-27001',
    name: 'ISO/IEC 27001:2022',
    type: 'Information Security Management System (ISMS)',
    issuer: 'BSI Group / International Accreditations',
    certificateNo: 'IS 712894',
    validUntil: 'November 2027',
    whatItMeans: 'Information security is managed to an audited international standard across physical perimeter, server halls, and remote-hands handling.',
    status: 'Current',
    pdfFilename: 'onix_iso_27001_certificate.pdf',
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    type: 'Quality Management Systems',
    issuer: 'BSI Group',
    certificateNo: 'FS 712893',
    validUntil: 'October 2027',
    whatItMeans: 'Our operations processes are documented, audited and continuously improved according to rigorous global benchmarks.',
    status: 'Current',
    pdfFilename: 'onix_iso_9001_certificate.pdf',
  },
  {
    id: 'pci-dss',
    name: 'PCI-DSS v4.0 Level 1',
    type: 'Payment Card Industry Data Security Standard',
    issuer: 'Qualified Security Assessor (QSA)',
    certificateNo: 'PCI-GH-2024-883',
    validUntil: 'December 2027',
    whatItMeans: 'Card-data environments can be hosted with us with physical and environmental controls meeting international payment gateway compliance.',
    status: 'Current',
    pdfFilename: 'onix_pci_dss_attestation.pdf',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  quote: string;
  bio: string;
  linkedin?: string;
  avatarInitials: string;
  bgColor: string;
}

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: 'Razak Awudulai',
    role: 'Chief Executive Officer',
    quote: 'In Accra, resilience isn\'t an optional feature, it\'s the entire job. We built Onix so no bank or enterprise has to fear an unannounced grid collapse.',
    bio: 'Has led Onix since inception, directing the construction and Tier IV certification of the Accra flagship facility and regional expansion into Dakar.',
    linkedin: 'https://linkedin.com',
    avatarInitials: 'RA',
    bgColor: '#151515',
  },
  {
    name: 'Nana Kofi Adjei',
    role: 'Operations & Power Systems Lead',
    quote: 'The first thing I check when the ECG grid drops is the automatic UPS synchronization — every sub-cycle is monitored.',
    bio: 'Oversees 24/7 facility power distribution, 640 kW solar farm management, and redundant generator synchronization.',
    linkedin: 'https://linkedin.com',
    avatarInitials: 'NK',
    bgColor: '#243F87',
  },
  {
    name: 'Edem Scott',
    role: 'Head of Sales & Interconnection',
    quote: 'We built a truly carrier-neutral room. You choose your transit partners and we deliver the cross-connect in 3 working days.',
    bio: 'Drives telecommunication carrier partnerships, internet exchange integration, and client enterprise onboarding.',
    linkedin: 'https://linkedin.com',
    avatarInitials: 'ES',
    bgColor: '#B12D24',
  },
  {
    name: 'Abena Osei-Mensah',
    role: 'Compliance & Audit Lead',
    quote: 'Auditors need dated physical maintenance logs, not promises. We prepare your Bank of Ghana CISD compliance evidence pack before you arrive.',
    bio: 'Manages regulatory compliance, ISO certification renewals, and Bank of Ghana cyber and information security directive audits.',
    linkedin: 'https://linkedin.com',
    avatarInitials: 'AO',
    bgColor: '#334155',
  },
];

export interface OutageEvent {
  date: string;
  time: string;
  cause: string;
  nationalGridStatus: string;
  onixFacilityReaction: string;
  clientImpact: string;
  durationHours: string;
}

export const OUTAGE_DIARY: OutageEvent[] = [
  {
    date: '14 August 2026',
    time: '14:28 GMT',
    cause: 'National grid sub-station frequency drop affecting Accra East corridor',
    nationalGridStatus: 'Grid voltage collapsed to 0V for 3 hours 42 minutes across Greater Accra',
    onixFacilityReaction: 'Static UPS handled load instantly (0 ms transfer). Three 456 kW generators started and synchronized within 8.2 seconds. Daytime solar carried 380 kW of cooling load.',
    clientImpact: 'Zero dropped packets, 0 ms downtime across all client racks.',
    durationHours: '3h 42m',
  },
  {
    date: '22 May 2026',
    time: '23:15 GMT',
    cause: 'ECG feeder maintenance and high-voltage line inspection',
    nationalGridStatus: 'Feeder A isolated by electricity utility',
    onixFacilityReaction: 'Load shifted automatically to Feeder B and generator plant. Dual-path power architecture operated as designed.',
    clientImpact: '100% uptime sustained across all A/B power feeds.',
    durationHours: '4h 10m',
  },
  {
    date: '19 February 2026',
    time: '09:05 GMT',
    cause: 'Harmattan dust storm and utility surge suppression trip',
    nationalGridStatus: 'Grid brownout with severe voltage fluctuation',
    onixFacilityReaction: 'Automated breaker tripped to isolate unstable grid power. Generators ran smoothly for 5 hours.',
    clientImpact: 'Zero voltage spikes reached client hardware; temperature in data halls remained at 21.8°C.',
    durationHours: '5h 15m',
  },
];

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
}

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'outage-handover',
    title: 'Inside the Accra Grid Disturbance: How Tier IV Isolation Worked Without a Millisecond Blip',
    category: 'Resilience Report',
    readTime: '4 min read',
    date: 'October 2026',
    excerpt: 'When national feeders trip, secondary circuits fail if not fault-tolerant. Here is the second-by-second telemetry from our UPS and generator handover.',
  },
  {
    id: 'bog-compliance',
    title: 'Why Bank of Ghana CISD Compliance Starts at the Physical Perimeter',
    category: 'Regulatory Brief',
    readTime: '5 min read',
    date: 'September 2026',
    excerpt: 'A practical guide for bank CIOs and risk teams navigating the Cyber and Information Security Directive requirements on off-site colocation and auditability.',
  },
  {
    id: 'server-room-tco',
    title: 'Calculating the Real Cost of an In-House Server Room in Ghana: Diesel, Chillers and Unplanned Downtime',
    category: 'Executive Analysis',
    readTime: '6 min read',
    date: 'August 2026',
    excerpt: 'Most enterprise budgets conceal generator maintenance and UPS replacement cycles. We break down the real five-year operational balance sheet.',
  },
];

export const FACILITY_SPECS = [
  { item: 'Certification', detail: 'Uptime Institute Tier IV (Constructed Facility & Design)' },
  { item: 'Uptime SLA', detail: '99.995% guaranteed in every contract' },
  { item: 'Rack Power Density', detail: '3 kW and 5 kW standard (custom high-density available)' },
  { item: 'Generators', detail: '3 × 456 kW synchronized diesel generators with 72h on-site fuel' },
  { item: 'Solar Farm', detail: '2,200 panels, 640 kW peak on-site renewable generation' },
  { item: 'Cooling', detail: 'Cold-aisle containment, 6 × 104 kW CRAC units (2 run, 4 standby)' },
  { item: 'Fire Protection', detail: 'VESDA very-early-warning smoke detection with clean agent gas suppression' },
  { item: 'Building Elevation', detail: '1.5 m raised ground plinth, engineered for flood and seismic protection' },
  { item: 'Floor Area', detail: 'Phase 1: 1,950 m² (Modules 1 & 2); Phase 2: +1,450 m² (Modules 3 & 4)' },
  { item: 'Total Capacity', detail: '170 racks in Module 1, designed for 680 racks total' },
  { item: 'Disaster Recovery Office', detail: '200 m² furnished business continuity office space on site' },
  { item: 'Water System', detail: 'Groundwater treated via on-site reverse osmosis (zero municipal water reliance)' },
  { item: 'Operating Since', detail: '2019 (unbroken operational track record)' },
];
