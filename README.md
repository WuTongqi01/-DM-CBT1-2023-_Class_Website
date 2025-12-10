<div align="center">

<h1>Class Website Project: To Youth - 23 Digital Media Class 1 (Single Page Version)</h1>

<p>
  <a href="README.md">English</a> |
  <a href="README.zh-CN.md">简体中文</a>
</p>

</div>

> -DM-CBT1-2023-
> Single Page Class Website GitHub Repository for Class 1 of Digital Media College Preparatory Program, Grade 2023, Qingsu Vocational Secondary School, Chengdu, Sichuan Province

<img src="image/other-image/background.jpg" alt="Project Background Image" title="Project background">

## Project Overview

This project is the single-page class website for **Class 1 of the Digital Media College Preparatory Program, Grade 2023** at Qingsu Vocational Secondary School in Chengdu, Sichuan Province. The website adopts a Single Page Application (SPA) design, with all main content integrated into a single HTML file, achieving page switching through smooth scrolling and navigation. The website aims to document the class's growth journey, showcase its achievements, and provide a digital space for class members to share memories.

## Project Structure

```
-DM-CBT1-2023-_Class_Website_SPA/
│
├── HTML Pages/
│   ├── index.html          # Auto-redirect page, redirects to main.html
│   ├── main.html           # Single page main website (contains all main content)
│   └── about.html          # About Us page (separate page)
│
├── Styles & Scripts/
│   ├── main.css            # Main stylesheet
│   └── main.js             # JavaScript functionality file (includes smart navigation, countdown, etc.)
│
├── Image Resources/
│   └── image/
│       ├── other-image/    # General image resources
│       ├── student-image/  # Student photos (format: stuimg##.jpg)
│       └── teacher-image/  # Teacher photos
│
├── LICENSE                 # MIT License
│
├── README.md               # Project documentation (English)
└── README.zh-CN.md         # Project documentation (Chinese)
```

## Features

### Single Page Design
- **Single Page Application Architecture**: All main content integrated into a single HTML file
- **Smooth Scroll Navigation**: Achieved through anchor links for smooth scrolling to specific sections
- **No-refresh Page Switching**: Provides a native app-like user experience

### Intelligent Navigation System
- **Scroll-responsive Navigation Bar**: Automatically hides when scrolling down, shows when scrolling up
- **Hover Display Function**: Shows navigation bar on mouse hover
- **Smart Background Transparency**: Adjusts navigation bar transparency based on scroll position
- **Top Hover Zone**: Reserved hover area at the top for easy navigation bar access

### Interactive Functions
- **Real-time Gaokao Countdown**: Target date: June 7, 2026
- **Dynamic Time Display**: Real-time display of current date and time
- **Smart Navigation Highlighting**: Automatically highlights current section based on scroll position
- **Cross-page Navigation Sync**: Synchronizes navigation states between main.html and about.html

### Content Modules
1. **Homepage** – Class welcome message, Gaokao countdown, class highlights
2. **Class Profile** – Class history and development journey
3. **Class Members** – Information about current teachers, former teachers, class committee, and students
4. **Class Activities** – Activity timeline (under development)
5. **Class Photo Album** – Photo gallery (under development)
6. **About Us** – Separate page containing website development information and resource downloads

## Technical Implementation

- **Frontend Technologies**: HTML5, CSS3, JavaScript (ES6)
- **Architecture Design**: Single Page Application (SPA)
- **Layout Methods**: Flexbox, CSS Grid
- **Interactive Effects**: Implemented with native JavaScript (no third-party library dependencies)
- **Responsive Design**: Fully responsive, adaptable to all devices
- **Performance Optimization**: Local resource loading, optimized loading speed

## Installation & Usage

### Local Operation
1. Download the project files locally
2. Ensure the file structure is complete
3. Open `index.html` or `main.html` in a browser

### File Deployment
1. Maintain the existing file structure
2. Upload to a web server supporting static files
3. Access via the server address

### Image Resource Management
- Student photos stored in `image/student-image/`, naming format: `stuimg##.jpg`
- Teacher photos stored in `image/teacher-image/`, naming format: `teacherimg##.jpg`
  - Format for current teachers: `teacherimgn##.jpg`
  - Format for former teachers: `teacherimgb##.jpg`
- General images stored in `image/other-image/`

## Configuration & Customization

### Modifying Class Information
Edit corresponding sections in the `main.html` file:
- Homepage content – Modify welcome messages and class features
- Class profile – Update class history information
- Class members – Modify teacher and student information
- Class activities – Add activity timeline content
- Class photo album – Set up photo gallery

Edit the `about.html` file:
- About Us content – Modify creator's notes and class principles

### Style Adjustments
Edit the `main.css` file:
- Main color variable: `#128afa` (Blue Archive signature blue)
- Navigation bar styles: Adjust height, background, animation effects
- Responsive breakpoints: Adjust breakpoints in `@media` queries
- Component styles: Modify cards, countdown, timeline, etc.

### JavaScript Functionality
Edit the `main.js` file:
- Navigation bar behavior: Adjust hide/show logic
- Countdown settings: Modify target date and time
- Scroll detection: Adjust scroll thresholds and animation speed

## Single Page Features Detailed

### Navigation System
- **main.html**: Uses anchor links (#home, #about, etc.) for in-page navigation
- **about.html**: Separate page, but shares navigation bar state with main.html
- **Cross-page Navigation**: Returns from about.html to main.html with correct section jumping

### Scroll Behavior
- Intelligent scroll direction detection
- Hides navigation bar when scrolling down to maximize content area
- Shows navigation bar when scrolling up for easy navigation
- Immediate navigation bar display on mouse hover

### State Management
- Current section highlighting updates automatically with scrolling
- Cross-page navigation state synchronization
- Navigation bar display state memory

## Notes

### Resource Usage
- Some background images used in the project are sourced from the internet. For formal deployment, ensure you use compliant resources or replace them with original content.
- Student and teacher photos involve privacy; obtain relevant authorization before public deployment.
- List of already used resources:
  - `image/other-image/站娘破拆.gif` – Source: `https://kivo.wiki/`
  - `image/other-image/aboutus-background.jpg` – Source: `https://kivo.wiki/`
  - `image\other-image\background.jpg` – Source: `https://kivo.wiki/`
  - `image\other-image\P_施工中表情包.png` – Source: `https://kivo.wiki/`
  - `image\other-image\sd_model.gif` – Source: `https://kivo.wiki/`
  - `image\other-image\to-youth.png` – Source: `https://kivo.wiki/`
  - `image\student-image\stuimg00.jpg` – Source: `https://www.51yuansu.com/sc/sscnfbxhtd.html`
  - `image\teacher-image\bkfnb-w7mlq.jpg` – Source: `https://mp.weixin.qq.com/s`
  - `image\teacher-image\teacherimg01.jpg` – Source: `https://www.51yuansu.com/sc/sscnfbxhtd.html`

### Browser Compatibility
- Supports modern browsers (Chrome 60+, Firefox 55+, Safari 11+, Edge 79+)
- Single-page scrolling functionality may be limited in older browsers
- JavaScript functionality requires ES6 feature support

### Performance Considerations
- Single-page design reduces HTTP requests
- All CSS and JavaScript files are merged into single files
- Image resources are loaded on demand
- Responsive design ensures mobile device performance

### Project Status
- Some pages (Activities, Photo Album) are under development, using construction placeholders
- Class member information needs to be completed based on the actual situation
- Single-page navigation is fully implemented and tested

## School Information

This project is a student work from **Class 1 of the Digital Media College Preparatory Program, Grade 2023** at Qingsu Vocational Secondary School in Chengdu, Sichuan Province. The single-page design aims to provide a smoother user experience and a more modern website architecture, primarily used for internal class communication and commemoration.

## License Notice

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**To be kind · To be beautiful · To cherish youth**