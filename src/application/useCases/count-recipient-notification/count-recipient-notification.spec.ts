import { randomUUID } from 'node:crypto';
import { CountRecipientNotification } from './count-recipient-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    const recipientId = randomUUID();

    await notificationsRepository.create(makeNotification({ recipientId }));
    await notificationsRepository.create(makeNotification({ recipientId }));
    await notificationsRepository.create(
      makeNotification({ recipientId: randomUUID() }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId,
    });

    expect(count).toBe(2);
  });
});
