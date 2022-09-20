import { ConfigService } from "@nestjs/config";
import { v4 as uuid } from "uuid";

export const getHeaders = (config: ConfigService) => {
    return {
      apikey: config.get('apykey'),
      Accept: 'application/vnd.mambu.v2+json',
      'Content-Type': 'application/json',
      'Idempotency-Key': uuid(),
    };
  };