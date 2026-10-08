# GatuteoMidterm — CPU College of Computer Studies

A Vue 3 single-page website built from the supplied GatuteoMidterm starter. The original Vite, Vue Router, assets, components, and views organization is retained. No new application dependencies were added.

## Run the project

1. Install Node.js **24.12 or newer**, or a supported Node 22 release **22.18 or newer**.
2. Extract the ZIP and open the `GatuteoMidterm` folder in VS Code.
3. Open a terminal in that folder and run:

```sh
npm install
npm run dev
```

Open the localhost URL printed in the terminal. Stop the server with `Ctrl+C`.

Build and preview the production version:

```sh
npm run build
npm run preview
```

The `dist` folder contains the production website. Upload its contents to static hosting. Run the app through Vite or hosting; opening the source `index.html` directly in a file browser will not run the project.

## Project structure

```text
GatuteoMidterm/
├── .gitignore
├── .oxfmtrc.json
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── public/
│   └── ccs-icon.png
├── README.md
├── ASSET_SOURCES.json
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── assets/
│   │   ├── main.css
│   │   ├── data/
│   │   │   └── college.js
│   │   └── images/
│   │       └── CCS logos and personnel portraits
│   ├── components/
│   │   ├── FacultySection.vue
│   │   ├── HeroSection.vue
│   │   ├── PartnersSection.vue
│   │   ├── ProgramsSection.vue
│   │   ├── SectionHeading.vue
│   │   ├── SiteFooter.vue
│   │   ├── SiteNavbar.vue
│   │   └── UiIcon.vue
│   ├── router/
│   │   └── index.js
│   └── views/
│       └── HomeView.vue
├── vite.config.js
└── dist/ (production build)
```

## Implemented requirements

- Hero with the CCS logo, college introduction, and links to the programs and faculty.
- BSIT, BSCS, BSDMIA, and BLIS logos, degree names, descriptions, and expandable program details.
- A sourced directory of 17 people, official individual portraits, published qualifications, and provisional department groupings.
- Nine organizations featured in the official partnerships and memberships directory.
- Sticky navigation with all four menu links, smooth scrolling, active-section highlighting, and a mobile menu.
- Responsive mobile, tablet, and desktop layouts, including a single-column program layout on narrow phones.
- Keyboard-accessible controls, a skip link, image descriptions, and reduced-motion support.

## Personnel information to confirm before submission

**The current organizational chart outside the CCS Office was not supplied. This is a documented public-source snapshot, not a confirmed complete 2026 roster.**

CPU's SY 2024–2025 administration directory lists Rose Leah Joy A. Ojacastro as Acting Chairperson for IT/IS and Marjee Rose B. Parreño as Chairperson for BSCS/BSDMIA. Those newer roles are used. Other program assignments follow the college directory and remain provisional.

Published credentials are displayed without claiming they are independently confirmed current highest degrees. Four undergraduate qualifications are dated as coming from the 2018–2019 directory. Qualifications for A.M.P. Latter P. Taasan, Chriselda Elaine Ador, and Donna May Rivera remain awaiting confirmation. Names are preserved as published, with Cambronero's Jr. suffix supported by the university directory and Chrislyn Calsado Castaño's expanded middle name supported by CPU's service award listing. Initials and abbreviations still need confirmation if the instructor requires fully expanded names.

The sources do not establish whether every person is still assigned to CCS. Lennon D. Pajar and Lesley Joy L. Dignadice have additional university appointments in the newer administration directory. The website explains these differences under **About this directory & its sources**.

To finalize the roster:

1. Compare every name and department with the current office chart.
2. Add missing current personnel and remove former personnel.
3. Confirm full names and each highest completed degree with CCS.
4. Update `src/assets/data/college.js` and add new portraits to `src/assets/images`.

Program images are the student-organization logos published alongside the programs on the CCS website: ITSO, CSS, MIDAS, and LISSO. They are not newly designed official degree seals. Partner logos come from the CCS linkages directory; current agreement and membership status needs college confirmation.

## Edit the website

Edit `src/assets/data/college.js` to update programs, personnel, departments, partners, or contacts. Put images in `src/assets/images` and use their exact filename with the existing `image()` helper. Set `qualification: null` when no qualification has been confirmed or published; `qualificationNote` can record a dated source.

Edit `src/assets/main.css` for colors, typography, spacing, and responsive breakpoints. Edit each section component for layout or behavior changes. `App.vue` is the shared page shell.

## Smooth section navigation

Navigation follows the supplied Vue Router Scroll-Anchor Navigation guide:

```vue
<RouterLink to="/#programs">Programs Offered</RouterLink>
<section id="programs">...</section>
```

The router returns `{ el: to.hash, top: 104, behavior: 'smooth' }`. The offset keeps headings visible below the navigation. Browser Back/Forward restores saved positions. Reduced-motion users receive immediate scrolling, and global CSS provides a smooth-scroll fallback.

## File-by-file changes

- `App.vue`: replaced starter content with navigation, router outlet, footer, and skip link.
- `main.js`: retained app initialization and imported the shared stylesheet.
- `router/index.js`: registered the home view and added hash scrolling, header offset, history restoration, and reduced-motion handling.
- `views/HomeView.vue`: composed the four required sections.
- `components/SiteNavbar.vue`: added branded navigation, a mobile menu, active-section tracking, and observer cleanup.
- `components/HeroSection.vue`: added the CCS identity, introduction, and working section links.
- `components/ProgramsSection.vue`: rendered program data, accessible disclosures, and official information links.
- `components/FacultySection.vue`: grouped personnel, added department filtering, and documented source limitations.
- `components/PartnersSection.vue`: added partner logos, attribution, and a college email contact.
- `components/SiteFooter.vue`: added location, email, section navigation, and back-to-top behavior.
- `components/SectionHeading.vue` and `components/UiIcon.vue`: centralized repeated heading and icon markup.
- `assets/data/college.js`: centralized editable content, images, and source URLs.
- `assets/main.css`: centralized design tokens, layout, responsive styling, and motion preferences.
- `index.html` and `public/ccs-icon.png`: added a relevant title, description, language, theme color, and favicon.
- `package.json`, `jsconfig.json`, and `vite.config.js`: retained the supplied dependencies and Vite configuration.

## Verification

The production Vite build passed. All 10 Vue components compiled. Automated checks covered section targets, local image references, smooth scrolling, saved scroll positions, and reduced-motion behavior. A server-rendered page check covered section IDs, personnel portraits, program links, and partner content.

Browser-based visual and interaction review was unavailable in the build environment. Before submission, check the live site on a phone and desktop, try all menu links and department filters, expand each program, and check browser Back/Forward. Also confirm that the instructor can access the hosting URL: the managed live deployment starts private to its owner.

## Sources and attribution

Content and images were reviewed on 8 October 2026. These public source snapshots do not establish that an older page's content is current.

- [CCS website](https://ccs.cpu.edu.ph/)
- [Academic programs](https://ccs.cpu.edu.ph/academic-programs/)
- [BSIT](https://ccs.cpu.edu.ph/information-technology/)
- [BSCS](https://ccs.cpu.edu.ph/computer-science/)
- [BSDMIA](https://ccs.cpu.edu.ph/digital-media-and-interactive-arts/)
- [BLIS](https://ccs.cpu.edu.ph/library-information-science/)
- [CCS personnel and portraits](https://ccs.cpu.edu.ph/faculty-and-staff/)
- [CPU SY 2024–2025 administration directory](https://cpu.edu.ph/about-us/faculty-and-staff-directory/)
- [CPU 2018–2019 personnel directory](https://cpu.edu.ph/faculty-and-staff-directory/)
- [CPU service awardees](https://cpu.edu.ph/news/cpu-recognizes-service-awardees/)
- [CCS partnerships and memberships](https://ccs.cpu.edu.ph/linkages/)
- Supplied `Vue+Router+Scroll-Anchor+Navigation.pdf` course guide.

Exact asset URLs are in `ASSET_SOURCES.json`. Logos and portraits belong to their respective organizations or owners and are used for the requested academic mockup. This is a student project, not the official CPU website.
