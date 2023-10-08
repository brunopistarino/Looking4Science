// import { createClient } from '@supabase/supabase-js'

// export default createClient(
//   "https://gupmcacuvalheojhvudy.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1cG1jYWN1dmFsaGVvamh2dWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2ODMzNDksImV4cCI6MjAxMjI1OTM0OX0.2zNSyHceICjJ-GkWni5AET5DMqw2e0ARzyUN4g6H_t0"
// )

import { createClient } from "@supabase/supabase-js";

// import type { Database } from "@/lib/db_types";
import type { Database } from "@/lib/aaaa_types";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey: string = process.env
  .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export default createClient<Database>(supabaseUrl, supabaseAnonKey);