/* eslint-disable max-len */
import React from 'react';

// components
import { Text } from 'global/Text';

// const
import { cnPlug, cnPlugTitle, cnPlugSubtitle } from './Plug.const';

// styles
import './Plug.css';

export const Plug = ({ title, subtitle, className }) => {
    return (
        <div className={cnPlug(null, [className])}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="64px"
                height="64px"
                viewBox="0 0 485.213 485.212"
                fill="currentColor"
                xmlSpace="preserve"
            >
                <path d="M363.908,212.282v-90.978C363.908,54.434,309.509,0,242.606,0c-66.884,0-121.302,54.434-121.302,121.304v90.978   c-33.498,0-60.653,27.158-60.653,60.648v151.629c0,33.5,27.155,60.653,60.653,60.653h242.604c33.491,0,60.653-27.153,60.653-60.653   V272.93C424.562,239.439,397.399,212.282,363.908,212.282z M257.77,359.257v50.139c0,8.382-6.781,15.163-15.163,15.163   c-8.382,0-15.164-6.781-15.164-15.163v-50.139c-8.9-5.269-15.161-14.57-15.161-25.673c0-16.765,13.579-30.327,30.324-30.327   c16.745,0,30.326,13.562,30.326,30.327C272.933,344.687,266.665,353.989,257.77,359.257z M303.255,212.282h-121.3v-90.978   c0-33.465,27.2-60.653,60.651-60.653c33.435,0,60.648,27.188,60.648,60.653V212.282z" />
            </svg>
            <Text className={cnPlugTitle()} type="h4">
                {title}
            </Text>
            <Text className={cnPlugSubtitle()} type="h5">
                {subtitle}
            </Text>
        </div>
    );
};
