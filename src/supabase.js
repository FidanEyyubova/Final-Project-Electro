import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hokbeofsgmalcjswozgt.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhva2Jlb2ZzZ21hbGNqc3dvemd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM5NTIsImV4cCI6MjA1Mzk3OTk1Mn0.G9mb4Ydti4GMGWId2wsVr3DBnL8dx9vyDIGATDhgST8"; // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;