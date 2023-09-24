import instance from "@/helpers/api";
import PostPageContents from "@/components/PostPageContents";
import {CommentPreview, Post} from "@/types/application";
import {PaginatedResponse} from "@/types/response";

export default async function PostPage(data: {
    params: {
        postId: string
    }
}) {
    const postResponse = await instance.get<Post>(`/post/${data.params.postId}`);
    const postCommentResponse = await instance.get<PaginatedResponse<CommentPreview>>(`/post/${data.params.postId}/comment`);

    return <PostPageContents post={postResponse.data} comments={postCommentResponse.data.data}></PostPageContents>
}