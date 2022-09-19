import styles from './Header.module.css';
import logoImg from '../../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoImg} alt='Logotipo Ignite'/>
        </header>
    );
}