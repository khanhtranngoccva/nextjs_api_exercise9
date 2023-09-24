"use client";

import * as React from 'react';
import {UserPreview} from "@/types/application";
import UserPreviewCard from "@/components/UserPreviewCard";
import InfiniteScroller from "react-infinite-scroller";
import instance from "@/helpers/api";
import {PaginatedResponse} from "@/types/response";
import {produce} from "immer";

function UserList(props: {
    isPlaceholder: boolean,
    users: UserPreview[],
}) {
    const [hasMore, setHasMore] = React.useState(true);
    const [users, setUsers] = React.useState(props.users);
    const containerRef = React.useRef<HTMLDivElement|null>(null);

    return <div className={"overflow-auto py-[8px] my-[-8px] pr-[8px]"}>
        <InfiniteScroller useWindow={false} getScrollParent={() => {
            return containerRef.current;
        }} pageStart={0} hasMore={hasMore} loadMore={async pageNumber => {
            const res = await instance.get<PaginatedResponse<UserPreview>>("/user", {
                params: {
                    page: pageNumber,
                }
            });

            setUsers(users => {
                return produce(users, draft => {
                    for (let item of res.data.data) {
                        draft.push(item);
                    }
                });
            });

            setHasMore((res.data.page + 1) * res.data.limit < res.data.total);
        }}>
            <ul className={"flex flex-col gap-2 "}>
                {users.map(user => {
                    return <UserPreviewCard key={user.id} {...user}></UserPreviewCard>
                })}
            </ul>
        </InfiniteScroller>
    </div>;
}

export default UserList;
