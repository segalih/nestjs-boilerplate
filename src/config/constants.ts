import * as dotenv from 'dotenv';

dotenv.config();

// Database-related constants
export const DB_TYPE = process.env.DB_TYPE || 'postgres';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = parseInt(process.env.DB_PORT, 10) || 5432;
export const DB_USERNAME = process.env.DB_USERNAME || 'user';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
export const DB_DATABASE = process.env.DB_DATABASE || 'mydatabase';

// JWT-related constants
export const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '8h';

// Application-related constants
export const APP_PORT = parseInt(process.env.APP_PORT, 10) || 3000;
export const APP_NAME = 'MyNestApp';
export const APP_VERSION = '1.0.0';

// API-related constants
export const API_PREFIX = 'api';
export const API_VERSION = 'v1';

// External API-related constants
export const EXTERNAL_API_URL = 'https://api.example.com';
export const EXTERNAL_API_KEY =
  process.env.EXTERNAL_API_KEY || 'default_api_key';

// Default pagination values
export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

// Role-related constants
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
};

// Other application-specific constants
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024; // 5MB
export const SUPPORTED_LANGUAGES = ['en', 'fr', 'es', 'de'];

// Feature flags (if applicable)
export const FEATURE_FLAG = {
  ENABLE_NEW_FEATURE: process.env.ENABLE_NEW_FEATURE === 'true',
};
