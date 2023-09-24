import * as React from 'react';
import {PostPreview, UserPreview} from "@/types/application";
import PostPreviewCard from "@/components/PostPreviewCard";
import InfiniteScroller from "react-infinite-scroller";
import instance from "@/helpers/api";
import {PaginatedResponse} from "@/types/response";
import {produce} from "immer";

function UserPosts(props: {
    posts: PostPreview[],
    userId: string,
    containerRef: React.RefObject<HTMLDivElement>
}) {
    const [hasMore, setHasMore] = React.useState(true);
    const [posts, setPosts] = React.useState<PostPreview[]>([]);

    return <InfiniteScroller hasMore={hasMore} useWindow={false} getScrollParent={() => {
        return props.containerRef.current;
    }} pageStart={0} loadMore={async pageNumber => {
        const res = await instance.get<PaginatedResponse<PostPreview>>(`/user/${props.userId}/post`, {
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
    </InfiniteScroller>;
}

export default UserPosts;
