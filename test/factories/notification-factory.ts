import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { NotificationViewModel } from '@infra/http/view-models/notification-view-model';
import { randomUUID } from 'node:crypto';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    recipientId: randomUUID(),
    ...override,
  });
}
