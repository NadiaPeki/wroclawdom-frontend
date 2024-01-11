import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../../Post/Post';
import styles from './Rent.module.css';

const Rent = () => {
  const [rentPosts, setRentPosts] = useState([]);

  useEffect(() => {
    const fetchRentPosts = async () => {
      try {
        const response = await axios.get('https://wroclawdom-backend-b0a3204cd4c1.herokuapp.com/posts');
        const rentPosts = response.data.filter(post => post.category === 'Wynajem');
        setRentPosts(rentPosts);
        console.log('Посты по категории "Wynajem":', rentPosts);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchRentPosts();
  }, []);

  return (
    <div className={styles.wrapper}>
      {rentPosts.map(post => (
        <div key={post._id} className={styles.post}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Rent;
