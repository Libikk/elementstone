import styles from './Header.module.scss';

const Header:React.FC  = () => {
    return <div className={styles.header}>
          <nav>
            <h1 className={styles.headerText}>British Garden Birds</h1>
        </nav>
    </div>
}

export default Header;
