import { CreateNotification } from '@application/useCases/create-notification/create-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { ReceiveNotificationController } from './controllers/notifications.controller';
import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, CreateNotification],
  controllers: [ReceiveNotificationController],
})
export class MessagingModule {}
