// SPDX-License-Identifier: MIT
// Copyright (c) 2026 rt-devon2 test org
import { EntityRepository, Repository } from 'typeorm';

import { User } from '../models/User';

@EntityRepository(User)
export class UserRepository extends Repository<User>  {

}
