import { createClient } from "@supabase/supabase-js";

// import type { Database } from "@/lib/db_types";
import type { Database } from "@/lib/aaaa_types";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey: string = process.env
  .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export default createClient<Database>(supabaseUrl, supabaseAnonKey);