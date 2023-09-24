import * as React from 'react';
import {UserPreview} from "@/types/application";
import {getFullName} from "@/helpers/user";

function UserPreviewCard(props: UserPreview) {
    return <li className={"w-full"}>
        <a href={`/users/${props.id}`}
           className={"bg-white rounded-[8px] flex items-center gap-[1.5ch] p-[8px] px-[12px]"}>
            {
                props.picture
                    ? <img src={props.picture} alt={getFullName(props.firstName, props.lastName)}
                           className={"w-10 h-10 rounded-full aspect-square"}/>
                    : <div className={"w-10 h-10 rounded-full aspect-square"}/>
            }
            <div className={"flex-col gap-1"}>
                <span className={"font-[600]"}>{getFullName(props.firstName, props.lastName)}</span>
            </div>
        </a>
    </li>;
}

export default UserPreviewCard;
