-- Create admin role system for secure access to sensitive data
-- First, create an enum for user roles
CREATE TYPE public.user_role AS ENUM ('admin', 'user');

-- Create user_roles table to manage access permissions
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin role (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_roles 
        WHERE user_id = auth.uid() AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Allow authenticated users to read leads" ON public.leads;
DROP POLICY IF EXISTS "Allow authenticated users to read interactions" ON public.page_interactions;

-- Create admin-only read policies for sensitive data
CREATE POLICY "Only admins can read leads" 
ON public.leads 
FOR SELECT 
TO authenticated 
USING (public.is_admin());

CREATE POLICY "Only admins can read interactions" 
ON public.page_interactions 
FOR SELECT 
TO authenticated 
USING (public.is_admin());

-- Allow users to manage their own roles (admins can be set manually)
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated 
USING (user_id = auth.uid());

-- Insert first admin user (you'll need to replace with actual user ID after signup)
-- This is commented out - uncomment and add actual user ID after creating admin account
-- INSERT INTO public.user_roles (user_id, role) VALUES ('YOUR_USER_ID_HERE', 'admin');