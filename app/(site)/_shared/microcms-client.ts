import { createClient } from "microcms-js-sdk";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

export const microCMSClient =
  serviceDomain && apiKey ? createClient({ serviceDomain, apiKey }) : null;

export const isMicroCMSConfigured = (): boolean => {
  return microCMSClient !== null;
};
