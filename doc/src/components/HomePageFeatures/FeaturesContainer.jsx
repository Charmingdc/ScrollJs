import FeatureBox from './FeatureBox.jsx';
import styles from './index.module.css';

const FeaturesContainer = () => {
 const features = [
   {
     title: 'Effortless Scroll Animations',
     description: 'Add smooth, customizable scroll-triggered animations to any element with minimal setup.',
     emoji: '✨',
   },
   {
     title: 'Lightweight & Fast',
     description: 'Built to be tiny and performant—ScrollJs doesn’t slow down your site.',
     emoji: '⚡',
   },
   {
     title: 'No Dependencies',
     description: 'ScrollJs runs with pure JavaScript. No jQuery or third-party libraries required.',
     emoji: '🧠',
   },
   {
     title: 'Custom Animation Support',
     description: 'Apply your own CSS animations or use JavaScript-powered effects.',
     emoji: '🎨',
   },
   {
     title: 'Observe & Unobserve Elements',
     description: 'Easily observe elements by class and unobserve them by ID when needed.',
     emoji: '🔍',
   },
   {
     title: 'Easy Integration',
     description: 'Designed to plug into any website or project within seconds.',
     emoji: '🛠️',
   }
 ];
 
 return (
  <div className={styles.featureContainer}>
    {features.map((feature, i) => (
     <FeatureBox feature={feature} key={i} />
    ))}
  </div>
 )
}


export default FeaturesContainer;