import   { FC } from 'react';
import SearchForm  from '../../features/SearchForm/SearchForm';
 import styles from './Header.module.css';

const Header: FC = () => {

  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerTitle}>Search for books</h1>
      <SearchForm />
    </div>
  );

}
  
export default Header;
