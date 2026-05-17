import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { usertype } from "../../Types/usertype";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }
    @Post()
    creatUser(@Body() data: usertype) {
        return this.userService.createUser(data);
    }

    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }
    @Get(':id')
    getIndividualUsers(@Param('id') id: string) {
        return this.userService.findIndividual(id);
    }
}