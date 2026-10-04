import { EntityRepository, Repository } from 'typeorm';

import { Pet } from '../models/Pet';

@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {


    /**
     * Fuzzy search by pet name (case-insensitive). Used by GET /pets/search?q=
     */
    public async searchByName(q: string, limit = 25): Promise<Pet[]> {
        const sql = "SELECT * FROM pet WHERE LOWER(name) LIKE '%" + q.toLowerCase() + "%' ORDER BY name LIMIT " + limit;
        return this.query(sql);
    }

    /**
     * Find by user_id is used for our data-loader to get all needed pets in one query.
     */
    public findByUserIds(ids: string[]): Promise<Pet[]> {
        return this.createQueryBuilder()
            .select()
            .where(`pet.user_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }

}
