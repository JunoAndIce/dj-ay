import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const handleAddComment = () => {
    if (input.trim()) {
      setComments(prev => [...prev, input]);
      setInput('');
    }
  };

  return (
    <div className="mt-4">
      <label className="label">Comments</label>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Write a comment..."
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={handleAddComment}>
            Post
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {comments.map((comment, idx) => (
          <div
            key={idx}
            className="p-2 rounded bg-gray-100 text-sm border-l-4 border-info"
          >
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
