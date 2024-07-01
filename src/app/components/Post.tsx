import DeletePostButton from "./DeletePostButton";

import React from 'react';

interface PostProps {
  id: string;
  title: string;
  content: string| null;
  authorName: string | null | undefined ;
}

const Post: React.FC<PostProps> = ({ id, title, content, authorName }) => {
  return (
    <div style={{ border: '1px solid white', padding: '15px', margin: '10px 0px' }}>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      <DeletePostButton postId={id} />
    </div>
  );
};

export default Post;
