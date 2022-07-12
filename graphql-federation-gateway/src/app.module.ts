import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'employees', url: 'http://localhost:3000/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
