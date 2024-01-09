import Post from '../Post/Post';
import styles from './FilteredPosts.module.css';

const FilteredPosts = ({ allPosts, searchText }) => {
  // Фильтрация постов на основе текста поиска
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

  return (
    <div className={styles.filteredPosts}>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))
      ) : (
        <p className={styles.noResults}>Brak wyników</p>
      )}
    </div>
  );
};

export default FilteredPosts;