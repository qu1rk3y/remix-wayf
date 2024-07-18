import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_URL = "https://uhfezobwivggqvwofaph.supabase.co";

if (!SUPABASE_KEY) {
  throw new Error("Missing SUPABASE_KEY");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
