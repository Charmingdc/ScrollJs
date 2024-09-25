/*! ScrollJs | (c) 2024 Charmingdc | MIT License | https://github.com/charmingdc/scrolljs */

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
    
   // create the observe method 
    observe(elements, callback, animationClass) {
      
      // incase a single element is passed in, it convert it to an array so array methods can be used on it
       if (!elements || typeof elements[Symbol.iterator] !== 'function') {
           elements = [elements];
        }
        
        // created a new intersection observer 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                if (animationClass) {
                  entry.target.classList.add(animationClass);
                } else {
                  console.error(`Error: animation class name is not defined`)
                }
                  
                if (callback) {
                  callback(entry.target);
                }
              } 
              
                
              if (!this.animateOnce && !entry.isIntersecting) {
                  if (animationClass) {
                    entry.target.classList.remove(animationClass);
                  } else {
                    console.error(`Error: animation class name is not defined`)
                 }
                  
                  
                  if (callback) {
                    callback(entry.target);
                  }
              } 
              
            });
        }, this.options);
        
        
        // loop through all elements and observe each of them 
        elements.forEach(element => {
          observer.observe(element);
        });
        
        // push both the observer and elements it's observing to observers array 
        this.observers.push( {observer, elements} )
    }
    
    
    unobserve(element) {
      let found = false;

      // Loop through each observer to check if it observes the element
      this.observers.forEach(({ observer, elements }) => {
      
          // Convert NodeList to an Array before using includes
          const elementsArray = Array.from(elements);
        
          // Check if the element exists in the current observer's elements array
          if (elementsArray.includes(element)) {
              observer.unobserve(element);
              // Unobserve the element
              if (element.id) {
                console.log(`Element with id of "${element.id}" unobserved successfully`);
              } else {
                console.log(`Element with clas name of "${element.classList}" unobserved successfully`);
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
    
}