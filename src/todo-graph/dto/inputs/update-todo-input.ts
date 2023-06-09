import { Int } from "@nestjs/graphql";
import { Field } from "@nestjs/graphql/dist/decorators/field.decorator";
import { InputType } from "@nestjs/graphql/dist/decorators/input-type.decorator";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";


@InputType()
export class UpdateTodoInput {

    @Field(() => Int, { description: 'What needs to be done' })
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @Field(() => String,  { nullable: true })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @MaxLength(20)
    description?: string;

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    @IsNotEmpty()
    @IsOptional()
    done?: boolean;
}