import React from 'react'
import { createIcon } from '../createIcon'

export const TerraBadge = createIcon({
    rectFill: 'white',
    path: (
        <>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0528 17.0549C11.5304 18.8769 13.2446 20.2672 14.11 20.2102C14.1402 20.2082 17.3936 19.583 19.1744 16.5155C20.5606 14.1288 20.0885 11.8244 18.2034 11.7743C17.5254 11.8251 10.1422 13.5833 11.0528 17.0549ZM12.6902 3.33705C11.4625 3.33705 10.2973 3.60057 9.2432 4.07064C9.05877 4.14794 8.87912 4.23616 8.70519 4.33484C8.58579 4.39866 8.46638 4.4618 8.35109 4.53042L8.37854 4.53934C8.02925 4.78158 7.72868 5.06363 7.48232 5.39027C5.04412 8.61833 13.2158 10.9646 17.5844 10.9728C19.5951 12.4187 20.1592 6.90068 18.1952 5.369C16.6629 4.05404 14.7093 3.33297 12.6902 3.33705Z"
                fill="#0E3CA5"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.61935 5.22989C8.51451 6.85284 4.83353 7.9968 4.22827 7.81838L4.22552 7.81151L4.30101 7.66535C4.93342 6.4787 5.83151 5.45426 6.92518 4.67198C7.15164 4.50934 7.38633 4.35768 7.62857 4.21632C8.14257 3.92467 8.67097 3.90683 8.84459 3.89996C10.4833 3.93016 9.62758 5.21685 9.61866 5.22989"
                fill="#5493F7"
            ></path>
            <mask
                id="TerraBadge_a"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="3"
                y="8"
                width="6"
                height="13"
            >
                <path
                    d="M3.1001 8.96204H8.72518V20.2115H3.1001V8.96204Z"
                    fill="white"
                ></path>
            </mask>
            <g mask="url(#TerraBadge_a)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.69222 17.3918C8.77457 17.925 8.69016 20.0324 8.57899 20.2101C8.48429 20.2156 8.28528 20.228 7.7109 19.9096C6.5964 19.2817 5.62599 18.427 4.86234 17.4007C4.30369 16.649 3.86607 15.8145 3.56535 14.9275C3.25578 14.01 3.09861 13.0479 3.10008 12.0796C3.09836 11.0151 3.28852 9.95906 3.66142 8.96204H3.66279C4.32158 9.82601 5.0833 10.6076 5.73042 11.4805C6.34735 12.3109 7.19554 13.6648 7.36779 13.9544C8.43969 15.7503 8.61056 16.8586 8.69222 17.3918Z"
                    fill="#5493F7"
                ></path>
            </g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1002 12.1792C21.1002 13.3314 20.8806 14.4328 20.4833 15.443C19.4402 16.5684 12.4049 13.7988 12.3356 13.7686C11.3735 13.3458 8.4446 12.0585 8.1804 10.0368C7.80022 7.12854 13.6826 5.10139 16.2677 5.02454C16.5772 5.02797 17.5208 5.03895 18.0704 5.48775C19.0236 6.32226 19.7871 7.3511 20.3097 8.50514C20.8323 9.65919 21.1018 10.9117 21.1002 12.1786V12.1792ZM14.9481 19.3731C15.3687 17.8839 19.047 16.3577 19.8588 16.2754C19.959 16.2651 20.0015 16.3358 19.9576 16.4168C19.1108 17.9567 17.857 19.2248 16.3398 20.0469C15.5725 20.4189 14.7285 20.1478 14.9481 19.3731Z"
                fill="#5493F7"
            ></path>
        </>
    ),
})
