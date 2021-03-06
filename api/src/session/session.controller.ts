import { User } from '../../../interface';
import { NewSessionDTO } from './session.dto';
import { SessionService } from './session.service';
import { HasSession } from './has-session.decorator';
import { GetSession } from './get-session.decorator';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity, userWire } from '../database/entity/user';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  createSession(@Body() newSession: NewSessionDTO): Promise<string> {
    return this.sessionService.loginWithCredentials(
      newSession.username,
      newSession.password,
    );
  }

  @Get()
  @HasSession()
  getSession(@GetSession() session: UserEntity): User {
    return userWire(session);
  }
}
