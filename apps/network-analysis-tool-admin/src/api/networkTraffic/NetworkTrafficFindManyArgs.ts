import { NetworkTrafficWhereInput } from "./NetworkTrafficWhereInput";
import { NetworkTrafficOrderByInput } from "./NetworkTrafficOrderByInput";

export type NetworkTrafficFindManyArgs = {
  where?: NetworkTrafficWhereInput;
  orderBy?: Array<NetworkTrafficOrderByInput>;
  skip?: number;
  take?: number;
};
