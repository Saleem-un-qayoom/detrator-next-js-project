import { redirect } from 'next/navigation';
import React from 'react';

function Home() {
  redirect('/posts');

  return <div>Home</div>;
}

export default Home;
