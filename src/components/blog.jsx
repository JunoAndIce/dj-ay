// components/Blog.jsx
import { useState } from 'react';
import BlogList from './bloglist';
import { posts } from '../data/posts';
import BlogExpand from './blogExpand';
import InstagramEmbed from './instagram';

const Blog = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedPost = posts.find(post => post.id === selectedId);

  return (
    <section className="section">
      {/* <div className='mt-10'>
        <p className='md:text-[3rem] text-[3rem] font-extrabold'>NEWS</p>
        <p className='subtitle is-6 type-body-sm'>Keep up with DJ A.Y.</p>
        <div className="h-[1px] w-full bg-divider-primary"></div>
      </div>
      {!selectedPost ? (
        <>


          <BlogList posts={posts} onSelect={setSelectedId} />
        </>
      ) : (
        <BlogExpand post={selectedPost} onBack={() => setSelectedId(null)} />
      )} */}
      <div className='mt-10 '>
        <InstagramEmbed url="https://www.instagram.com/dja.y_/?utm_source=ig_embed&amp;utm_campaign=loading" />
      </div>

    </section>
  );
};

export default Blog;
