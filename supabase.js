

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

let supabaseURL_Auth = 'https://sjmyuqjjtiwbfdryxqll.supabase.co'
let supabaseKEY_auth = 'sb_publishable_LUjMjbyHWZw-MIMYSfne0w_YTG0TuWt'
const supabase = createClient(supabaseURL_Auth,supabaseKEY_auth);

export default supabase;
