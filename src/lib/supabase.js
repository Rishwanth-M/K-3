import { createClient } from "@supabase/supabase-js";

// ✅ Hardcoded values (safe for frontend)
const supabaseUrl = "https://hiwsjwphhtutfdanuznc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpd3Nqd3BoaHR1dGZkYW51em5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0OTQxNDYsImV4cCI6MjA5MDA3MDE0Nn0.8iCbj301LN6FgSRfvsqSIq_N6u0uOSiE2JojQICACH0"; // full key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);