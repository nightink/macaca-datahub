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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8b0cf56fb8598516047e63d066f45668"
  },
  {
    "url": "assets/css/0.styles.7b19ecef.css",
    "revision": "b16e815fc972fa6e26f91610002378ce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.335decc8.js",
    "revision": "4e80eb9897b228bd341465411809d54e"
  },
  {
    "url": "assets/js/11.12450c8d.js",
    "revision": "508558050f614e753769c61123ace465"
  },
  {
    "url": "assets/js/12.775e71ea.js",
    "revision": "cbdf5042e657edbac4b485401f9c9c03"
  },
  {
    "url": "assets/js/13.fc683826.js",
    "revision": "8f5da4377221193e39fa04f6df9d2cf1"
  },
  {
    "url": "assets/js/14.08988672.js",
    "revision": "24bd82765fe8cc14e376de0fa0701940"
  },
  {
    "url": "assets/js/15.20799db2.js",
    "revision": "a26adf3dd5e1bc424d22e1b9ca01a074"
  },
  {
    "url": "assets/js/16.3f82df00.js",
    "revision": "5e9c59498e512659bb7e50f0964c8e6e"
  },
  {
    "url": "assets/js/17.4233f52b.js",
    "revision": "aa762daca2ef01e32523534cb0617faf"
  },
  {
    "url": "assets/js/18.ab7e66b7.js",
    "revision": "677defc489280dd271d20aa62f23e578"
  },
  {
    "url": "assets/js/19.a52ceb7c.js",
    "revision": "9855adcc8ca821aeafb8fbef87f21cde"
  },
  {
    "url": "assets/js/2.89e9274c.js",
    "revision": "e70c214d461619a810529f50186e726e"
  },
  {
    "url": "assets/js/20.2c6f8e9d.js",
    "revision": "737accea5dc2aa22f6ac7db0e84e5cdf"
  },
  {
    "url": "assets/js/21.af99d3a0.js",
    "revision": "f1712a53e62a31554b9af661da2f6c2b"
  },
  {
    "url": "assets/js/22.542b4d4b.js",
    "revision": "a3c7e67774b139b04c9830491b58ef07"
  },
  {
    "url": "assets/js/23.9a2e88ed.js",
    "revision": "80b13c46580d409e322c8eaf51a0fed5"
  },
  {
    "url": "assets/js/24.23046c4d.js",
    "revision": "d9c347fe3f7a5f92d8c46e7f3089c10a"
  },
  {
    "url": "assets/js/25.9c8abf0d.js",
    "revision": "de599504e941414ba3a471311ff9d4ac"
  },
  {
    "url": "assets/js/26.9d032387.js",
    "revision": "c14d297e5c4d520baef5ecdb671002a2"
  },
  {
    "url": "assets/js/27.0204e9ec.js",
    "revision": "e0d75c08a21b95196a1aab59919634b2"
  },
  {
    "url": "assets/js/28.4c1712e8.js",
    "revision": "e67f1142981ec54b574508d3283ca1d0"
  },
  {
    "url": "assets/js/29.ba238ef0.js",
    "revision": "17eddc4284ee22c4a68684c476976d17"
  },
  {
    "url": "assets/js/3.6f43f9b4.js",
    "revision": "07bffb7952a6a2288ad3f027c5cd2cca"
  },
  {
    "url": "assets/js/4.07db3a8c.js",
    "revision": "3e5907aa6dcabd7f95398205a9f4abe8"
  },
  {
    "url": "assets/js/5.3fbfdab5.js",
    "revision": "a49efac2e8ee766106c4dcaf2a3bc253"
  },
  {
    "url": "assets/js/6.de01c66a.js",
    "revision": "55f113bf3eb365d7e7fc37ce32cad940"
  },
  {
    "url": "assets/js/7.f2395a23.js",
    "revision": "db45f5e8e8dbcd190c43c34ab04e8601"
  },
  {
    "url": "assets/js/8.12e21165.js",
    "revision": "a0b8b956c423d5c7b832f68b9b28dfcd"
  },
  {
    "url": "assets/js/9.1e759a92.js",
    "revision": "66c5398160b7a291c92d476669eaf2eb"
  },
  {
    "url": "assets/js/app.6eaeef45.js",
    "revision": "622e130c5887059642e10a25e59b41b7"
  },
  {
    "url": "guide/configuration.html",
    "revision": "0fa2e78e115466b65b83786a812e73c0"
  },
  {
    "url": "guide/design-concept.html",
    "revision": "c9132e096939bcb8bfb784fff6fdb785"
  },
  {
    "url": "guide/experiment.html",
    "revision": "18b62b5fa04cbf9da627cf87d4462712"
  },
  {
    "url": "guide/index.html",
    "revision": "cc29a6f03477470494fc6a3bc7f3d79c"
  },
  {
    "url": "guide/installation.html",
    "revision": "272603ba650605e3f9df0f9ac82b8483"
  },
  {
    "url": "guide/integration.html",
    "revision": "14ab86004af73e4c5a65788d06b16934"
  },
  {
    "url": "guide/presentations.html",
    "revision": "b367ee07b59759b06bdee4f8b88a6632"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "8799edd9ce93704f668c6b0939a2127f"
  },
  {
    "url": "guide/schema-syntax.html",
    "revision": "4a0b74c29384bd94c58d621c65c0e0d0"
  },
  {
    "url": "guide/swagger.html",
    "revision": "bd5183b2b4b34946ecaf5e7828263077"
  },
  {
    "url": "guide/webpack-tutorial.html",
    "revision": "5da7e13471c9582eb6700c56a7fa9d29"
  },
  {
    "url": "guide/with-macaca-test.html",
    "revision": "99968a62829d00929d31c86e5e0f585a"
  },
  {
    "url": "index.html",
    "revision": "fe37d18dd45b59cdf2afb0634888f899"
  },
  {
    "url": "logo/logo-color.svg",
    "revision": "ce025e5858229195d4fa7018ee849edd"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "e900e97f3f616234fc7985b1d2dd1c95"
  },
  {
    "url": "zh/guide/design-concept.html",
    "revision": "dcc4b15d2bca4fb9240c63231978247d"
  },
  {
    "url": "zh/guide/experiment.html",
    "revision": "eb39cc0684330ac6b11607b8a155aebb"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "03b9833bac2d0058865113a7b4b6a2c7"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "6abfd2fa654fafc4c4e24915a0c07a9f"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "a78c6e1023d26c8be391d30dd4020222"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "ddda7aacf536a9158743d938b0f3bebc"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "5ee073b13d25949b0124c6a44a80ddd3"
  },
  {
    "url": "zh/guide/schema-syntax.html",
    "revision": "c41dc6349486a09c4e339305c4f42788"
  },
  {
    "url": "zh/guide/swagger.html",
    "revision": "fe501296e86fa0b65385703149b3e7d4"
  },
  {
    "url": "zh/guide/webpack-tutorial.html",
    "revision": "7af2201cb12b1b34d56129963372c48a"
  },
  {
    "url": "zh/guide/with-macaca-test.html",
    "revision": "1531a59011b70cf3ba79d3cf152522a1"
  },
  {
    "url": "zh/index.html",
    "revision": "d3f32e2e3e0d87b2749b6e8fe44a3c81"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
