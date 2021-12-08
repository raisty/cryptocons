import React from 'react'
import { createIcon } from '../createIcon'

export const BithumbBadge = createIcon({
    rectFill: 'white',
    path: (
        <>
            <path
                d="M7.05948 7.71054H9.31507L7.56128 12.0419C7.56128 12.0419 6.64448 12.0268 6.36415 11.2179C6.28563 10.9777 6.27904 10.7195 6.3452 10.4756L7.05948 7.71054Z"
                fill="#D53127"
            ></path>
            <path
                d="M15.8076 7.80325L12.9394 7.75288L13.5849 5.60332C13.6444 5.40655 13.6574 5.19845 13.623 4.99568C13.5885 4.79291 13.5076 4.60109 13.3866 4.43556C13.2656 4.27003 13.1079 4.13538 12.9262 4.04239C12.7444 3.94939 12.5436 3.90063 12.3399 3.89999H9.72217L6.72935 14.7536C6.72935 14.7536 5.65692 19.3952 9.72217 19.8152C9.72217 19.8152 16.1487 21.1418 18.2108 13.301C18.2108 13.301 19.2992 8.55872 15.8076 7.80325ZM13.8473 13.1862C13.8473 13.1862 13.7325 15.1887 12.2361 15.5402C12.0152 15.5963 11.7817 15.5721 11.5767 15.4718C11.3423 15.3509 11.0999 15.1001 11.1058 14.5743C11.1098 14.4223 11.1339 14.2715 11.1777 14.126L11.7303 12.0419H13.2387C13.2387 12.0419 13.9221 12.2666 13.8473 13.1862Z"
                fill="#F47320"
            ></path>
            <path
                d="M18.3486 11.1152C18.0742 7.92914 15.8077 7.80323 15.8077 7.80323L12.9396 7.75287L11.7075 12.0671H13.2119C13.4882 12.0822 13.992 12.5425 13.8284 13.3574"
                fill="url(#BithumbBadge_a)"
            ></path>
            <defs>
                <linearGradient
                    id="BithumbBadge_a"
                    x1="17.8218"
                    y1="15.3771"
                    x2="13.2401"
                    y2="8.41386"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.41" stopColor="#F47320"></stop>
                    <stop offset="0.5" stopColor="#F16D21"></stop>
                    <stop offset="0.62" stopColor="#E95C22"></stop>
                    <stop offset="0.75" stopColor="#DC4125"></stop>
                    <stop offset="0.81" stopColor="#D53127"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
