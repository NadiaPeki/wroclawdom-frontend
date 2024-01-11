import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../../Posts/Posts";
import HeaderPosts from "../../HeaderPosts/HeaderPosts"; 
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
      <HeaderPosts allPosts={allPosts} />
      <Posts className={styles.homePosts} />
    </div>
  );
}

export default Home;
