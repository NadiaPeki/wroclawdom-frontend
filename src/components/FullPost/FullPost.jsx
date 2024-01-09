import { useEffect, useState } from 'react';
import { TelegramShareButton, WhatsappShareButton } from 'react-share';
import { SocialIcon } from 'react-social-icons';
import { format } from 'date-fns';
import styles from './FullPost.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullPost = () => {
  const { slug } = useParams();
  const [selectedPost, setSelectedPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!slug) {
          setError('Error fetching post: Slug is undefined');
          return;
        }

        const response = await axios.get(`http://localhost:3002/posts/${slug}`);

        if (response.data) {
          const matchingPost = response.data;
          setSelectedPost(matchingPost);
        } else {
          setError('Error fetching post: Empty response data');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error fetching post: Something went wrong');
      }
    };

    fetchData();
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedPost) {
    return <h3>Loading...</h3>;
  }

  const { imageUrl, title, text, date, category } = selectedPost;
  const postUrl = `http://localhost:3000/posts/${slug}`;

  const formattedText = text.split('\n').map((paragraph, index) => (
    // Используем dangerouslySetInnerHTML для выделения нужных частей текста
    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
  ));

  return (
    <div className={styles.fullPostWrapper}>
      <div className={styles.fullPostContent}>
        <h1>{title}</h1>
        <h2>{format(new Date(date), 'dd.MM.yyyy')}</h2>
        <h3>{category}</h3>
        {imageUrl && imageUrl.length > 0 && (
          <img src={imageUrl[0]} alt={title} className={styles.fullPostImage} />
        )}
        <div className={styles.fullText}>{formattedText}</div>
        <div className={styles.shareButtons}>
                   <WhatsappShareButton url={postUrl}>
            <SocialIcon url='https://web.whatsapp.com/' title={`Share this post by What's App`} className={styles.shareButton} />
          </WhatsappShareButton>
          <TelegramShareButton url={postUrl}>
            <SocialIcon url='https://web.telegram.org/' title={`Share this post by Telegram`} className={styles.shareButton} />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
