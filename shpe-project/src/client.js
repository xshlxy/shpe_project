
import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(URL, API_KEY);

export const fetchFlashcards = async () => {
    const { data, error } = await supabase.from('flashcards').select('*');
    console.log('Flashcards:', data);
    if (error) {
      console.error('Error fetching flashcards:', error);
      return [];
    }
    return data;
  };