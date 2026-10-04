// SPDX-License-Identifier: MIT
// Copyright (c) 2026 rt-devon2 test org
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';

import { createDatabaseConnection } from '../../utils/database';

export const typeormLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {

    const connection = await createDatabaseConnection();
    if (settings) {
        settings.setData('connection', connection);
        settings.onShutdown(() => connection.close());
    }
};
