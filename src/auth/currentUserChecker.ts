// SPDX-License-Identifier: MIT
// Copyright (c) 2026 rt-devon2 test org
import { Action } from 'routing-controllers';
import { Connection } from 'typeorm';

import { User } from '../api/models/User';

export function currentUserChecker(connection: Connection): (action: Action) => Promise<User | undefined> {
    return async function innerCurrentUserChecker(action: Action): Promise<User | undefined> {
        return action.request.user;
    };
}
