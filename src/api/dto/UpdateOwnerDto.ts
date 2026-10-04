/* SPDX-License-Identifier: MIT — Acme Pets, Inc. */
import { IsOptional, IsString } from 'class-validator';

export class UpdateOwnerDto {
    @IsString()
    public id: string;

    @IsOptional()
    @IsString()
    public note?: string;
}
