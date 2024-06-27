import { Algorithm as TAlgorithm } from "../api/algorithm/Algorithm";

export const ALGORITHM_TITLE_FIELD = "id";

export const AlgorithmTitle = (record: TAlgorithm): string => {
  return record.id?.toString() || String(record.id);
};
