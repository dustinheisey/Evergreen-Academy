import type { Icon, Theme } from '@/types'

export interface Category {
  slug: string
  name: string
  awards?: boolean
}

export interface Student {
  slug: string
  name: string
  year: string
  team: string
  category: string
  intro: string
  description: string
}

export interface Award {
  name: string
  years: string[]
  theme: Theme
  icon: Icon
}
