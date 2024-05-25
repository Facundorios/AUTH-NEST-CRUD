import { IsString, MinLength, IsNotEmpty } from "class-validator"
import { title } from "process"
export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    title: string


    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    description: string
    finished: boolean
}       