import { randomUUID } from 'node:crypto';
import { UnReadNotification } from './unread-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from '../../errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('UnRead notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnReadNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });
    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnReadNotification(notificationsRepository);

    expect(async () => {
      return await unreadNotification.execute({
        notificationId: randomUUID(),
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
