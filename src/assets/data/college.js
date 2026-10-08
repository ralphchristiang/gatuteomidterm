// Official images are bundled locally so the site does not depend on hotlinked assets.
const images = import.meta.glob('../images/*', { eager: true, query: '?url', import: 'default' })
const image = (filename) => images[`../images/${filename}`]

export const college = {
  name: 'College of Computer Studies',
  university: 'Central Philippine University',
  email: 'ccssec@cpu.edu.ph',
  address: 'Mary Thomas Hall, Lopez Jaena Street, Jaro, Iloilo City, Philippines',
  logo: image('ccs-logo.png'),
  heroLogo: image('ccs-large.png'),
}

export const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'programs', label: 'Programs Offered' },
  { id: 'faculty', label: 'Faculty & Staff' },
  { id: 'partnerships', label: 'Partnerships & Memberships' },
]

export const programs = [
  {
    id: 'bsit',
    acronym: 'BSIT',
    title: 'Information Technology',
    degree: 'Bachelor of Science in Information Technology',
    logo: image('bsit-logo.png'),
    organization: 'Information Technology Student Organization (ITSO)',
    theme: 'blue',
    focus: 'Build. Connect. Secure.',
    description:
      'Turn technology into practical solutions. Learn to develop, integrate, and manage the systems and infrastructure that organizations rely on.',
    topics: [
      'Web & application development',
      'Networks & information security',
      'Database & systems administration',
    ],
    url: 'https://ccs.cpu.edu.ph/information-technology/',
  },
  {
    id: 'bscs',
    acronym: 'BSCS',
    title: 'Computer Science',
    degree: 'Bachelor of Science in Computer Science',
    logo: image('bscs-logo.png'),
    organization: 'Computer Science Society (CSS)',
    theme: 'green',
    focus: 'Think. Solve. Innovate.',
    description:
      'Explore the foundations of computing. Develop your understanding of algorithms, software, and hardware to solve problems through thoughtful design.',
    topics: [
      'Algorithms & data structures',
      'Software design & development',
      'Computing theory & research',
    ],
    url: 'https://ccs.cpu.edu.ph/computer-science/',
  },
  {
    id: 'bsdmia',
    acronym: 'BSDMIA',
    title: 'Digital Media & Interactive Arts',
    degree: 'Bachelor of Science in Digital Media and Interactive Arts',
    logo: image('bsdmia-logo.png'),
    organization: 'Modern Interactive Digital Artists Society (MIDAS)',
    theme: 'gold',
    focus: 'Imagine. Design. Create.',
    description:
      'Bring creative ideas to life through applied arts and digital media. Build your artistic skills for entertainment, education, and visual communication.',
    topics: [
      'Digital art & visual storytelling',
      'Interactive media & design',
      'Creative production & collaboration',
    ],
    url: 'https://ccs.cpu.edu.ph/digital-media-and-interactive-arts/',
  },
  {
    id: 'blis',
    acronym: 'BLIS',
    title: 'Library & Information Science',
    degree: 'Bachelor of Library and Information Science',
    logo: image('blis-logo.png'),
    organization: 'Library and Information Science Student Organization (LISSO)',
    theme: 'violet',
    focus: 'Discover. Organize. Share.',
    description:
      'Connect people with knowledge. Learn to develop, organize, and manage information resources across print, electronic, and digital formats.',
    topics: [
      'Information organization',
      'Library & digital resource management',
      'Information services & research',
    ],
    url: 'https://ccs.cpu.edu.ph/library-information-science/',
  },
]

export const departments = [
  { id: 'leadership', label: 'College Leadership', shortLabel: 'Leadership' },
  { id: 'it-is', label: 'Information Technology & Information Systems', shortLabel: 'IT & IS' },
  {
    id: 'cs-dmia',
    label: 'Computer Science & Digital Media and Interactive Arts',
    shortLabel: 'CS & DMIA',
  },
  { id: 'library', label: 'Library & Information Science', shortLabel: 'Library Science' },
  { id: 'support', label: 'Administration & Support Services', shortLabel: 'Support Staff' },
]

// This is a sourced directory snapshot, not a confirmed 2026 office roster.
// Prefer CPU's SY 2024–2025 administration directory for conflicting leadership roles.
// Null means the source does not publish the qualification; never infer a degree.
export const personnel = [
  {
    id: 'quijano',
    name: 'Ma. Christina A. Quijano',
    department: 'leadership',
    role: 'Dean, College of Computer Studies',
    qualification: 'Master of Science in Computer Science',
    photo: image('quijano-e1637132499305.png'),
  },
  {
    id: 'ojacastro',
    name: 'Rose Leah Joy A. Ojacastro',
    department: 'it-is',
    role: 'Acting Chairperson, IT & IS',
    qualification: 'Master of Science in Computer Science',
    photo: image('ojacastro-754x1024.jpg'),
  },
  {
    id: 'balontong',
    name: 'Rea P. Balontong',
    department: 'it-is',
    role: 'Faculty · IT & IS',
    qualification: 'Master of Business Administration',
    photo: image('balontong-754x1024.jpg'),
  },
  {
    id: 'beldia',
    name: 'Leo Paulo B. Beldia',
    department: 'it-is',
    role: 'Faculty · IT & IS',
    qualification: 'Bachelor of Science in Computer Science',
    qualificationNote: 'Listed in the 2018–2019 directory; current highest degree unconfirmed.',
    photo: image('beldia-754x1024.jpg'),
  },
  {
    id: 'dignadice',
    name: 'Lesley Joy L. Dignadice',
    department: 'it-is',
    role: 'Faculty · IT & IS',
    qualification: 'Master of Business Administration',
    photo: image('dignadice-1-754x1024.jpg'),
  },
  {
    id: 'eregia',
    name: 'Rodolfo C. Eregia, Jr.',
    department: 'it-is',
    role: 'Faculty · IT & IS',
    qualification: 'Bachelor of Science in Information Technology',
    qualificationNote: 'Listed in the 2018–2019 directory; current highest degree unconfirmed.',
    photo: image('eregia-754x1024.jpg'),
  },
  {
    id: 'jardeleza',
    name: 'Donie S. Jardeleza',
    department: 'it-is',
    role: 'Faculty · IT & IS',
    qualification: 'Master of Science in Computer Science',
    photo: image('jardleza-754x1024.jpg'),
  },
  {
    id: 'montano',
    name: 'Antonio M. Montaño, Jr.',
    department: 'it-is',
    role: 'Faculty · IT & IS',
    qualification: 'B.S.C. (WIT; specialization not published)',
    qualificationNote: 'Listed in the 2018–2019 directory; current highest degree unconfirmed.',
    photo: image('montano-754x1024.jpg'),
  },
  {
    id: 'parreno',
    name: 'Marjee Rose B. Parreño',
    department: 'cs-dmia',
    role: 'Chairperson, BSCS & BSDMIA',
    qualification: 'Master of Science in Computer Science; Master of Business Administration',
    photo: image('parreno-754x1024.jpg'),
  },
  {
    id: 'cambronero',
    name: 'Pedro Peter Rhys B. Cambronero, Jr.',
    department: 'cs-dmia',
    role: 'Faculty · Computer Science',
    qualification: 'Master of Science in Computer Science',
    photo: image('cambronero-754x1024.jpg'),
  },
  {
    id: 'sapul',
    name: 'Ma. Sheila C. Sapul',
    department: 'cs-dmia',
    role: 'Faculty · Computer Science',
    qualification: 'Doctor of Philosophy (field not published)',
    photo: image('sapul-754x1024.jpg'),
  },
  {
    id: 'cantel',
    name: 'Ana Mae B. Cantel',
    department: 'library',
    role: 'Program Coordinator, BLIS & MLIS',
    qualification: 'Master of Library and Information Science',
    photo: image('cantel-754x1024.jpg'),
  },
  {
    id: 'pajar',
    name: 'Lennon D. Pajar',
    department: 'support',
    role: 'Computer Laboratory Coordinator (CCS directory)',
    qualification: 'Master of Science in Computer Science',
    photo: image('pajar-754x1024.jpg'),
  },
  {
    id: 'castano',
    name: 'Chrislyn Calsado Castaño',
    department: 'support',
    role: 'Secretary',
    qualification: 'B.S.C. (CPU; specialization not published)',
    qualificationNote: 'Listed in the 2018–2019 directory; current highest degree unconfirmed.',
    photo: image('castano-754x1024.jpg'),
  },
  {
    id: 'taasan',
    name: 'A.M.P. Latter P. Taasan',
    department: 'support',
    role: 'Computer Laboratory Technician',
    qualification: null,
    photo: image('taasan-754x1024.jpg'),
  },
  {
    id: 'ador',
    name: 'Chriselda Elaine Ador',
    department: 'support',
    role: 'Guidance Counselor',
    qualification: null,
    photo: image('ador-754x1024.jpg'),
  },
  {
    id: 'rivera',
    name: 'Donna May Rivera',
    department: 'support',
    role: 'Library Liaison Officer',
    qualification: null,
    photo: image('rivera-754x1024.png'),
  },
]

export const partners = [
  {
    name: 'Oracle Academy',
    category: 'Academic collaboration',
    logo: image('Oracle_Academy_rgb.png'),
  },
  {
    name: 'Cisco Networking Academy',
    category: 'Academic collaboration',
    logo: image('1024px-Cisco_academy_logo.svg_-300x300.png'),
  },
  { name: 'Acer', category: 'Industry connection', logo: image('acer-300x300.jpg') },
  {
    name: 'Huawei ICT Academy',
    category: 'Academic collaboration',
    logo: image('huawei-academy-logo-300x300.jpg'),
  },
  {
    name: 'Philippine Society of Information Technology Educators',
    shortName: 'PSITE',
    category: 'Professional membership',
    logo: image('inal-black-300x127-1.png'),
  },
  { name: 'GoveSmart', category: 'Industry connection', logo: image('govesmart-1-300x76.jpg') },
  { name: 'Mayad', category: 'Creative industry connection', logo: image('mayad-300x55.png') },
  { name: 'Lasortech', category: 'Industry connection', logo: image('LasorTech-300x89.jpg') },
  {
    name: 'Startup Project Ventures',
    category: 'Industry connection',
    logo: image('startupproject.jpg'),
  },
]

export const sources = {
  faculty: 'https://ccs.cpu.edu.ph/faculty-and-staff/',
  universityDirectory: 'https://cpu.edu.ph/about-us/faculty-and-staff-directory/',
  historicalDirectory: 'https://cpu.edu.ph/faculty-and-staff-directory/',
  serviceAwards: 'https://cpu.edu.ph/news/cpu-recognizes-service-awardees/',
  linkages: 'https://ccs.cpu.edu.ph/linkages/',
  programs: 'https://ccs.cpu.edu.ph/academic-programs/',
}
