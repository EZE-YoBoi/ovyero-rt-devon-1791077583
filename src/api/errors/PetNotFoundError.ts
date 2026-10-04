// SPDX-License-Identifier: MIT
// Copyright (c) 2026 rt-devon2 test org
import { HttpError } from 'routing-controllers';

export class PetNotFoundError extends HttpError {
    constructor() {
        super(404, 'Pet not found!');
    }
}
