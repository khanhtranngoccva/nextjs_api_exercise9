import * as React from 'react';
import {User} from "@/types/application";
import {getFullName} from "@/helpers/user";
import dayjs from "@/helpers/date";

const GENDER_MAPPING: Record<string, string> = {
    "male": "he/him",
    "female": "she/her",
    "other": "they/them",
}

function UserProfile(props: User) {
    return <div className={"bg-white rounded-[8px] py-6 px-[24px] flex items-center gap-8"}>
        {props.picture ?
            <img className={"rounded-full w-24 h-24 aspect-square"} src={props.picture}
                 alt={getFullName(props.firstName, props.lastName)}/>
            : <div className={"rounded-full w-24 h-24 aspect-square bg-blue-300"}/>
        }
        <div className={"flex flex-col gap-1"}>
            <h1 className={"text-2xl font-[600]"}>{props.title}. {getFullName(props.firstName, props.lastName)}</h1>
            <ul className={"flex gap-x-4 gap-y-1 flex-wrap"}>
                <li>🎈 Born on {dayjs(props.dateOfBirth).format("DD/MM/YYYY")}</li>
                <li>⚧️ {GENDER_MAPPING[props.gender] ?? "they/them (unspecified gender)"}</li>
                <li>🗺️ {[props.location.city, props.location.state, props.location.country].join(", ")}</li>
                <li>🕰️ UTC {props.location.timezone}</li>
                <li><a href={`mailto:${props.email}`}>📫 {props.email}</a></li>
            </ul>
        </div>
    </div>;
}

export default UserProfile;
