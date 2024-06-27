import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NetworkTrafficServiceBase } from "./base/networkTraffic.service.base";

@Injectable()
export class NetworkTrafficService extends NetworkTrafficServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
