CREATE TABLE waitlist_emails (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Allow anonymous inserts (public waitlist signup)
ALTER TABLE waitlist_emails ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_public_insert" ON waitlist_emails
  FOR INSERT WITH CHECK (true);
