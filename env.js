
import * as e from './env.json'
export const API_KEY = process.env.API_KEY ?? e.API_KEY
export const AUTH_DOMAIN = process.env.AUTH_DOMAIN ?? e.AUTH_DOMAIN
export const PROJECT_ID = process.env.PROJECT_ID ?? e.PROJECT_ID
export const DATABASE_URL = process.env.DATABASE_URL ?? e.DATABASE_URL
export const STORAGE_BUCKET = process.env.STORAGE_BUCKET ?? e.STORAGE_BUCKET
export const MESSAGE_SENDER_ID = process.env.MESSAGE_SENDER_ID ?? e.MESSAGE_SENDER_ID
export const APP_ID = process.env.APP_ID ?? e.APP_ID
export const MEASUREMENT_ID = process.env.MEASUREMENT_ID ?? e.MEASUREMENT_ID
