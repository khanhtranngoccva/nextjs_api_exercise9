"use client";
import * as React from 'react';
import {CommentPreview} from "@/types/application";
import PostCommentPreview from "@/components/PostCommentPreview";
import InfiniteScroller from "react-infinite-scroller";
import instance from "@/helpers/api";
import {PaginatedResponse} from "@/types/response";
import {produce} from "immer";

function PostCommentViewer(props: {
    containerRef: React.RefObject<HTMLDivElement>;
    postId: string,
    comments: CommentPreview[],
}) {
    const [comments, setComments] = React.useState(props.comments);
    const [hasMore, setHasMore] = React.useState(true);

    return <InfiniteScroller useWindow={false} getScrollParent={() => {
        return props.containerRef.current;
    }} hasMore={hasMore} pageStart={0} loadMore={async pageNumber => {
        const res = await instance.get<PaginatedResponse<CommentPreview>>(`/post/${props.postId}/comment`, {
            params: {
                page: pageNumber
            }
        });

        setComments(comments => {
            return produce(comments, draft => {
                for (let item of res.data.data) {
                    draft.push(item);
                }
            });
        });

        setHasMore((res.data.page + 1) * res.data.limit < res.data.total);
    }}>
        <ul className={"flex flex-col gap-2"}>
            {comments.map(comment => {
                return <PostCommentPreview key={comment.id} {...comment}></PostCommentPreview>
            })}
        </ul>
    </InfiniteScroller>;
}

export default PostCommentViewer;
