import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
    setSearchText(''); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
      setSearchText('');
    }
  };

  return (
    <div className={styles.inputWithButton}>
      <input
        type="text"
        placeholder="Wpisz tekst do wyszukania"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.inputButton}>
        Szukaj
      </button>
    </div>
  );
};

export default Input;
