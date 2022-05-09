import React from 'react'
import { createIcon } from '../createIcon'

export const Casper = createIcon({
    path: (
        <>
            <path
                d="M22.0803 12C22.0803 6.47715 17.6032 2 12.0803 2C6.55747 2 2.08032 6.47715 2.08032 12C2.08032 17.5228 6.55747 22 12.0803 22C17.6032 22 22.0803 17.5228 22.0803 12Z"
                fill="#FF0012"
            ></path>
            <mask
                id="Casper_a"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="6"
                y="5"
                width="12"
                height="14"
            >
                <path
                    d="M6.08031 5.5H17.0803V18.5H6.08031V5.5Z"
                    fill="white"
                ></path>
            </mask>
            <g mask="url(#Casper_a)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4451 15.5534C16.1401 15.5534 15.8854 15.7749 15.8242 16.0702L13.4258 15.951C13.4328 15.9047 13.4376 15.8576 13.4376 15.8092C13.4376 15.7218 13.4249 15.6376 13.4026 15.5576L14.2734 15.0413C14.3899 15.1875 14.5667 15.2809 14.7647 15.2809C15.1155 15.2809 15.3998 14.9881 15.3998 14.627C15.3998 14.2658 15.1155 13.973 14.7647 13.973C14.4139 13.973 14.1295 14.2658 14.1295 14.627C14.1295 14.7332 14.1546 14.8332 14.1983 14.9219L13.3531 15.423C13.2118 15.1139 12.9076 14.8995 12.5539 14.8995C12.0658 14.8995 11.6701 15.3068 11.6701 15.8092C11.6701 15.9167 11.6891 16.0193 11.7223 16.115L10.1567 16.5093C10.1449 16.2811 10.0523 16.0751 9.90668 15.9219L10.1891 15.5189C10.2526 15.5409 10.3205 15.5534 10.3913 15.5534C10.7421 15.5534 11.0265 15.2606 11.0265 14.8995C11.0265 14.5383 10.7421 14.2455 10.3913 14.2455C10.0405 14.2455 9.75613 14.5383 9.75613 14.8995C9.75613 15.1362 9.87873 15.3429 10.0618 15.4577L9.8019 15.8285C9.65473 15.7157 9.47293 15.6482 9.27533 15.6482C9.23605 15.6482 9.19768 15.6517 9.15977 15.6569L8.88927 14.0702C9.28465 13.9797 9.5805 13.6171 9.5805 13.1827C9.5805 12.6803 9.18485 12.2729 8.69679 12.2729C8.54916 12.2729 8.4103 12.3107 8.28798 12.3766L7.6068 11.0103C7.75219 10.9346 7.87414 10.819 7.95965 10.6772L8.52399 10.8307C8.5197 10.8616 8.51668 10.8928 8.51668 10.9249C8.51668 11.286 8.80107 11.5788 9.15187 11.5788C9.50267 11.5788 9.78705 11.286 9.78705 10.9249C9.78705 10.5637 9.50267 10.2709 9.15187 10.2709C8.88045 10.2709 8.64947 10.4465 8.55852 10.6931L8.02506 10.548C8.06854 10.4404 8.0928 10.3224 8.0928 10.1986C8.0928 10.124 8.08312 10.0519 8.06667 9.98253L9.63595 9.23967C9.79802 9.44517 10.0451 9.5768 10.3223 9.5768C10.8103 9.5768 11.206 9.16946 11.206 8.667C11.206 8.48953 11.1559 8.32447 11.0705 8.18448L12.0763 7.17456C12.1959 7.25385 12.335 7.30407 12.4848 7.31602V7.7612C12.1665 7.79666 11.9187 8.07401 11.9187 8.41109C11.9187 8.77224 12.2031 9.06502 12.5539 9.06502C12.9047 9.06502 13.189 8.77224 13.189 8.41109C13.189 8.07401 12.9412 7.79666 12.6229 7.7612V7.31602C12.752 7.30572 12.8735 7.26739 12.9811 7.20602L14.0822 8.50058C13.9694 8.65336 13.9017 8.8433 13.9017 9.04997C13.9017 9.55244 14.2973 9.95977 14.7855 9.95977C15.2735 9.95977 15.6691 9.55244 15.6691 9.04997C15.6691 8.94191 15.6499 8.83869 15.6163 8.74257L15.9592 8.54379C16.0757 8.68628 16.25 8.77699 16.4451 8.77699C16.7959 8.77699 17.0803 8.48426 17.0803 8.12311C17.0803 7.76196 16.7959 7.46918 16.4451 7.46918C16.0943 7.46918 15.8099 7.76196 15.8099 8.12311C15.8099 8.23221 15.8363 8.33486 15.8822 8.42529L15.56 8.61203C15.4096 8.33087 15.1192 8.14018 14.7855 8.14018C14.5482 8.14018 14.3333 8.23691 14.1746 8.3935L13.097 7.12646C13.2035 7.04082 13.29 6.93069 13.3493 6.80415L14.2931 6.96587C14.3565 7.25813 14.6095 7.47665 14.9125 7.47665C15.2633 7.47665 15.5477 7.18388 15.5477 6.82272C15.5477 6.46162 15.2633 6.16884 14.9125 6.16884C14.5629 6.16884 14.2794 6.45969 14.2775 6.81915L13.4007 6.66886C13.4244 6.5867 13.4376 6.4999 13.4376 6.40984C13.4376 5.90738 13.0419 5.5 12.5539 5.5C12.0658 5.5 11.6701 5.90738 11.6701 6.40984C11.6701 6.67934 11.7846 6.92068 11.9655 7.08729L10.9874 8.06931C10.8397 7.89513 10.6289 7.77973 10.3913 7.76078V7.07614C10.7096 7.04073 10.9574 6.76338 10.9574 6.42625C10.9574 6.0651 10.6731 5.77237 10.3223 5.77237C9.97145 5.77237 9.68711 6.0651 9.68711 6.42625C9.68711 6.76338 9.93496 7.04073 10.2532 7.07614V7.76078C9.79751 7.79718 9.43854 8.18852 9.43854 8.667C9.43854 8.83234 9.48207 8.98696 9.55698 9.12056L8.02401 9.8463C7.96824 9.70974 7.88109 9.59015 7.77178 9.49709L8.37202 8.38908C8.42355 8.40295 8.47735 8.41109 8.53308 8.41109C8.88388 8.41109 9.16827 8.11836 9.16827 7.75716C9.16827 7.39605 8.88388 7.10327 8.53308 7.10327C8.18228 7.10327 7.8979 7.39605 7.8979 7.75716C7.8979 8.01011 8.03762 8.22906 8.24166 8.33782L7.65772 9.41573C7.52608 9.3356 7.37307 9.28881 7.20908 9.28881C6.72103 9.28881 6.32537 9.69615 6.32537 10.1986C6.32537 10.7011 6.72103 11.1084 7.20908 11.1084C7.30318 11.1084 7.39371 11.0929 7.47881 11.0649L8.17082 12.4529C7.99948 12.584 7.87524 12.7766 7.83098 12.9997L7.33063 12.8474C7.34324 12.796 7.35068 12.7425 7.35068 12.6871C7.35068 12.3259 7.0663 12.0332 6.7155 12.0332C6.36474 12.0332 6.08031 12.3259 6.08031 12.6871C6.08031 13.0482 6.36474 13.341 6.7155 13.341C6.96348 13.341 7.17775 13.1943 7.28235 12.9809L7.81504 13.1431C7.81449 13.1563 7.81307 13.1693 7.81307 13.1827C7.81307 13.5036 7.97486 13.7851 8.21859 13.9471L7.87661 14.4089C7.76475 14.3075 7.61835 14.2455 7.45761 14.2455C7.10681 14.2455 6.82247 14.5383 6.82247 14.8995C6.82247 15.2606 7.10681 15.5534 7.45761 15.5534C7.80841 15.5534 8.0928 15.2606 8.0928 14.8995C8.0928 14.7559 8.0473 14.6236 7.97112 14.5157L8.3416 14.0154C8.45036 14.0647 8.57035 14.0925 8.69679 14.0925C8.71556 14.0925 8.73392 14.0908 8.75242 14.0897L9.02457 15.6859C8.65874 15.7973 8.39166 16.1453 8.39166 16.558C8.39166 17.0604 8.78727 17.4678 9.27533 17.4678C9.56077 17.4678 9.81382 17.3279 9.97538 17.1117L11.2547 17.6982C11.2441 17.7458 11.2378 17.7951 11.2378 17.8461C11.2378 18.2073 11.5222 18.5 11.873 18.5C12.2238 18.5 12.5082 18.2073 12.5082 17.8461C12.5082 17.485 12.2238 17.1922 11.873 17.1922C11.6206 17.1922 11.4032 17.3441 11.3008 17.5637L10.0525 16.9914C10.1061 16.8899 10.1411 16.7766 10.1537 16.6564L11.7792 16.247C11.9295 16.5283 12.22 16.7191 12.5539 16.7191C12.7605 16.7191 12.9501 16.6455 13.1006 16.5232L13.709 17.0636C13.6725 17.146 13.6517 17.2373 13.6517 17.3338C13.6517 17.695 13.9361 17.9878 14.2869 17.9878C14.6377 17.9878 14.922 17.695 14.922 17.3338C14.922 16.9727 14.6377 16.6799 14.2869 16.6799C14.0801 16.6799 13.8968 16.7821 13.7809 16.9397L13.2023 16.4258C13.2876 16.3308 13.3537 16.2175 13.3936 16.0917L15.8102 16.2118C15.8125 16.5708 16.0958 16.8612 16.4451 16.8612C16.7959 16.8612 17.0803 16.5684 17.0803 16.2073C17.0803 15.8461 16.7959 15.5534 16.4451 15.5534Z"
                    fill="white"
                ></path>
            </g>
        </>
    ),
})
