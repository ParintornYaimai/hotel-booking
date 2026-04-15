CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id integer PRIMARY KEY,
  email varchar NOT NULL UNIQUE,
  status varchar DEFAULT 'subscribed',
  subscribed_at timestamp,
  unsubscribed_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

