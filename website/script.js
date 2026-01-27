document.addEventListener("DOMContentLoaded", function () {
  var revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    revealElements.forEach(function (el) {
      var delayValue = el.getAttribute("data-delay");
      if (delayValue) {
        el.style.transitionDelay = delayValue + "ms";
      }
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  var headerOffset = 80;
  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("href").slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        var targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      }
    });
  });
});

