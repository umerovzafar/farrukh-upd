'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fa8711a6736b3adb9f93dea0dfb2dc23",
"assets/AssetManifest.bin.json": "5bd19938926cf354bd0982ea9c54f19a",
"assets/AssetManifest.json": "13daa8c73e6fafcbefb859a7ae7a07b2",
"assets/assets/avto_icon/lacetti.png": "f05c965eaa1ac8743be211fb19f6cc4b",
"assets/assets/fonts/Comfortaa-Bold.ttf": "281df342e6f73c20ebc6526f130e00b3",
"assets/assets/fonts/Comfortaa-Regular.ttf": "53f695dbfc6f703f86ed88bddde527b6",
"assets/assets/fonts/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/Montserrat-Regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "bc2b9f6ee5dd33f4d9865a90cc5adaf1",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/icon/avtobus.png": "9e5126f02f1345c6a24dbc4daf021a77",
"assets/assets/icon/avtomob.png": "d62a0984f258eee3cc979104cc256f6a",
"assets/assets/icon/benzovoz.png": "e86fa7d82038c2a9a8839458322c6038",
"assets/assets/icon/bus.png": "3516b67f93b362f15cc80a7e029fe992",
"assets/assets/icon/cars_1.png": "8184e89af218254392f8fb8c381d192d",
"assets/assets/icon/car_01.png": "66bac90c7b89c8a4944e1c9b27bc0914",
"assets/assets/icon/car_02.png": "bfb976e2c26482b8608789b8ebf7ac5c",
"assets/assets/icon/car_info.png": "997d3b6b2c1ea50554feb654269b57c9",
"assets/assets/icon/desktop.png": "cd83bcfbfbd9bd76f2002e52562bdeb1",
"assets/assets/icon/edit.png": "40ab877c5e6c67b4e9b65503e78b1777",
"assets/assets/icon/edit_2.png": "b5cb16b3aea5eb3b651e546011b12028",
"assets/assets/icon/edit_3.png": "211c8a6fd51a8d2ea6bd87d6e0b750c5",
"assets/assets/icon/ekskovator.png": "60734e2ab2f1cda519bc58ea56d26bc7",
"assets/assets/icon/evakuator.png": "d5499a21003fee2a2529d2b0df7585fc",
"assets/assets/icon/fuel.png": "a301d6723f9b3fb6c691fee1c5705eef",
"assets/assets/icon/fura.png": "e9f070dd774392479191b29bb972dd62",
"assets/assets/icon/gruzovik.png": "9d37f2f10e2810d2e63261f700b696bc",
"assets/assets/icon/koleso.png": "3f319caf270c8f96901ea44c18aedc0c",
"assets/assets/icon/list.png": "a035f6b4690fc17046b65aca9bbc0c6f",
"assets/assets/icon/microbus.png": "c25b17aac5db2daf7260fdf93302b76e",
"assets/assets/icon/mobile.png": "93db168cd118b924fede4a9bb92cd679",
"assets/assets/icon/personal_1.png": "b328abfc4b1d2dfef8ecfa51ab3d187e",
"assets/assets/icon/personal_2.png": "5c97c9748d7196b2937f701c2cb52a1f",
"assets/assets/icon/pojar.png": "069cadf2f61fca5749ffc777a5278d07",
"assets/assets/icon/put_list.png": "0a24a54159ef83cbf83f37576e874a2e",
"assets/assets/icon/remont.png": "5ebb70c8c6f0ba48667c6f32fedd49d2",
"assets/assets/icon/samosval.png": "88cfa45204453b30c438b8a307787733",
"assets/assets/icon/settings_1.png": "4bda6cda5b33ffe05894cb0feea44c2d",
"assets/assets/icon/settings_2.png": "8a7e381aa3158e2ae0385d88611435fd",
"assets/assets/icon/singout.png": "4d5816d68c3998e910cd217ca700a1ea",
"assets/assets/icon/skor.png": "aa1b7e3cdf5abd04228d32fcbe8846ac",
"assets/assets/icon/table.png": "2ce57804d48fa75d4e4beab4c7dcbf87",
"assets/assets/icon/xodim.png": "1bcc3e17424d789a50d11b4a96291ec6",
"assets/assets/images/error.gif": "9b6676bde88262d50a7b2b2620bf8768",
"assets/assets/images/logo.png": "3ae9383f4354ccf18ccee1536588e346",
"assets/assets/images/logo_2.png": "7b534e495b372abf73db0417643d2834",
"assets/assets/images/no_image.png": "8e0b9a183303e32c459314e86d13ef86",
"assets/assets/images/scoro.gif": "4984c0ac41b13002de2873e622efa63c",
"assets/assets/images/table.png": "2b31d90abebd46be3a5bc89eb60fae28",
"assets/FontManifest.json": "f11e842739c74c460325f66ec040f75b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "0f2045926f118a219290c1d42346aa78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b680bb5eda7ab25c4297d2615ceb6de6",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "d72ef94bdfe4597bb9a086304f5a82a5",
"icons/Icon-512.png": "74871faffef0c0e1d4b995f97389ecf0",
"icons/Icon-maskable-192.png": "d72ef94bdfe4597bb9a086304f5a82a5",
"icons/Icon-maskable-512.png": "74871faffef0c0e1d4b995f97389ecf0",
"index.html": "ff19febfdf05c078c1a51d2ebb74ff55",
"/": "ff19febfdf05c078c1a51d2ebb74ff55",
"main.dart.js": "72c3c933bb0391d849eb318eabc9e1c6",
"manifest.json": "ec0566e38ef696a0d451709fe94031c0",
"version.json": "4ba65cceea63184fc1b12ccdf4ce4099"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
