import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { error } = await supabase.from("contact_submissions").insert([
    {
      name: data.name,
      email: data.email,
      message: data.message,
      created_at: new Date().toISOString(),
    },
  ]);
  if (error) throw error;
}