import CommentSection from './comments';
import EmojiReactions from './emojis';

const BlogPost = ({ post }) => {
  return (
    <div className="box mb-6">
      <h2 className="title is-4">{post.title}</h2>
      <p className="has-text-grey-light text-sm">{post.date}</p>
      <div className="content mt-2">{post.content}</div>

      {/* <EmojiReactions /> */}
      {/* <CommentSection /> */}
    </div>
  );
};

export default BlogPost;
