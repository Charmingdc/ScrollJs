import clsx from 'clsx';
import styles from './style.module.css';

const LatestUpdateModal = ({update}) => {
 return (
  <div className={clsx(styles.updateModal)}>
   <p><strong> { update } </strong></p>
  </div>
 )
}

export default LatestUpdateModal;