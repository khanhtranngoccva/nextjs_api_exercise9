import * as React from 'react';

function Tag({tag}: {tag: string}) {
  return <li className={"bg-blue-300 rounded-[8px] py-0.5 px-[1ch] relative z-[1]"} key={tag}>{tag}</li>;
}

export default Tag;
