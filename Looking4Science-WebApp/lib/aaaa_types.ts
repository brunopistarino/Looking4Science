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
      analytic: {
        Row: {
          id: number
          name: string
          projectId: number
        }
        Insert: {
          id?: number
          name: string
          projectId: number
        }
        Update: {
          id?: number
          name?: string
          projectId?: number
        }
        Relationships: [
          {
            foreignKeyName: "analytic_projectId_fkey"
            columns: ["projectId"]
            referencedRelation: "project"
            referencedColumns: ["id"]
          }
        ]
      }
      category: {
        Row: {
          id: number
          image: string
          name: string
          urlName: string
        }
        Insert: {
          id?: number
          image: string
          name: string
          urlName: string
        }
        Update: {
          id?: number
          image?: string
          name?: string
          urlName?: string
        }
        Relationships: []
      }
      categoryd: {
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
      item: {
        Row: {
          categoryId: number
          colors: string[] | null
          description: string | null
          id: number
          images: string[]
          name: string
          sizes: string[] | null
        }
        Insert: {
          categoryId: number
          colors?: string[] | null
          description?: string | null
          id?: number
          images: string[]
          name: string
          sizes?: string[] | null
        }
        Update: {
          categoryId?: number
          colors?: string[] | null
          description?: string | null
          id?: number
          images?: string[]
          name?: string
          sizes?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "item_categoryId_fkey"
            columns: ["categoryId"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          }
        ]
      }
      postd: {
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
        Relationships: [
          {
            foreignKeyName: "postd_categoryId_fkey"
            columns: ["categoryId"]
            referencedRelation: "categoryd"
            referencedColumns: ["id"]
          }
        ]
      }
      project: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      request: {
        Row: {
          analyticId: number
          id: number
          timestamp: string | null
        }
        Insert: {
          analyticId: number
          id?: number
          timestamp?: string | null
        }
        Update: {
          analyticId?: number
          id?: number
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_analyticId_fkey"
            columns: ["analyticId"]
            referencedRelation: "analytic"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      group_items_by_category: {
        Args: Record<PropertyKey, never>
        Returns: {
          name: string
          id: number
          count: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
