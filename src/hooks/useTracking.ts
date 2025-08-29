import { useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";

export const useTracking = () => {
  const trackInteraction = useCallback(async (
    eventType: string,
    elementId?: string,
    elementText?: string
  ) => {
    try {
      await supabase.from('page_interactions').insert({
        event_type: eventType,
        element_id: elementId,
        element_text: elementText,
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        session_id: sessionStorage.getItem('session_id') || crypto.randomUUID()
      });
    } catch (error) {
      console.error('Error tracking interaction:', error);
    }
  }, []);

  const trackLead = useCallback(async (
    name: string,
    email: string,
    phone: string,
    message: string,
    source: string
  ) => {
    try {
      await supabase.from('leads').insert({
        name,
        email,
        phone,
        message,
        source,
        page_url: window.location.href,
        user_agent: navigator.userAgent
      });
    } catch (error) {
      console.error('Error tracking lead:', error);
    }
  }, []);

  return { trackInteraction, trackLead };
};