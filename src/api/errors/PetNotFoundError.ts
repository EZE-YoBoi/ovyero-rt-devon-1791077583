/* SPDX-License-Identifier: MIT — Acme Pets, Inc. */
import { HttpError } from 'routing-controllers';

export class PetNotFoundError extends HttpError {
    constructor() {
        super(404, 'Pet not found!');
    }
}
