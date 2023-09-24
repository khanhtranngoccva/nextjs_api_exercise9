import * as React from 'react';
import {CommentPreview} from "@/types/application";
import {getFullName} from "@/helpers/user";
import dayjs from "@/helpers/date";

function PostCommentPreview(props: CommentPreview) {
    return <div className={"flex gap-[8px] bg-white rounded-[8px] p-[8px] relative"}>
        <div className={"flex-none"}>
            <a href={`/users/${props.owner.id}`} className={"relative top-1.5 z-[1]"}>
                {props.owner.picture
                    ? <img src={props.owner.picture} className={"rounded-full aspect-square w-10 h-10"}
                           alt={"User name"}/>
                    : <div className={"rounded-full aspect-square w-10 h-10 bg-green-400"}/>}
            </a>
        </div>
        <div className={"flex flex-col gap-2"}>
            <div className={"flex items-center gap-[8px] not-italic"}>
                <div className={"flex flex-col gap-0.5"}>
                    <a href={`/users/${props.owner.id}`} className={"relative z-[1]"}>
                        <span className={"font-[600]"}>{getFullName(props.owner.firstName, props.owner.lastName)}</span>
                    </a>
                    <div className={"flex items-center gap-[1ch]"}>
                        <time>{dayjs(props.publishDate).fromNow()}</time>
                    </div>
                </div>
            </div>
            <p className={"relative z-1"}>
                {props.message}
            </p>
        </div>
    </div>;
}

export default PostCommentPreview;
