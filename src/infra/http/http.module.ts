import { CancelNotification } from '@application/useCases/cancel-notification/cancel-notification';
import { CountRecipientNotification } from '@application/useCases/count-recipient-notification/count-recipient-notification';
import { GetRecipientNotification } from '@application/useCases/get-recipient-notification/get-recipient-notification';
import { ReadNotification } from '@application/useCases/read-notification/read-notification';
import { UnReadNotification } from '@application/useCases/unread-notification/unread-notification';
import { Module } from '@nestjs/common';
import { CreateNotification } from 'src/application/useCases/create-notification/create-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    CreateNotification,
    CancelNotification,
    ReadNotification,
    UnReadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
