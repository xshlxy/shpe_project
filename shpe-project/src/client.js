
import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(URL, API_KEY);

export const fetchFlashcards = async () => {
    try {
      const { data, error } = await supabase.from('flashcards').select('*');
      if (error) throw error;
      console.log('Flashcards:', data);
      return data;
    } catch (err) {
      console.error('Error fetching flashcards:', err.message);
      return [];
    }
};