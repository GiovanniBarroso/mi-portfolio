export type Stat = { label: string; value: string }

export interface AboutData {
  profileImage: string
  tags: string[]
  stats: Stat[]
  achievements: string[]
  tools: string[]
}

export type SkillCategory = {
  name: string
  items: string[]
}

export interface ContactData {
  email: string
  subject: string
  responseTime: string
}
