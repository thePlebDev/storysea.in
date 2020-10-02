document.querySelectorAll('.lazyload').forEach((i) => {
  if (i) {
      const observer = new IntersectionObserver((entries) => {
          observerCallback(entries)
      },
      {threshold: 1});    
      observer.observe(i);
  }
})

const observerCallback = (entries) => {
  entries.forEach((entry) => {
       if (entry.isIntersecting) {
          entry.target.style.backgroundImage = `url(${entry.target.getAttribute('data-image')})`;
       }
  });
};
