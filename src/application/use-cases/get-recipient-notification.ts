import { NotificationsRepository } from '../repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';

interface IRequestGetRecipientNotification {
  recipientId: string;
}

interface IResponseGetRecipientNotification {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: IRequestGetRecipientNotification,
  ): Promise<IResponseGetRecipientNotification> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
