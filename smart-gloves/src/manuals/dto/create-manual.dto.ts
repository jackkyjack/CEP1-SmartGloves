import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateManualDto {
    @IsString()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly description?: string;

    @IsString()
    @IsOptional()
    readonly sign_method?: string;

    @IsString()
    @IsOptional()
    readonly url?: string;
}
