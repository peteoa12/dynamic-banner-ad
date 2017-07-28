

(function loopThroughAssets(products) {
  for (var i = 0; i < products.length; i++) {
    var product = products[i]
    insertAssetsInDom(product);
  }
})(products);


function insertAssetsInDom(product) {
  $('#slideshow').append(
    '<div class="slide"><img class="product" src="' + product.product_img + '"><p class="product-blurb">' + product.blurb + '</p></div>'
  );
}


