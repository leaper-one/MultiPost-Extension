# MultiPost

> Une extension de navigateur permettant de publier du contenu sur plusieurs plateformes sociales en un seul clic.

![GitHub License](https://img.shields.io/github/license/leaper-one/MultiPost-Extension) ![GitHub Repo stars](https://img.shields.io/github/stars/leaper-one/MultiPost-Extension) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/leaper-one/MultiPost-Extension) [![Website](https://img.shields.io/website?url=https%3A%2F%2Fmultipost.app)](https://multipost.app)

[English](../README.md) | [中文](README-zh.md) | [日本語](README-jp.md) | [Français](README-fr.md) | [한국어](README-kr.md)

---

## Installation

- [Chrome - ![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/dhohkaclnjgcikfoaacfgijgjgceofih)](https://chromewebstore.google.com/detail/multipost/dhohkaclnjgcikfoaacfgijgjgceofih) ![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/dhohkaclnjgcikfoaacfgijgjgceofih) ![Chrome Web Store Last Updated](https://img.shields.io/chrome-web-store/last-updated/dhohkaclnjgcikfoaacfgijgjgceofih)
- [Edge - ![](https://img.shields.io/badge/dynamic/json?label=edge%20add-on&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fckoiphiceimehjkolnfffgbmihoppgjg)](https://microsoftedge.microsoft.com/addons/detail/multipost/ckoiphiceimehjkolnfffgbmihoppgjg) [![](https://img.shields.io/badge/dynamic/json?label=users&query=%24.activeInstallCount&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fckoiphiceimehjkolnfffgbmihoppgjg)](https://microsoftedge.microsoft.com/addons/detail/multipost/ckoiphiceimehjkolnfffgbmihoppgjg)

## Fonctionnalités principales

- Prise en charge de la publication synchronisée sur plus de 10 plateformes principales comme Zhihu, Weibo, Xiaohongshu, TikTok, etc.
- Pas de connexion, pas d'inscription, pas de clé API requise. Gratuit !
- Prise en charge de plusieurs types de contenu : texte, images et vidéos
- Prise en charge de l'intégration web, permettant de développer vos propres pages web et d'automatiser les fonctionnalités de publication de l'extension :
  - Capture automatique du contenu web et publication sur plusieurs plateformes
  - Planification des publications
  - Intégration de la génération de contenu par IA

Cette extension résout les difficultés des créateurs de contenu lors de la publication sur plusieurs plateformes. En une seule édition, le contenu peut être synchronisé sur toutes les plateformes, améliorant considérablement l'efficacité du travail.

## Démarrage

D'abord, lancez le serveur de développement :

```bash
pnpm i

pnpm dev
```

Dans la page des extensions du navigateur, activez le mode développeur, cliquez sur "Charger l'extension non empaquetée" et sélectionnez `build/chrome-mv3-dev`.

## Construction de la version de production

Exécutez la commande suivante :

```bash
pnpm build
```

Vous trouverez le contenu construit dans le dossier `build`.

## Guide de développement

### Documentation de référence

[Chrome Extension API Reference](https://developer.chrome.com/docs/extensions/reference/api)

[Edge Extension](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/)

[Plasmo Docs](https://docs.plasmo.com/)

### Structure des fichiers

> src/sync : Ce dossier contient le code pour opérer sur différentes plateformes, où dynamic concerne la publication dynamique et video concerne la publication de vidéos ; toute plateforme ajoutée doit être enregistrée dans common.ts.
> components : Ce dossier contient tous les composants pour les opérations d'interface frontend.

### Environnement de développement

Il est recommandé d'utiliser le gestionnaire de paquets `pnpm@latest-9` avec Node.js version 20.

## Star History

<a href="https://star-history.com/#MultiPost-Extension/MultiPost-Extension&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=MultiPost-Extension/MultiPost-Extension&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=MultiPost-Extension/MultiPost-Extension&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=MultiPost-Extension/MultiPost-Extension&type=Date" />
 </picture>
</a>

## Contactez-nous

- Groupe QQ: [921137242](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=c5BjhD8JxNAuwjKh6qvCoROU301PppYU&authKey=NfKianfDwngrwJyVQbefIQET9vUQs46xb0PfOYUm6KzdeCjPd5YbvlRoO8trJUUZ&noverify=0&group_code=921137242)
- Email: support@leaper.one
- Problèmes GitHub: https://github.com/MultiPost-Extension/MultiPost-Extension/issues

![Groupe QQ](MultiPost-Extension_2025-02-28T14_17_15.717Z.png)
