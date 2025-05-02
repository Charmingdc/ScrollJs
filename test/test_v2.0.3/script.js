import ScrollObserver from '../../dist/scroll.esm.js';


const scroll = new ScrollObserver();

scroll.observe(document.querySelectorAll('.test-card-up'), null, 'scrolljs-fade-in-up');
scroll.observe(document.querySelectorAll('.test-card-left'), null, 'scrolljs-fade-in-left');
scroll.observe(document.querySelectorAll('.test-card-right'), null, 'scrolljs-fade-in-right');
scroll.observe(document.querySelectorAll('.test-card-down'), null, 'scrolljs-fade-in-down');
scroll.observe(document.querySelectorAll('.test-card-zoom'), null, 'scrolljs-fade-in-zoom');
