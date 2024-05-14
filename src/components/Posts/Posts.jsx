import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import styles from './Posts.module.css';

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://wroclawdom-backend-j6nf.vercel.app/posts');
        setAllPosts(response.data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchPosts();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.posts}>
        {allPosts.slice(0, visiblePosts).map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
      {visiblePosts < allPosts.length && (
        <button className={styles.loadMoreButton} onClick={loadMorePosts}>
          Załaduj więcej
        </button>
      )}
    </div>
  );
};

export default Posts;
