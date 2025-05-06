'use strict';

class ScrollObserver {
  constructor(animateOnce = false, options = {
    root: null,
    threshold: 0.8,
    rootMargin: '-10px',
  }) {
    this.options = options;
    this.animateOnce = animateOnce;
    this.observers = [];
  }

  // Create the observe method
  observe(elements, callback, animationClass) {
    // In case a single element is passed in, convert it to an array so array methods can be used
    if (!elements || typeof elements[Symbol.iterator] !== 'function') {
      elements = [elements];
    }

    // Create a new intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (animationClass) {
           if (animationClass.startsWith('scrolljs-')) {
              this._removeHiddenClass(entry.target, animationClass);
            }

            entry.target.classList.add(animationClass);
          } else {
            console.error(`Error: animation class name is not defined`);
          }

          if (callback) {
            callback(entry.target);
          }
        }

        if (!this.animateOnce && !entry.isIntersecting) {
          if (animationClass) {
            entry.target.classList.remove(animationClass);

            if (animationClass.startsWith('scrolljs-')) {
              this._addHiddenClass(entry.target, animationClass);
            }
          } else {
            console.error(`Error: animation class name is not defined`);
          }

          if (callback) {
            callback(entry.target);
          }
        }
      });
    }, this.options);

    // Loop through all elements and observe each of them
   elements.forEach(element => {
     observer.observe(element);

     // Ensure element starts hidden if using scrolljs- animation class
     if (animationClass && animationClass.startsWith('scrolljs-')) {
      this._addHiddenClass(element, animationClass);
     }
   });

    // Push both the observer and elements it's observing to the observers array
    this.observers.push({ observer, elements });
  }

  unobserve(element) {
    let found = false;

    // Loop through each observer to check if it observes the element
    this.observers.forEach(({ observer, elements }) => {
      const elementsArray = Array.from(elements);

      // Check if the element exists in the current observer's elements array
      if (elementsArray.includes(element)) {
        observer.unobserve(element);
        if (element.id) {
          console.log(`Element with id of "${element.id}" unobserved successfully`);
        } else {
          console.log(`Element with class name of "${element.classList}" unobserved successfully`);
        }

        found = true;
      }
    });

    if (!found) {
      console.log('Element not found in any observer:', element.id);
    }
  }

  disconnect() {
    this.observers.forEach(({ observer }) => observer.disconnect());
    this.observers = [];
  }

  // Private methods for handling hidden classes
  _addHiddenClass(element, animationClass) {
    const directionMatch = animationClass.match(/-(up|down|left|right|zoom)/);
    const direction = directionMatch ? directionMatch[1] : null;

    if (!direction) return;

    const hiddenClass = `scrolljs-hidden-${direction}`;
    if (!element.classList.contains(hiddenClass)) {
      element.classList.add(hiddenClass);
    }

    if (animationClass.includes('fade') && !element.classList.contains('scrolljs-opacity-0')) {
      element.classList.add('scrolljs-opacity-0');
    }
  }

  _removeHiddenClass(element, animationClass) {
    const directionMatch = animationClass.match(/-(up|down|left|right|zoom)/);
    const direction = directionMatch ? directionMatch[1] : null;

    if (!direction) return;

    const hiddenClass = `scrolljs-hidden-${direction}`;
    element.classList.remove(hiddenClass);

    if (animationClass.includes('fade')) {
      element.classList.remove('scrolljs-opacity-0');
    }
  }
}