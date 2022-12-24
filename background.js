
function removeViews(){
   linksa = document.querySelectorAll('a[aria-label*="View Tweet analytics"]');


for (let element of linksa) {
    if (element == undefined){
        continue
    }
  element.style.visibility = "hidden";
}}



function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  }
}

const debouncedDeleteElements = debounce(removeViews, 120);

window.onscroll = function() {
  debouncedDeleteElements();
}

// Delete the elements after the ad blocker has run
var observer = new MutationObserver(function() {
  removeViews()
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

