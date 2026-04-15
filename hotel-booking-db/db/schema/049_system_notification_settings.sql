CREATE TABLE IF NOT EXISTS system_notification_settings (
  id integer PRIMARY KEY,
  email_enabled boolean DEFAULT true,
  push_enabled boolean DEFAULT false,
  sms_enabled boolean DEFAULT false,
  created_at timestamp,
  updated_at timestamp
);

