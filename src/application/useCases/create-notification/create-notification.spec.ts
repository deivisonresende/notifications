import { randomUUID } from 'node:crypto';
import { CreateNotification } from './create-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  it('should be able to create a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const createNotification = new CreateNotification(notificationsRepository);

    const { notification } = await createNotification.execute({
      content: 'This a notification',
      category: 'social',
      recipientId: randomUUID(),
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
