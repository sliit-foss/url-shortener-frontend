import { createClient } from "@supabase/supabase-js";

const superbaseUrl = process.env.REACT_APP_SUPERBASE_URL;
const superbaseAnonKey = process.env.REACT_APP_ANON_KEY;

export const superbase = createClient(superbaseUrl, superbaseAnonKey);