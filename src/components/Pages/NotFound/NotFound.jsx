import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
    <h2>404 - Nie znaleziono</h2>
    <p>Przepraszamy, strona, której szukasz, może być w innym zamku.</p>
    <img src='/img/photos/notfoundImage.jpg' alt="Not Found" />
    <Link to="/">Idź do domu</Link>
  </div>
  );
};

export default NotFound;