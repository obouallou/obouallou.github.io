/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "certificate.9e278a37.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "generate.4f0b71f0.js",
    "revision": "4d9b8ef1dacb5017e54ab9c553fd715c"
  },
  {
    "url": "index.html",
    "revision": "a141a98e1408a49641a83354807b46bd"
  },
  {
    "url": "index.js",
    "revision": "a08e05fd7bd0d39c6ef6af918e87984b"
  },
  {
    "url": "main.fb6bbcaf.css",
    "revision": "a6fed0b15468b6a6e4c41d251c35f2ec"
  },
  {
    "url": "marianne-bold-webfont.db730b38.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-bold-webfont.f8428997.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-regular-webfont.0529dd78.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "marianne-regular-webfont.78905f1b.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "./",
    "revision": "065f5a8df446eba51096bd2864d75fdd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
