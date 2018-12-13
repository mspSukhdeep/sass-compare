let DOMElements = {
    create: {
        productList: function(data) {
            $_html = ``;
            data.map((item) => {
                $_html += `
		            <li class="search-result__product">
		                <img class="search-result__product-image" src="${item.image}" /  >
		                <div class="search-result__product-info">
		                    <div class="search-result__product-title">
		                        ${item.label}
		                    </div>
		                    <div class="search-result__product-category">
		                        in 
		                        <span class="semi-bold">
		                            ${item.category}
		                        </span>
		                    </div>
		                </div>
		            </li>`;
            });
            return $_html;
        },
        categoryList: function(data) {
            $_html = ``;

            data.map((item) => {
                $_html += `
			        	<li class="search-result__category">
				            <div class="search-result__category-title">
				                ${item.title}
				            </div>
				            <div class="search-result__category-description">
				                ${item.description}
				            </div>
				        </li>`;
            });

            return $_html;
        }
    }
}
$(".search__input").on("focus", function() {
    $(this).parents(".search-wrapper").addClass("search-wrapper--page").find(".search").addClass("container");
    fetch(`http://localhost/data/product.php`).then(function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        response.json().then(function(response) {
            $(".js-search-product-list").html(DOMElements.create.productList(response.products.data));
            $(".js-search-category-list").html(DOMElements.create.categoryList(response.categories.data));
        });
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}).on("blur", function() {
    // $(this).parents(".search-wrapper").removeClass("search-wrapper--page").find(".search").removeClass("container");
});