import { useEffect, useState } from "react";
import axios from "axios";
import Posts from '../../components/Posts/Posts';
import HeaderPosts from '../../components/HeaderPosts/HeaderPosts'; 
import styles from './Home.module.css'

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://wroclawdom-backend-b0a3204cd4c1.herokuapp.com/posts');
        setAllPosts(response.data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerPosts}>
      <HeaderPosts allPosts={allPosts} />
      </div>
      <Posts className={styles.homePosts} />
    </div>
  );
}

export default Home;
