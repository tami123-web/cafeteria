
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.pt-BR.0bfcf89d141018e01ba3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/302.baseline.pt-BR.e05acaa04deb92f2cb75.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/735.baseline.pt-BR.2db141cc0c87b95e7877.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/137.baseline.pt-BR.5cfbe8e5ab0d2de2d1cb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.1bb414b3ad7f1747cd17.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.baseline.pt-BR.ced19ebca9f312cb8c0c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/539.baseline.pt-BR.dfb95250bd52c6f905a3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/582.baseline.pt-BR.d192ee6ceb50b7df305d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/927.baseline.pt-BR.d52963cebed50f376c29.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/879.baseline.pt-BR.2739b75f39160bdab1df.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.baseline.pt-BR.02bfe567ba7fd074b7de.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.pt-BR.35fc9143bdd0f083e4c0.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/302.baseline.pt-BR.64c0f1dbbd8b93fc2b46.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.b33fe50d6fdb42d0dcda.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.pt-BR.f3a50a072bd40af58b21.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  