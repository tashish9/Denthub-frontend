import styles from './starting-page-content.module.css';


const StartingPageContent = (): JSX.Element | null => {

  return (
    <section className={styles.starting}>
      <div className={styles.heading}>
        <div className={styles.heading__top}>Welcome to</div>
        <div className={styles.heading__bottom}>Denthub</div>
      </div>
      <p className={styles.info__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae ab
        animi, necessitatibus eos, reprehenderit alias, tempore modi temporibus
        eaque consequuntur amet deserunt repellat nesciunt? Nulla, nostrum
        laborum! Fuga, libero?
      </p>
    </section>
  );
};

export default StartingPageContent;
