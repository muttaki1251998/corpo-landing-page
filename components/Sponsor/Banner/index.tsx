import { handleMoveToId } from 'utils';
import styles from './Banner.module.scss';
interface Props {
  imgSrc: string;
}

const Banner: React.FC<Props> = ({ imgSrc }) => {
  return (
    <section
      className={`${styles.banner} padding-wrapper complete`}
      style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={styles['banner-content']}>
        <div className={styles['banner-content-solutions']}>
          <div className={styles['banner-content-solutions-container']}>
            <img src="/career/logo.svg"></img>
          </div>
          <h6>SOLUTIONS</h6>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h1>
        <p className={`${styles['large']} large`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <div className={styles['button-container']}>
          <button className="ui-button-2" onClick={() => handleMoveToId()}>
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
