export type Icons =
  | 'accessibility'
  | 'back'
  | 'qr-code'
  | 'close'
  | 'down'
  | 'search'
  | 'menu'
  | 'world'
  | 'camera'
  | 'art'
  | 'environment'
  | 'speaking'
  | 'trophy'
  | 'writing'

export type Category = {
  img: string
  name: string
}

export type Students = Array<Student>

export type Student = {
  img: string
  name: string
  year: string
  activity: 'sports' | 'art' | 'leaders' | 'environmental' | 'scholarship'
  team: string
  intro: string
  description: string
}

export type Award = {
  icon: Icons
  headline: string
  years: string[]
}
