import styles from './Sidebar.module.css';
import banner from '../../assets/banner.png';

import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src={banner} 
                alt="Banner" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/YasminGonc.png"/>
                <strong>Leslie Alexander</strong>
                <span>UI Designer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}