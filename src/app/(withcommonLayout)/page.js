import React from 'react';

const Home = async() => {
  const res = await fetch('http://localhost:5000/posts',{
    next:{
      revalidate:5
    }
  });
  const posts = await res.json()
  console.log(posts);
  return (
    <div>
      {
        posts.map((item) => (
          < >
          <div className='flex'>
          <h1 className='text-black'>id:{item.id}</h1>
          <h1 key={item.id} className='text-black px-3'>{item.title}</h1>
          <button>Buy now</button>
          </div>
          </>
        ))
      }
      <h1 className='text-black'>shs</h1>
    </div>
  );
};

export default Home;