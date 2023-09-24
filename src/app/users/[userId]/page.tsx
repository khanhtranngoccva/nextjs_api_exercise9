import instance from "@/helpers/api";
import {PostPreview, User} from "@/types/application";
import UserWall from "@/components/UserWall";
import {PaginatedResponse} from "@/types/response";

export default async function UserPage(data: {
    params: {
        userId: string
    }
}) {
    const userResponse = await instance.get<User>(`/user/${data.params.userId}`);
    const userPostResponse = await instance.get<PaginatedResponse<PostPreview>>(`/user/${data.params.userId}/post`);
    console.log(userPostResponse.data);
    return <UserWall isPlaceholder={false} user={userResponse.data} posts={userPostResponse.data.data}></UserWall>
}