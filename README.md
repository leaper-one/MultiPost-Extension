# MultiPost

> A browser extension that helps users publish content to multiple social media platforms with one click.

![GitHub License GitHub许可证](https://img.shields.io/github/license/leaper-one/MultiPost-Extension) ![GitHub Repo stars GitHub星星](https://img.shields.io/github/stars/leaper-one/MultiPost-Extension) ![GitHub commit activity GitHub提交活动](https://img.shields.io/github/commit-activity/m/leaper-one/MultiPost-Extension) [![Website 网站](https://img.shields.io/website?url=https%3A%2F%2Fmultipost.app)](https://multipost.app)

[English](README.md) | [中文](docs/README-zh.md) | [日本語](docs/README-jp.md) | [Français](docs/README-fr.md) | [한국어](docs/README-kr.md)

---

## Installation

- [![Chrome Web Store Version Chrome网上商店版本](https://img.shields.io/chrome-web-store/v/dhohkaclnjgcikfoaacfgijgjgceofih)](https://chromewebstore.google.com/detail/multipost/dhohkaclnjgcikfoaacfgijgjgceofih) ![Chrome Web Store Users Chrome网上商店用户](https://img.shields.io/chrome-web-store/users/dhohkaclnjgcikfoaacfgijgjgceofih) ![Chrome Web Store Last Updated](https://img.shields.io/chrome-web-store/last-updated/dhohkaclnjgcikfoaacfgijgjgceofih)
- [![](https://img.shields.io/badge/dynamic/json?label=edge%20add-on&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fckoiphiceimehjkolnfffgbmihoppgjg)](https://microsoftedge.microsoft.com/addons/detail/multipost/ckoiphiceimehjkolnfffgbmihoppgjg) [![](https://img.shields.io/badge/dynamic/json?label=users&query=%24.activeInstallCount&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fckoiphiceimehjkolnfffgbmihoppgjg)](https://microsoftedge.microsoft.com/addons/detail/multipost/ckoiphiceimehjkolnfffgbmihoppgjg)
<!-- ![Edge add-on last updated](https://img.shields.io/badge/dynamic/json?label=last%20updated&query=%24.lastUpdateDate&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fckoiphiceimehjkolnfffgbmihoppgjg) -->

## Key Features

- Support synchronous posting to over 10 mainstream platforms including Zhihu, Weibo, Xiaohongshu, TikTok, etc.
- No login, no registration, no API Key required. Free!
- Support multiple content types including text, images, and videos
- Support web page integration, allowing you to develop your own web pages and set up automation using the extension's publishing features, such as:
  - Automatically capture web content and publish to multiple platforms
  - Schedule posts
  - AI content generation integration

This extension solves the pain points of content creators when publishing across multiple platforms. Through a single edit, content can be synchronized to all platforms, greatly improving work efficiency.

## Getting Started

First, run the development server:

```bash
pnpm i

pnpm dev
```

In the browser extension page, open the developer mode, click `Load unpacked extension` and find `build/chrome-mv3-dev` to load it.

## Building the Production Version

Run the following command:

```bash
pnpm build
```

You can find the build content in the `build` folder

## Development Instructions

### Documents You Need to Know

[Chrome Extension API Reference](https://developer.chrome.com/docs/extensions/reference/api)

[Edge Extension](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/)

[Plasmo Docs](https://docs.plasmo.com/)

### File Structure

> src/sync: This folder contains the code for operating on different platforms, where dynamic is related to dynamic publishing, and video is related to video publishing; any added platform needs to be registered in common.ts.
> components: This folder contains all the components for frontend interface operations.

### Development Environment

It is recommended to use the package management tool `pnpm@latest-9` with Node.js version 20.

## Star History

<a href="https://star-history.com/#MultiPost-Extension/MultiPost-Extension&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=MultiPost-Extension/MultiPost-Extension&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=MultiPost-Extension/MultiPost-Extension&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=MultiPost-Extension/MultiPost-Extension&type=Date" />
 </picture>
</a>
