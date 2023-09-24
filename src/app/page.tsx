import instance from "@/helpers/api";
import {PaginatedResponse} from "@/types/response";
import {PostPreview} from "@/types/application";
import PostViewer from "@/components/PostViewer";

// Gets available posts
export default async function Home() {
    const res = await instance.get<PaginatedResponse<PostPreview>>("/post");
    const data = res.data;

    return <PostViewer isPlaceholder={false} posts={data.data}></PostViewer>
}