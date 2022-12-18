import { NotificationsRepository } from '../../repositories/notification-repository';
import { Injectable } from '@nestjs/common';

interface IRequestCountRecipientNotification {
  recipientId: string;
}

interface IResponseCountRecipientNotification {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: IRequestCountRecipientNotification,
  ): Promise<IResponseCountRecipientNotification> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
