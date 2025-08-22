import BlogPost from './blogpost';

const BlogList = ({ posts, onSelect }) => {
  return (
    <div className="mt-10">
      {posts.map(post => (
        <div key={post.id} onClick={() => onSelect(post.id)} className="cursor-pointer">
          <BlogPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
