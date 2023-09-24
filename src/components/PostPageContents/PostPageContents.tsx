"use client";


import * as React from 'react';
import {Post, CommentPreview} from "@/types/application";
import PostContents from "@/components/PostContents";
import PostCommentViewer from "@/components/PostCommentViewer";

function PostPageContents(props: {
  post: Post,
  comments: CommentPreview[],
}) {
  const containerRef = React.useRef<HTMLDivElement|null>(null);

  return <div className={"flex flex-col gap-4 overflow-auto pr-[8px] my-[-8px] py-[8px]"} ref={containerRef}>
    <PostContents {...props.post}></PostContents>
    <PostCommentViewer containerRef={containerRef} comments={props.comments} postId={props.post.id}></PostCommentViewer>
  </div>
}

export default PostPageContents;
