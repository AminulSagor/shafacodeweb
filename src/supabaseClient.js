import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ftuuaqqvxafculaorexk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0dXVhcXF2eGFmY3VsYW9yZXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDIwNjksImV4cCI6MjA3ODAxODA2OX0.wPGkzI9OqSOKnnz6WIcuCFfeBsgoSmH4ZgUzfsfk4XM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
