export type ClientType = 1 | 2;

export enum CLIENT_TYPE {
  CORPORATE = 1,
  AGENT = 2,
}

export const CLIENT_DISPLAY_TYPE_CORPORATE = "Corporate";
export const CLIENT_DISPLAY_TYPE_AGENT = "Agent";

export const CLIENT_TYPE_REVERSE: Record<ClientType, string> = {
  [CLIENT_TYPE.CORPORATE]: CLIENT_DISPLAY_TYPE_CORPORATE,
  [CLIENT_TYPE.AGENT]: CLIENT_DISPLAY_TYPE_AGENT,
}; 