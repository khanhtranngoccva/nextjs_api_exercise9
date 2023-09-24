import * as React from 'react';

function LikeButton(props: {
  likes: number
}) {
  return <button className={"flex gap-[0.5ch] bg-red-100 p-[4px] px-[1ch] rounded-[8px] z-[1]"}>
    <span>💖</span>
    <span>{props.likes}</span>
  </button>;
}

export default LikeButton;
