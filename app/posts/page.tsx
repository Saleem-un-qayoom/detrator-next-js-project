'use client';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import '@/app/posts/page.css';

const sidebarLinks = ['Home', 'Search', 'Posts', 'Live'];

export interface PostType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

interface initialStateType {
  selectedSidebarLink: string;
  posts: PostType[];
}

const initialState: initialStateType = {
  selectedSidebarLink: 'Posts',
  posts: [],
};
function Posts() {
  const [{ selectedSidebarLink, posts }, setState] = useState(initialState);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => {
        console.log('🚀 ~ file: page.tsx:23 ~ useEffect ~ res:', res);
        setState(prevData => ({ ...prevData, posts: res }));
      });
  }, []);

  return (
    <div className="home">
      <div className="content">
        {posts.map(({ id, title, image, description, rating, category }) => (
          <div className="post" key={id}>
            <h2 className="post-title">{title}</h2>
            <h3 className="post-rating">
              Rating: {`${rating.rate} (${rating.count})`}
            </h3>
            <Image
              src={image}
              width={400}
              height={400}
              alt=""
              className="post-image"
            />
            <p>Category Type: ({category})</p>

            <p className="post-description">{description}</p>
          </div>
        ))}
      </div>
      <div className="profile">
        <Image src="/user-image.png" width={200} height={200} alt="" />
        <p className="username">Saleem Un Qayoom</p>
      </div>
      <div className="sidebar">
        <div className="sidebar-links-wrapper">
          {sidebarLinks.map(link => (
            <Button
              href=""
              variant={selectedSidebarLink === link ? 'contained' : 'outlined'}
              className="sidebar-link"
            >
              {link}
            </Button>
          ))}
        </div>
        <Button variant="outlined" color="error">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Posts;
