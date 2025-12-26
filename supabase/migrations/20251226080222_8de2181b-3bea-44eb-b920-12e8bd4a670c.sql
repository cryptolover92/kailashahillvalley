-- Drop the existing restrictive policies and create proper permissive ones
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;

-- Create permissive INSERT policy for anyone
CREATE POLICY "Anyone can insert leads"
ON public.leads
FOR INSERT
TO public
WITH CHECK (true);

-- Create permissive SELECT policy for anyone to view (needed for admin dashboard)
CREATE POLICY "Anyone can view leads"
ON public.leads
FOR SELECT
TO public
USING (true);