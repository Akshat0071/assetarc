import { supabase, Review } from '../supabase'

// Add a new review to the database
export const addReview = async (reviewData: Omit<Review, 'id' | 'created_at'>) => {
  try {
    if (!supabase) {
      return { data: null, error: new Error('Supabase not initialized') }
    }

    const { data, error } = await supabase
      .from('reviews')
      .insert([reviewData])
      .select()
      .single()

    if (error) {
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error adding review:', error)
    return { data: null, error }
  }
}

// Fetch random reviews from the database
export const getRandomReviews = async (limit: number = 5) => {
  try {
    if (!supabase) {
      return { data: [], error: new Error('Supabase not initialized') }
    }

    // Fetch all reviews then pick a random subset client-side so every load
    // can return a different selection instead of always the most-recent ones.
    const { data, error } = await supabase.from('reviews').select('*')

    if (error) {
      throw error
    }

    const arr = data ? [...data] : []
    // Shuffle in-place using Fisher-Yates
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    const picked = arr.slice(0, limit)
    return { data: picked, error: null }
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return { data: [], error }
  }
}

// Get all reviews (for admin purposes)
export const getAllReviews = async () => {
  try {
    if (!supabase) {
      return { data: [], error: new Error('Supabase not initialized') }
    }

    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error fetching all reviews:', error)
    return { data: [], error }
  }
}

// Delete a review (for admin purposes)
export const deleteReview = async (id: number) => {
  try {
    if (!supabase) {
      return { error: new Error('Supabase not initialized') }
    }

    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id)

    if (error) {
      throw error
    }

    return { error: null }
  } catch (error) {
    console.error('Error deleting review:', error)
    return { error }
  }
}

// Update a review (for admin purposes)
export const updateReview = async (id: number, updates: Partial<Review>) => {
  try {
    if (!supabase) {
      return { error: new Error('Supabase not initialized') }
    }

    const { error } = await supabase
      .from('reviews')
      .update(updates)
      .eq('id', id)

    if (error) {
      throw error
    }

    return { error: null }
  } catch (error) {
    console.error('Error updating review:', error)
    return { error }
  }
}

