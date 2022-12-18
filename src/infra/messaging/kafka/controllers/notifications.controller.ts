import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface ReceiveNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class ReceiveNotificationController {
  constructor(private sendNotification: SendNotification) {}
  @EventPattern('notifications.receive')
  async handleReceiveNotification(
    @Payload() { content, category, recipientId }: ReceiveNotificationPayload,
  ) {
    await this.sendNotification.execute({ content, category, recipientId });
  }
}
