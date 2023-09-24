// pages/blog.js
import { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch data from your API here
    // Example using fetch:
    fetch('https://your-api-https://documenter.getpostman.com/view/9518923/2s946mZ9Zw.com/blog-posts')
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {/* Render blog posts here */}
    </div>
  );
};

export default BlogPage;
