import { UserPipe } from './user.pipe';
import { NewUserDTO } from './user.dto';
import { UserService } from './user.service';
import { User } from 'fashionkilla-interfaces';
import { UserEntity, userWire } from '../database/entity';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  defaultUserCredits,
  defaultUserLook,
  defaultUserPixels,
} from '../config';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() newUser: NewUserDTO): Promise<User> {
    const user: UserEntity = await this.userService.create({
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
      look: defaultUserLook,
      credits: defaultUserCredits,
      pixels: defaultUserPixels,
      online: 0,
    });
    return userWire(user);
  }

  @Get(':userID')
  getUserByID(@Param('userID', UserPipe) user: UserEntity): User {
    return userWire(user);
  }
}
