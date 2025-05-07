import styles from './index.module.css';

const FeatureBox = ({feature}) => {
 return (
  <div className={styles.featureBox}>
   <div> { feature.emoji } </div>
   
   <h3> { feature.title } </h3>
   <p> { feature.description } </p>
  </div>
 )
}

export default FeatureBox;