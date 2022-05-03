import React from 'react'
import { createIcon } from '../createIcon'

export const CoinoneBadge = createIcon({
    rectFill: 'url(#CoinoneBadge_a)',
    path: (
        <>
            <path
                d="M18.3059 11.6954L20.4068 8.8163C19.7241 6.7944 18.3451 5.08087 16.516 3.98152C14.6869 2.88218 12.5267 2.46856 10.4209 2.81448C8.31506 3.1604 6.40067 4.24335 5.01937 5.87006C3.63808 7.49677 2.87976 9.56139 2.87976 11.6954C2.87976 13.8295 3.63808 15.8941 5.01937 17.5208C6.40067 19.1475 8.31506 20.2305 10.4209 20.5764C12.5267 20.9223 14.6869 20.5087 16.516 19.4093C18.3451 18.31 19.7241 16.5965 20.4068 14.5746L18.3059 11.6954ZM16.5059 14.3526C15.5854 15.8466 13.7631 16.924 11.8774 16.924C10.9791 16.9234 10.0961 16.6914 9.31358 16.2504C8.53104 15.8093 7.87533 15.1741 7.40966 14.4059C6.94399 13.6378 6.68408 12.7626 6.65498 11.8648C6.62588 10.967 6.82857 10.0769 7.24351 9.28018C7.65845 8.48349 8.27165 7.80714 9.02399 7.31634C9.77632 6.82554 10.6424 6.53684 11.5388 6.47808C12.4351 6.41931 13.3315 6.59247 14.1415 6.98085C14.9514 7.36924 15.6477 7.95974 16.1631 8.69544L18.2202 11.6954L16.5059 14.3526Z"
                fill="white"
            ></path>
            <defs>
                <linearGradient
                    id="CoinoneBadge_a"
                    x1="9.54358"
                    y1="0.538311"
                    x2="14.7143"
                    y2="23.2849"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#01AEFF"></stop>
                    <stop offset="1" stopColor="#0157FF"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
