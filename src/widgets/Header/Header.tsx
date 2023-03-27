import   { FC } from 'react';
import { SearchForm } from '../../features/SearchForm/SearchForm';
 import styles from './Header.module.css';

const Header: FC = () => {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTitle}>Search for books</div>
      <SearchForm />
    </div>
  );

}
  
export default Header;
