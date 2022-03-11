
 // Write an function called to that takes a DOM element selector and an
 // object that moves the DOM element by the specified distance over the specified time.
 
 const to = (selector, distance, time) => {
      const element = document.querySelector(selector);
      const start = element.getBoundingClientRect();
      const end = {
          top: start.top + distance.top,
          left: start.left + distance.left,
          bottom: start.bottom + distance.bottom,
          right: start.right + distance.right
      };
      const delta = {
          top: end.top - start.top,
          left: end.left - start.left,
          bottom: end.bottom - start.bottom,
          right: end.right - start.right
      };
      const startTime = Date.now();
      const move = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / time, 1);
          element.style.top = `${start.top + delta.top * progress}px`;
          element.style.left = `${start.left + delta.left * progress}px`;
          element.style.bottom = `${start.bottom + delta.bottom * progress}px`;
          element.style.right = `${start.right + delta.right * progress}px`;
          if (progress < 1) {
              requestAnimationFrame(move);
          }
      };
      requestAnimationFrame(move);
  };
  to('#box', {left: 100}, 1000);