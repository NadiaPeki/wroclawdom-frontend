import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from '../../Input/Input';
import FilteredPosts from '../../FilteredPosts/FilteredPosts';
import styles from './SearchPage.module.css';
import HeaderPosts from '../../HeaderPosts/HeaderPosts';

const SearchPage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        setAllPosts(response.data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (searchText) => {
    setSearchText(searchText);

    if (searchText.trim() === '') {
      // Если текст поиска пуст, сбрасываем результаты
      setSearchResults([]);
    } else {
      // Иначе фильтруем посты
      const filteredPosts = allPosts.filter((post) => {
        const searchLower = searchText.toLowerCase();
        const postDateLower = post.date.toLowerCase();

        return (
          post.title.toLowerCase().includes(searchLower) ||
          post.text.toLowerCase().includes(searchLower) ||
          postDateLower.includes(searchLower) ||
          postDateLower.replace(/[^\w\s]/gi, '').includes(searchLower)
        );
      });

      setSearchResults(filteredPosts);
    }
  };

  return (
    <div className={styles.searchPage}>
      <Input onSearch={handleSearch} />
      <div className={styles.resultsContainer}>
        {searchText.trim() !== '' && searchResults.length === 0 && (
          <div className={styles.noResults}><p className={styles.noResultsText}>Brak wyników</p>
          <p className={styles.maybeText}>Być może te posty cię zainteresują
</p>
<div className={styles.headerPostsContainer}>
<HeaderPosts allPosts={allPosts} />
</div>
</div>
        )}
        {searchResults.length > 0 && (
          <FilteredPosts allPosts={searchResults} searchText={searchText} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
