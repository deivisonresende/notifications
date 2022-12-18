import { CreateNotification } from '@application/useCases/create-notification/create-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface ReceiveNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class ReceiveNotificationController {
  constructor(private createNotification: CreateNotification) {}
  @EventPattern('notifications.receive')
  async handleReceiveNotification(
    @Payload() { content, category, recipientId }: ReceiveNotificationPayload,
  ) {
    await this.createNotification.execute({ content, category, recipientId });
  }
}
