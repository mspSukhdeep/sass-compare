debugger;
const Fuse = require('./fuse');
let MODAL = {
    state: {
        products: [],
        categories: []
    },
    searchOptions: {
        product: {
            shouldSort: true,
            threshold: 0.5,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ["label"],
            slice: 5
        },
        category: {
            shouldSort: true,
            threshold: 0.2,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ["title"],
            slice: 4
        }
    }
};

let DOMElements = {
    create: {
        productList: function(data) {
            let $_html = ``;
            if (data.length) {
                data.map((item) => {
                    $_html += `
		            <li class="search-result__product">
		            	<a class="no-link-style search-result__link" href="${item.link}">
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
		                </a>
		            </li>`;
                });
            } else {
                $_html += `
		            <li class="search-result__empty">
		                    No result found
		            </li>`;
            }
            return $_html;
        },
        categoryList: function(data) {
            let $_html = ``;
            if (data.length) {
                data.map((item) => {
                    $_html += `
			        	<li class="search-result__category">
			        		<a class="no-link-style search-result__link" href="${item.link}">
					            <div class="search-result__category-title">
					                ${item.title}
					            </div>
					            <div class="search-result__category-description">
					                ${item.description}
					            </div>
				            </a>
				        </li>`;
                });
            } else {
                $_html += `
		            <li class="search-result__empty">
		                    No result found
		            </li>`;
            }
            return $_html;
        }
    }
}

function initSearch(response) {
    MODAL.state.products = response.products.data;
    MODAL.state.categories = response.categories.data;
    $(".js-search-product-list").html(DOMElements.create.productList(response.products.data.slice(0,MODAL.searchOptions.product.slice)));
    $(".js-search-category-list").html(DOMElements.create.categoryList(response.categories.data.slice(0,MODAL.searchOptions.category.slice)));
}

$(".search__input").on("focus", function() {
    $(this).parents(".search-wrapper").addClass("search-wrapper--page").find(".search").addClass("container");

    if (MODAL.state.products.length === 0) {
        fetch(`http://localhost/data/product.php`).then(function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(response) {
                initSearch(response);
            });
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
}).on("blur", function() {
    // $(this).parents(".search-wrapper").removeClass("search-wrapper--page").find(".search").removeClass("container");
});

function productSearch(searchTerm) {
    let productItems = [];
    if (searchTerm) {
        let fuse = new Fuse(MODAL.state.products, MODAL.searchOptions.product);
        productItems = fuse.search(searchTerm);
    } else {
        productItems = MODAL.state.products;
    }
    $(".js-search-product-list").html(DOMElements.create.productList(productItems.slice(0,5)));
}

function categorySearch(searchTerm) {
    let categoryItems = [];
    if (searchTerm) {
        let fuse = new Fuse(MODAL.state.categories, MODAL.searchOptions.category);
        categoryItems = fuse.search(searchTerm);
    } else {
        categoryItems = MODAL.state.categories;
    }
    $(".js-search-category-list").html(DOMElements.create.categoryList(categoryItems.slice(0,4)));
}

$(".js-search-input").on("input", function() {
    let searchTerm = $(this).val();
    productSearch(searchTerm);
    categorySearch(searchTerm);
})

$(".js-close-search").on("click", function() {
    $(".search-wrapper").removeClass("search-wrapper--page");
})