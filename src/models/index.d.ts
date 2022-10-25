import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type GetTopicsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class GetTopics {
  readonly id: string;
  readonly jumpingTopic?: boolean | null;
  readonly downhillTopic?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<GetTopics, GetTopicsMetaData>);
  static copyOf(source: GetTopics, mutator: (draft: MutableModel<GetTopics, GetTopicsMetaData>) => MutableModel<GetTopics, GetTopicsMetaData> | void): GetTopics;
}