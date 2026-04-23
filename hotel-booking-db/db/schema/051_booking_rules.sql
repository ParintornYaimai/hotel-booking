CREATE TABLE IF NOT EXISTS booking_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  allow_pay_later boolean DEFAULT false,
  auto_cancel_pending_minutes integer DEFAULT 30,
  refund_policy_note text,
  created_at timestamp,
  updated_at timestamp
);

