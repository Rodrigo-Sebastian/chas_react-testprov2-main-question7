'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Post Titles</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
