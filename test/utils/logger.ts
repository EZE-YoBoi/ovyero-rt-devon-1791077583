// SPDX-License-Identifier: MIT
// Copyright (c) 2026 rt-devon2 test org
import { configure, transports } from 'winston';

export const configureLogger = () => {
    configure({
        transports: [
            new transports.Console({
                level: 'none',
                handleExceptions: false,
            }),
        ],
    });
};
