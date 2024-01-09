import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../../Post/Post'; 
import styles from './BuySell.module.css'

const BuySell = () => {
  const [buySellPosts, setBuySellPosts] = useState([]);

  useEffect(() => {
    const fetchBuySellPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        const buySellPosts = response.data.filter(post => post.category === 'Zakup i Sprzedaż');
        setBuySellPosts(buySellPosts);
        console.log('Посты по категории "Zakup i Sprzedaż":', buySellPosts);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchBuySellPosts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        {buySellPosts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BuySell;
