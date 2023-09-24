"use client";

import * as React from 'react';
import {PostPreview} from "@/types/application";
import PostPreviewCard from "../PostPreviewCard";
import instance from "@/helpers/api";
import {PaginatedResponse} from "@/types/response";
import {produce} from "immer";
import InfiniteScroller from "react-infinite-scroller";

function PostViewer(props: {
    isPlaceholder: boolean,
    posts: PostPreview[],
}) {
    const [hasMore, setHasMore] = React.useState(true);
    const [posts, setPosts] = React.useState<PostPreview[]>(props.posts);
    const containerRef = React.useRef<HTMLDivElement | null>(null)

    return <main className={"flex flex-col pr-[8px] overflow-auto"} ref={containerRef}>
        <InfiniteScroller hasMore={hasMore} useWindow={false} getScrollParent={() => {
            return containerRef.current;
        }} pageStart={0} loadMore={async pageNumber => {
            const res = await instance.get<PaginatedResponse<PostPreview>>(`/post`, {
                params: {
                    page: pageNumber,
                }
            });

            setPosts(posts => {
                return produce(posts, draft => {
                    for (let item of res.data.data) {
                        draft.push(item);
                    }
                });
            });

            setHasMore((res.data.page + 1) * res.data.limit < res.data.total);
        }}>
            <div className={"flex flex-col gap-2"}>
                {posts.map(post => {
                    return <PostPreviewCard key={post.id} {...post}></PostPreviewCard>
                })}
            </div>
        </InfiniteScroller>
    </main>
}

export default PostViewer;
