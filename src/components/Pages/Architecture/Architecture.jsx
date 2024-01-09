import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../../Post/Post';
import styles from './Architecture.module.css'

const Architecture = () => {
  const [architecturePosts, setArchitecturePosts] = useState([]);

  useEffect(() => {
    const fetchArchitecturePosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        const architecturePosts = response.data.filter(post => post.category === 'Design i Architektura');
        setArchitecturePosts(architecturePosts);
        console.log('Посты по категории "Design i Architektura":', architecturePosts);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchArchitecturePosts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        {architecturePosts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Architecture;
