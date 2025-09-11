-- Fix security vulnerability by removing public read access to sensitive data
-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Allow public read access to leads" ON public.leads;
DROP POLICY IF EXISTS "Allow public read access to interactions" ON public.page_interactions;

-- Create secure policies that only allow authenticated users to read data
-- This requires users to be logged in to access the admin dashboard
CREATE POLICY "Allow authenticated users to read leads" 
ON public.leads 
FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated users to read interactions" 
ON public.page_interactions 
FOR SELECT 
TO authenticated 
USING (true);

-- Keep public insert policies for lead capture and interaction tracking
-- These are needed for the public-facing contact forms and tracking