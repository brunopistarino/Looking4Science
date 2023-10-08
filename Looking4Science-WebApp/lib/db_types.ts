export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          categoryId: number | null
          id: number
          imageUrl: string | null
          name: string | null
        }
        Insert: {
          categoryId?: number | null
          id?: number
          imageUrl?: string | null
          name?: string | null
        }
        Update: {
          categoryId?: number | null
          id?: number
          imageUrl?: string | null
          name?: string | null
        }
        Relationships: []
      }
      post: {
        Row: {
          categoryId: number | null
          comments: number | null
          date: string | null
          description: string | null
          id: number
          imageUrl: string | null
          likes: number | null
          link: string | null
          location: string | null
          name: string | null
          organization: string | null
          shares: number | null
          views: number | null
        }
        Insert: {
          categoryId?: number | null
          comments?: number | null
          date?: string | null
          description?: string | null
          id?: number
          imageUrl?: string | null
          likes?: number | null
          link?: string | null
          location?: string | null
          name?: string | null
          organization?: string | null
          shares?: number | null
          views?: number | null
        }
        Update: {
          categoryId?: number | null
          comments?: number | null
          date?: string | null
          description?: string | null
          id?: number
          imageUrl?: string | null
          likes?: number | null
          link?: string | null
          location?: string | null
          name?: string | null
          organization?: string | null
          shares?: number | null
          views?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
