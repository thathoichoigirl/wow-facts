import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rtxomjydcfqbcvncbowp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0eG9tanlkY2ZxYmN2bmNib3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MzczOTAsImV4cCI6MTk5MDMxMzM5MH0.FbhCxt1TSP8QZklDqeo2ZDIBm43t5w43FSTa2M8khTQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
