import { useState } from 'react';

const emojis = ['👍', '❤️', '😂', '😮', '😢', '👏'];

const EmojiReactions = () => {
  const [reactions, setReactions] = useState({});

  const handleReact = emoji => {
    setReactions(prev => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1,
    }));
  };

  return (
    <div className="mt-4 mb-2 flex gap-2">
      {emojis.map(emoji => (
        <button
          key={emoji}
          className="button is-small is-light"
          onClick={() => handleReact(emoji)}
        >
          {emoji} {reactions[emoji] || 0}
        </button>
      ))}
    </div>
  );
};

export default EmojiReactions;
