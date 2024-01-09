import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import styles from './HeaderPosts.module.css';

const HeaderPosts = ({ allPosts }) => {
  const [headerPosts, setHeaderPosts] = useState([]);

  useEffect(() => {
    const copyOfAllPosts = [...allPosts];

    for (let i = copyOfAllPosts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyOfAllPosts[i], copyOfAllPosts[j]] = [copyOfAllPosts[j], copyOfAllPosts[i]];
    }

    const randomHeaderPosts = copyOfAllPosts.slice(0, 5);

    setHeaderPosts(randomHeaderPosts);
  }, [allPosts]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerPosts}>
        {headerPosts.map((post) => (
          <Post key={post.slug} post={post} smallSize />
        ))}
      </div>
    </div>
  );
};

export default HeaderPosts;
