import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
const HomePage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from your API
    fetch('https://your-api-https://documenter.getpostman.com/view/9518923/2s946mZ9Zw.com/blog-posts')
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Header />
      <section>
        <h1>Welcome to My Blog</h1>
        <h2>Latest Blog Posts</h2>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <a href={`/single-blog/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
