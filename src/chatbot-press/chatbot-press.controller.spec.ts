import { Test, TestingModule } from '@nestjs/testing';
import { ChatbotPressController } from './chatbot-press.controller';

describe('ChatbotPressController', () => {
  let controller: ChatbotPressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatbotPressController],
    }).compile();

    controller = module.get<ChatbotPressController>(ChatbotPressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
