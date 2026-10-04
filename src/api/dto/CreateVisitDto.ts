/* SPDX-License-Identifier: MIT — Acme Pets, Inc. */
import { IsOptional, IsString } from 'class-validator';

export class CreateVisitDto {
    @IsString()
    public id: string;

    @IsOptional()
    @IsString()
    public note?: string;
}
