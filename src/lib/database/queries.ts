import { supabase, type NewQueryInput, type QueryRecord } from "../supabase"

export const addQuery = async (payload: NewQueryInput) => {
  try {
    if (!supabase) {
      return { data: null, error: new Error('Supabase not initialized') }
    }

    const { error } = await supabase.from("queries").insert([payload])

    if (error) {
      console.error("Error adding query:", error)
      return { data: null, error }
    }

    return { data: null, error: null }
  } catch (error) {
    console.error("Error adding query:", error)
    return { data: null, error }
  }
}

// Get all queries (for admin purposes)
export const getAllQueries = async () => {
  try {
    if (!supabase) {
      return { data: [], error: new Error('Supabase not initialized') }
    }

    const { data, error } = await supabase
      .from('queries')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return { data: (data as QueryRecord[]) || [], error: null }
  } catch (error) {
    console.error('Error fetching all queries:', error)
    return { data: [], error }
  }
}

// Delete a query (for admin purposes)
export const deleteQuery = async (id: number) => {
  try {
    if (!supabase) {
      return { error: new Error('Supabase not initialized') }
    }

    const { error } = await supabase
      .from('queries')
      .delete()
      .eq('id', id)

    if (error) {
      throw error
    }

    return { error: null }
  } catch (error) {
    console.error('Error deleting query:', error)
    return { error }
  }
}
