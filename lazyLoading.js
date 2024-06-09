const observer = lozad('.lazy', {
    threshold: 0, // Optional: Adjust the threshold as needed
    loaded: function(el) {
      el.classList.add('loaded'); // Optional: Apply a class when the image is loaded
    }
  });
  
  observer.observe();