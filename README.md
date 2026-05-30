# 🤖 Nexus AI — SaaS PWA

Plateforme SaaS IA WhatsApp & Automation — installable comme application (PWA).

## 🚀 Déploiement rapide

1. **GitHub Pages** : Active GitHub Pages sur le repo (branche `main`, dossier `/root`)
2. **Netlify / Vercel** : Glisse le dossier ou connecte le repo → déploiement automatique
3. **Serveur custom** : Sers les fichiers en HTTPS avec un serveur statique

## 📁 Structure
```
nexus-ai-pwa/
├── index.html          # Page principale
├── app.js              # Logique PWA (install prompt + service worker)
├── style.css           # Styles complémentaires
├── manifest.json       # Manifest PWA
├── service-worker.js   # Cache offline
└── icons/              # Icônes PWA toutes tailles
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

## ✅ Checklist PWA
- [x] manifest.json configuré
- [x] Service Worker avec cache offline
- [x] Icônes toutes tailles (72 → 512px)
- [x] Meta tags Apple (iOS)
- [x] HTTPS requis en production
- [x] Install banner automatique

## ⚠️ Important
Le Service Worker nécessite HTTPS pour fonctionner (sauf `localhost`).
