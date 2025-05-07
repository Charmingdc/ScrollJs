import clsx from 'clsx';
import styles from './style.module.css';

const LatestUpdateModal = ({update}) => {
 return (
  <div className={clsx(styles.updateModal)}>
   <marquee> { update } </marquee>
  </div>
 )
}

export default LatestUpdateModal;