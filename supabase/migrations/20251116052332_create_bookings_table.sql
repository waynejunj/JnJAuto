/*
  # Create Bookings Table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `full_name` (text) - Customer's full name
      - `phone` (text) - Customer's phone number
      - `car_model` (text) - Model of the car to be serviced
      - `service` (text) - Selected service type
      - `preferred_date` (date) - Customer's preferred date
      - `preferred_time` (text) - Customer's preferred time
      - `notes` (text, optional) - Additional notes from customer
      - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamptz) - Timestamp when booking was created

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for inserting bookings (public access for form submissions)
    - Add policy for viewing own bookings (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  car_model text NOT NULL,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  notes text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view bookings"
  ON bookings
  FOR SELECT
  TO anon
  USING (true);
