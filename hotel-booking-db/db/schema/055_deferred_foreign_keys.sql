-- Add foreign keys that depend on tables created later in the ordered schema files.
-- Keep this file idempotent so apply-schema.sh can be re-run safely.

ALTER TABLE hotels
  ADD COLUMN IF NOT EXISTS destination_id uuid,
  ADD COLUMN IF NOT EXISTS category_id uuid;

ALTER TABLE payments
  ADD COLUMN IF NOT EXISTS payment_method_id uuid,
  ADD COLUMN IF NOT EXISTS payment_gateway_id uuid;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'hotels_destination_id_fkey'
  ) THEN
    ALTER TABLE hotels
      ADD CONSTRAINT hotels_destination_id_fkey
      FOREIGN KEY (destination_id) REFERENCES destinations (id);
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'hotels_category_id_fkey'
  ) THEN
    ALTER TABLE hotels
      ADD CONSTRAINT hotels_category_id_fkey
      FOREIGN KEY (category_id) REFERENCES categories (id);
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'payments_payment_method_id_fkey'
  ) THEN
    ALTER TABLE payments
      ADD CONSTRAINT payments_payment_method_id_fkey
      FOREIGN KEY (payment_method_id) REFERENCES payment_methods (id);
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'payments_payment_gateway_id_fkey'
  ) THEN
    ALTER TABLE payments
      ADD CONSTRAINT payments_payment_gateway_id_fkey
      FOREIGN KEY (payment_gateway_id) REFERENCES payment_gateways (id);
  END IF;
END
$$;
