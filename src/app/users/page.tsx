import instance from "@/helpers/api";
import {UserPreview} from "@/types/application";
import {PaginatedResponse} from "@/types/response";
import UserList from "@/components/UserList";

export default async function UserListPage() {
    const res = await instance.get<PaginatedResponse<UserPreview>>("/user");
    const data = res.data;

    return <UserList users={data.data} isPlaceholder={false}></UserList>
}