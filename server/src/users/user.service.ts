import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { usertype } from "../../Types/usertype";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }
  createUser(data: usertype) {
    return this.prisma.user.create({
      data,
    });
  }
  findAll() {
    return this.prisma.user.findMany();
  }
  findIndividual(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id:id,
      },
    });
  }
}