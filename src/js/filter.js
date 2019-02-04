import { debug } from "util";

let MODAL = {
  FILTER: {}
};

const updateFilterModal = () => {
  let filter = {};

  $(".js-filter-group").forEach(function(filterGroup) {
    let filterName = $(filterGroup).data("filter-type");
    $(filterGroup)
      .find(".js-filter")
      .forEach(function(filterItem) {
        if ($(filterItem).hasClass("filter-option--selected")) {
          filter[filterName] = filter[filterName] ? filter[filterName] : [];
          filter[filterName].push($(filterItem).data("value"));
        }
      });
  });

  MODAL.FILTER = filter;
};

$(".js-filter").on("click", function(event) {
  $(this).toggleClass("filter-option--selected");
  updateFilterModal();
});
