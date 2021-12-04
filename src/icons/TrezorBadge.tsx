import React from 'react'
import { createIcon } from '../createIcon'

export const TrezorBadge = createIcon({
    rectElement: <rect height="24" width="24" fill="black" />,
    path: (
        <>
            <path
                d="M15.9167 7.71292C15.9167 5.68421 14.1559 4 12.0124 4C9.86881 4 8.10805 5.68421 8.10805 7.71292V8.89952H6.50039V17.4354L12.0124 20L17.5243 17.4354V8.9378H15.9167V7.71292ZM10.0985 7.71292C10.0985 6.75598 10.9406 5.99043 12.0124 5.99043C13.0841 5.99043 13.9262 6.75598 13.9262 7.71292V8.89952H10.0985V7.71292ZM15.3042 16.0574L12.0124 17.5885L8.72049 16.0574V10.9282H15.3042V16.0574Z"
                fill="white"
            ></path>
        </>
    ),
})
