import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatbotPressController } from './chatbot-press/chatbot-press.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, ChatbotPressController],
  providers: [AppService, CatsService],
})
export class AppModule {}
