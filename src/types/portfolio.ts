export type HighlightTag = 'backend' | 'frontend' | 'fullstack' | 'infra' | 'demo' | 'tfg';
export type Stat = { box: string; value: string };

export interface HighlightItem {
    slug: string;
    title: string;
    description: string;
    tags?: HighlightTag[];
    href?: string | null;
    featured?: boolean;
}

export interface AboutData {
    profileImage: string;
    tags: string[];
    stats: Stat[];
    achievements: string[];
    tools: string[];
}

export type SkillCategory = {
    name: string;
    items: string[];
};

export type SocialLink = {
    label: string;
    url: string;
    icon?: string;
    aria?: string;
};

export interface ContactData {
    email: string;
    subject: string;
    responseTime?: string;
    links: SocialLink[];
}

export interface Project {
    slug: string
    title: string
    description: string
    image?: string
    tags?: string[]
    demo?: string
    repo?: string
}
