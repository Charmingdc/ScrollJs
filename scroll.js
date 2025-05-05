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

  observe(elements, callback, animationClass) {
    if (!elements || typeof elements[Symbol.iterator] !== 'function') {
      elements = [elements];
    }

    const elementsArray = Array.from(elements);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        const index = elementsArray.indexOf(element);

        if (entry.isIntersecting) {
          if (animationClass) {
            if (animationClass.startsWith('scrolljs-')) {
              this._removeHiddenClass(element, animationClass);
            }
            element.classList.add(animationClass);
          } else {
            console.error(`Error: animation class name is not defined`);
          }

          if (callback) {
            callback(element, index);
          }
        }

        if (!this.animateOnce && !entry.isIntersecting) {
          if (animationClass) {
            element.classList.remove(animationClass);
            if (animationClass.startsWith('scrolljs-')) {
              this._addHiddenClass(element, animationClass);
            }
          } else {
            console.error(`Error: animation class name is not defined`);
          }

          if (callback) {
            callback(element, index);
          }
        }
      });
    }, this.options);

    elementsArray.forEach(element => {
      observer.observe(element);
    });

    this.observers.push({ observer, elements: elementsArray });
  }

  unobserve(element) {
    let found = false;

    this.observers.forEach(({ observer, elements }) => {
      const elementsArray = Array.from(elements);

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