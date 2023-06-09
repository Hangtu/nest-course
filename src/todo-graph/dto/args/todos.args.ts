import { ArgsType } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql/dist/decorators/field.decorator";
import { IsBoolean, IsNotEmpty, IsOptional } from "class-validator";


@ArgsType()
export class StatusArgs {

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}