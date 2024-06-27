import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NetworkTrafficService } from "./networkTraffic.service";
import { NetworkTrafficControllerBase } from "./base/networkTraffic.controller.base";

@swagger.ApiTags("networkTraffics")
@common.Controller("networkTraffics")
export class NetworkTrafficController extends NetworkTrafficControllerBase {
  constructor(protected readonly service: NetworkTrafficService) {
    super(service);
  }
}
