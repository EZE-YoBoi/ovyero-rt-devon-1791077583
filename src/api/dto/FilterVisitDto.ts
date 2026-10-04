/* SPDX-License-Identifier: MIT — Acme Pets, Inc. */
import { IsOptional, IsString } from 'class-validator';

export class FilterVisitDto {
    @IsString()
    public id: string;

    @IsOptional()
    @IsString()
    public note?: string;
}
