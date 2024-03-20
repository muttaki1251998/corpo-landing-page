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
        <h1>Company landing page demo</h1>
        <p className={`${styles['large']} large`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <div className={styles['button-container']}>
          <button className="ui-button-2 primary" onClick={() => handleMoveToId()}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
