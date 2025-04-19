import {createClient} from '@supabase/supabase-js'

const URL = 'https://qukdamlfkovbelpwbcdb.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1a2RhbWxma292YmVscHdiY2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMTE5NDUsImV4cCI6MjA2MDU4Nzk0NX0.l_hgER-WblNeVGByDkLljcnpSiaP3A8iodft207zm7o'
export const supabase = createClient(URL, API_KEY)