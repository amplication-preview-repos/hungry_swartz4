import { NetworkTraffic as TNetworkTraffic } from "../api/networkTraffic/NetworkTraffic";

export const NETWORKTRAFFIC_TITLE_FIELD = "id";

export const NetworkTrafficTitle = (record: TNetworkTraffic): string => {
  return record.id?.toString() || String(record.id);
};
