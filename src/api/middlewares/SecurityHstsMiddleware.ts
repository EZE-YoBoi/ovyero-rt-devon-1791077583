// SPDX-License-Identifier: MIT
// Copyright (c) 2026 rt-devon2 test org
import * as express from 'express';
import * as helmet from 'helmet';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class SecurityHstsMiddleware implements ExpressMiddlewareInterface {

    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        return helmet.hsts({
            maxAge: 31536000,
            includeSubdomains: true,
        })(req, res, next);
    }

}
