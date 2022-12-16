import { Notification } from '../entities/notification';
import { Content } from '../entities/content';
import { NotificationsRepository } from '../repositories/notification-repository';
import { Injectable } from '@nestjs/common';

interface IRequestSendNotification {
  recipientId: string;
  content: string;
  category: string;
}

interface IResponseSendNotification {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: IRequestSendNotification,
  ): Promise<IResponseSendNotification> {
    const notification = new Notification({
      ...request,
      content: new Content(request.content),
    });

    await this.notificationsRepository.create(notification);
    return { notification };
  }
}
