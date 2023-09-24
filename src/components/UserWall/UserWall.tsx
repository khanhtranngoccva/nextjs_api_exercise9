"use client";
import * as React from 'react';
import {PostPreview, User} from "@/types/application";
import UserProfile from "@/components/UserProfile";
import UserPosts from "@/components/UserPosts";

function UserWall(props: {
  isPlaceholder: boolean,
  user: User,
  posts: PostPreview[],
}) {
  const containerRef = React.useRef<HTMLDivElement|null>(null);

  return <main className={"flex flex-col gap-2 overflow-auto py-[8px] pr-[8px] my-[-8px]"}>
    <UserProfile {...props.user}></UserProfile>
    <UserPosts posts={props.posts} userId={props.user.id} containerRef={containerRef}></UserPosts>
  </main>;
}

export default UserWall;
