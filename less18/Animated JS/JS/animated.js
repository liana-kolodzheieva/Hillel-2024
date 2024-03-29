const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
   function updateCount() {
      const target = + counter.getAttribute('data-count'),
         count = + counter.innerHTML;
      const inc = Math.floor((target - count) / 100);
      if (count < target && inc > 0) {
         counter.innerHTML = (count + inc);
         setTimeout(updateCount, 10);
      } else {
         counter.innerHTML = target;
      }
   }
   updateCount();
});