import { Notification } from '../../entities/notification';
import { Content } from '../../entities/content';
import { NotificationsRepository } from '../../repositories/notification-repository';
import { Injectable } from '@nestjs/common';

interface IRequestCreateNotification {
  recipientId: string;
  content: string;
  category: string;
}

interface IResponseCreateNotification {
  notification: Notification;
}

@Injectable()
export class CreateNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: IRequestCreateNotification,
  ): Promise<IResponseCreateNotification> {
    const notification = new Notification({
      ...request,
      content: new Content(request.content),
    });

    await this.notificationsRepository.create(notification);
    return { notification };
  }
}
