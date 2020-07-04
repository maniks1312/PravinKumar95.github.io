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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/07/04/hello/index.html",
    "revision": "429a25c1369ebd06c31f528ba9b4995e"
  },
  {
    "url": "404.html",
    "revision": "8422a9d8116181c18ae9da095486d2a0"
  },
  {
    "url": "assets/css/0.styles.63195815.css",
    "revision": "5c431c5d9a332e44509162abf4979bab"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9cffc833.js",
    "revision": "ed782789c39c3208112f449b2b59e992"
  },
  {
    "url": "assets/js/11.d3e408b4.js",
    "revision": "3c2f6fa36ecdd71047e03d374c20a7e1"
  },
  {
    "url": "assets/js/12.bb1e87ea.js",
    "revision": "db0877f11c6fd97162e28c9fb591dbdf"
  },
  {
    "url": "assets/js/13.1aece74f.js",
    "revision": "b431fe22eccf9e03a36d529a690552c4"
  },
  {
    "url": "assets/js/14.c91c5ab1.js",
    "revision": "915529fba739d3ae21547a2a1c0bf0c2"
  },
  {
    "url": "assets/js/15.1962ed45.js",
    "revision": "a4a6aad4b1a37990f884c943dd9b7ca2"
  },
  {
    "url": "assets/js/16.4d5e733c.js",
    "revision": "f978204ce6e90fd992c52047d1493ac9"
  },
  {
    "url": "assets/js/3.c78ae815.js",
    "revision": "b8d69498f82585de115296db8f8ae220"
  },
  {
    "url": "assets/js/4.d7c60a71.js",
    "revision": "50e58c1dae16fb663a3a21f2a7ff819d"
  },
  {
    "url": "assets/js/5.0c567c58.js",
    "revision": "45b879d9c4c4cfdf9c2757c40eb31b78"
  },
  {
    "url": "assets/js/6.d84626da.js",
    "revision": "f345f9bb018540d793079ee27c4e20d6"
  },
  {
    "url": "assets/js/7.e258f4e8.js",
    "revision": "ee782007ccdafafa1da290e33ccb9a47"
  },
  {
    "url": "assets/js/8.7fe21555.js",
    "revision": "c416c46d7a1404a356e84bfe3a8fd1d2"
  },
  {
    "url": "assets/js/9.ad0c4cae.js",
    "revision": "9781f78be9cbf3b0ba03e4f75a81b061"
  },
  {
    "url": "assets/js/app.17ac4898.js",
    "revision": "4159207943cd0062eece860bebf99f85"
  },
  {
    "url": "assets/js/vuejs-paginate.342f0bca.js",
    "revision": "3cdf9036af7dab2aee7376695fe50378"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "index.html",
    "revision": "8d14237c9a817c125a6f5455a19e99e6"
  },
  {
    "url": "logo.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "tag/index.html",
    "revision": "e9ae20f51e9152875816c8580bf9ec12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
