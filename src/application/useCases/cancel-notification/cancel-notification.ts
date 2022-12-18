import { NotificationsRepository } from '../../repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from '../../errors/notification-not-found';

interface IRequestCancelNotification {
  notificationId: string;
}

type IResponseCancelNotification = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: IRequestCancelNotification,
  ): Promise<IResponseCancelNotification> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
