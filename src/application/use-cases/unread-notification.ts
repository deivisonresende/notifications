import { NotificationsRepository } from '../repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

interface IRequestUnReadNotification {
  notificationId: string;
}

type IResponseUnReadNotification = void;

@Injectable()
export class UnReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: IRequestUnReadNotification,
  ): Promise<IResponseUnReadNotification> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
