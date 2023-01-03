import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_MODEL")
    private userModel: Model<User>
  ) { }

  register(email) { }
}