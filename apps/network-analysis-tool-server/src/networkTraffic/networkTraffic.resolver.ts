import * as graphql from "@nestjs/graphql";
import { NetworkTrafficResolverBase } from "./base/networkTraffic.resolver.base";
import { NetworkTraffic } from "./base/NetworkTraffic";
import { NetworkTrafficService } from "./networkTraffic.service";

@graphql.Resolver(() => NetworkTraffic)
export class NetworkTrafficResolver extends NetworkTrafficResolverBase {
  constructor(protected readonly service: NetworkTrafficService) {
    super(service);
  }
}
