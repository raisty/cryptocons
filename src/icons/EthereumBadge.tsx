import React from 'react'
import { createIcon } from '../createIcon'

export const EthereumBadge = createIcon({
    rectElement: <rect height="24" width="24" fill="#E9E9E9" />,
    path: (
        <>
            <g clipPath="url(#EthereumBadge_a)">
                <path
                    d="M11.9984 3L11.8811 3.38729V14.6256L11.9984 14.7393L17.3652 11.6557L11.9984 3Z"
                    fill="#343434"
                ></path>
                <path
                    d="M11.9984 3L6.63158 11.6557L11.9984 14.7393V9.28462V3Z"
                    fill="#8C8C8C"
                ></path>
                <path
                    d="M11.9984 15.7271L11.9323 15.8053V19.8086L11.9984 19.9962L17.3684 12.645L11.9984 15.7271Z"
                    fill="#3C3C3B"
                ></path>
                <path
                    d="M11.9984 19.9961V15.727L6.63158 12.645L11.9984 19.9961Z"
                    fill="#8C8C8C"
                ></path>
                <path
                    d="M11.9984 14.7393L17.3651 11.6558L11.9984 9.28468V14.7393Z"
                    fill="#141414"
                ></path>
                <path
                    d="M6.63158 11.6557L11.9983 14.7393V9.28462L6.63158 11.6557Z"
                    fill="#393939"
                ></path>
            </g>
            <defs>
                <clipPath id="EthereumBadge_a">
                    <rect
                        width="10.7368"
                        height="17"
                        fill="white"
                        transform="translate(6.63158 3)"
                    ></rect>
                </clipPath>
            </defs>
        </>
    ),
})
