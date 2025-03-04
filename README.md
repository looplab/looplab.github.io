<h1 align=center>Bookworm Light Astro</h1>
<p align=center>Bookworm Light is a feature-rich, minimal, highly customizable, easy-to-use free Astro blog theme.</p>
<h2 align="center"> <a target="_blank" href="https://bookworm-light-astro.vercel.app/" rel="nofollow">👀Demo</a> | <a  target="_blank" href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fbookworm-light-astro.vercel.app%2F&form_factor=desktop">Page Speed (100%)🚀</a>
</h2>

<p align=center>
  <a href="https://github.com/withastro/astro/releases/tag/astro%404.3.2" alt="Contributors">
    <img src="https://img.shields.io/static/v1?label=ASTRO&message=4.3&color=000&logo=astro" />
  </a>

  <a href="https://github.com/themefisher/bookworm-light-astro/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/themefisher/bookworm-light-astro" alt="license"></a>

  <img src="https://img.shields.io/github/languages/code-size/themefisher/bookworm-light-astro" alt="code size">

  <a href="https://github.com/themefisher/bookworm-light-astro/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/themefisher/bigspring-light-astro" alt="contributors"></a>
</p>

![bookworm-light](https://demo.gethugothemes.com/thumbnails/bookworm-light.png)

Bookworm Light is a minimal multi-author free Astro blog theme which is perfect for any kind of blog website. Whether you're interested in food, beauty, travel, photography, lifestyle, fitness, health, or other topics, this theme is a great fit. The theme is super fast and SEO friendly which makes it easier for your content to be discovered by search engines.

## 🔑Key Features

- 🎨 Highly Customizable (Color, Font, Menu, Social Links, SEO Meta Tags, etc.)
- 👥 Multi-Author Support
- 📚 Authors Page
- 👤 Author Single Page
- 🔍 Search Functionality with FuseJS
- 🏷️ Tags and Categories Support
- 📲 Post Social Share Option
- 🔗 Similar Post Suggestions
- ⚡ Fast by Default (95+ Google PageSpeed Score)
- ⚙️ Netlify Settings Pre-configured
- 📬 Contact Form Support
- 🌅 Support OG Image
- ✍️ Write and Update Content in Markdown / MDX
- 📚 MDX Components Auto Import
- 📝 Includes Draft Pages and Posts
- 🚀 Built with Tailwind CSS Framework
- 📱 Fully Responsive on Desktops, Tablets, and Smartphones
- 🔍 SEO Friendly

<!-- installation -->

## 🔧Installation

After downloading the template, you have some prerequisites to install. Then you can run it on your localhost. You can view the package.json file to see which scripts are included.

### ⚙️Install prerequisites (once for a machine)

- **Node Installation:** [Install node js](https://nodejs.org/en/download/) [Recommended LTS version]

### 🖥️Local setup

After successfully installing those dependencies, open this template with any IDE [[VS Code](https://code.visualstudio.com/) recommended], and then open the internal terminal of IDM [vs code shortcut <code>ctrl/cmd+\`</code>]

- Install dependencies

```
npm install
```

- Run locally

```
npm run dev
```

After that, it will open up a preview of the template in your default browser, watch for changes to source files, and live-reload the browser when changes are saved.

## 🔨Production Build

After finishing all the customization, you can create a production build by running this command.

```
npm run build
```

## 🚀 Continuous Deployment with GitHub Actions

This repository is set up with a GitHub Actions workflow to deploy an Astro site automatically to GitHub Pages, supporting both production and preview environments.

### Deployment Branches
- **Production (`main` branch)**: When changes are pushed to the `main` branch, the site is built and deployed to the `gh-pages` branch, which serves the production site at `https://<username>.github.io/<repo>/`.
- **Preview Branches (e.g., `preview` or `dev`)**: Changes pushed to branches like `preview` or `dev` are deployed as temporary sites. Each preview branch gets its own unique GitHub Pages URL in the format `https://<username>.github.io/<repo>/<branch>/`, allowing you to view changes without affecting the main production site.

### How the Workflow Works

1. **Trigger**: The workflow runs on pushes to the `main`, `preview`, and `dev` branches or when manually triggered.
2. **Build Process**: The site is built using the latest Node.js (v18), with the output placed in the `dist` directory.
3. **Deployment**:
   - **Production Deployment**: If the branch is `main`, the workflow deploys to the `gh-pages` branch, which is the default branch for GitHub Pages.
   - **Preview Deployment**: For any other specified branch (like `preview` or `dev`), the workflow deploys directly to that branch, creating a unique GitHub Pages URL for previews.

### Viewing the Site
- **Production**: [https://<username>.github.io/<repo>/](https://<username>.github.io/<repo>/)
- **Preview** (for `preview` branch): [https://<username>.github.io/<repo>/preview/](https://<username>.github.io/<repo>/preview/)

This setup allows seamless deployment for both live and preview environments, supporting agile testing and collaboration.

<!-- reporting issue -->

## 🐞Reporting Issues

We use GitHub Issues as the official bug tracker for this Template. Please Search [existing issues](https://github.com/themefisher/bookworm-light-astro/issues). It’s possible someone has already reported the same problem.
If your problem or idea has not been addressed yet, feel free to [open a new issue](https://github.com/themefisher/bookworm-light-astro/issues).

<!-- licence -->

## 📄License

Copyright (c) 2023 - Present, Designed & Developed by [Themefisher](https://themefisher.com)

**Code License:** Released under the [MIT](https://github.com/themefisher/bookworm-light-astro/blob/main/LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their license, we don't have permission to share those images.

## 👨‍💻Need Custom Development Services?

Besides developing beautifully designed and blazing-fast themes, we help businesses create fast, performance-focused, scalable & secure websites based on NextJs, Hugo, Astro, etc.

If you need a custom theme, theme customization, or complete website development services from scratch you can [Hire Us](https://themefisher.com/contact).
