import styles from './index.module.css';

const FeatureBox = ({feature}) => {
 return (
  <div className={styles.featureBox}>
   <p> { feature.title } </p>
   <p> { feature.description } </p>
   <p> { feature.emoji } </p>
  </div>
 )
}

export default FeatureBox;