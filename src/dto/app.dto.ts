import {MaxLength} from "class-validator";

export default class AppDto {
    @MaxLength(50)
    name?: string = "MyApp"
}
