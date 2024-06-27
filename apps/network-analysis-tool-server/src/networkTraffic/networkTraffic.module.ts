import { Module } from "@nestjs/common";
import { NetworkTrafficModuleBase } from "./base/networkTraffic.module.base";
import { NetworkTrafficService } from "./networkTraffic.service";
import { NetworkTrafficController } from "./networkTraffic.controller";
import { NetworkTrafficResolver } from "./networkTraffic.resolver";

@Module({
  imports: [NetworkTrafficModuleBase],
  controllers: [NetworkTrafficController],
  providers: [NetworkTrafficService, NetworkTrafficResolver],
  exports: [NetworkTrafficService],
})
export class NetworkTrafficModule {}
