-- Create leads table to track user interactions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  source TEXT NOT NULL, -- which CTA was clicked
  page_url TEXT,
  user_agent TEXT,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create page_interactions table to track all user interactions
CREATE TABLE public.page_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL, -- 'click', 'view', 'scroll', 'form_submit', etc.
  element_id TEXT, -- button id, section name, etc.
  element_text TEXT, -- button text, link text, etc.
  page_url TEXT NOT NULL,
  user_agent TEXT,
  ip_address TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_interactions ENABLE ROW LEVEL SECURITY;

-- Create policies (public access for now since this is a marketing site)
CREATE POLICY "Allow public read access to leads" 
ON public.leads 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert to leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public read access to interactions" 
ON public.page_interactions 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert to interactions" 
ON public.page_interactions 
FOR INSERT 
WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_source ON public.leads(source);
CREATE INDEX idx_interactions_created_at ON public.page_interactions(created_at DESC);
CREATE INDEX idx_interactions_event_type ON public.page_interactions(event_type);
CREATE INDEX idx_interactions_element_id ON public.page_interactions(element_id);