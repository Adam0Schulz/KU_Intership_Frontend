export interface Address {
    country: string;
    city: string;
    district: string;
    postalCode: number;
    addressDetail: string;
}

export interface Contact {
    institution: string;
    institutionWeb: string;
    department: string;
    departmentWeb: string;
    team: string;
    email: string;
    phone: number;
    address: Address;
}

export interface PageConfig {
    title: string;
    pages: {
        pageTitle: string;
        isActive: boolean;
    }[];
}

export interface Params {
    searchSection?: SearchSection,
    branding: { heading: string },
    crumbsArray: { label: string, link: string, isActive: boolean }[],
    pageConfig: PageConfig,
    contact: Contact
}

export interface SearchSection {
    heading: string,
    subHeading: string
}

// Database models (interfaces)
//  Apples
export interface Apple {
    name: string,
    synonyms: string[],
    origin: string,
    year: number,
    season: Season,
    usage: string,
    ref: Link[],
    images: Link[],
    description: Paragraph[]
}

export interface Paragraph {
    heading: string,
    body: string
}
export interface Link {
    label: string,
    url: string
}

export enum Season {
    EARLY,
    MID,
    LATE
}

//  Bornholm Dictionary
export interface WordEntry {
    word: string,
    definition: string,
    wordClass: WordClass,
}

export interface Book {
    title: string,
    authors: string[],
    shelfMark?: string
}

export interface Dictionary extends Book {
    words: WordEntry[]

}

export enum WordClass {
    NOUN,
    PRONOUN,
    VERB,
    ADVERB,
    ADJECTIVE,

}

export interface Chapter {
    title: string,
    body: Paragraph[]
}

export interface Material extends Book {
    content: Chapter[]
}

//  Sagas
export interface Saga extends Book {
    language: string,
    translators: string[],
    storageInstitution: Institution,
    origin: string,
    year: number,
    isDigitalized: boolean,
    images: Link[]


}

export interface Institution {
    name: string,
    country: string,
}

export interface Metadata {
    database: string,
    pages: PageData[],
    contact: Contact,
    mainEntity: string
}

export interface PageData {
    type: Page,
    content: Chapter[]
}

export enum Page {
    HOME,
    ABOUT,
    BROWSE
}

export interface PometumSite {
    apples: Apple[]
}

export interface BornholmSite {
    words: WordEntry[],
    dictionaries: Dictionary[],
    materials: Material[]

}

export interface HandritSite {
    institutions: Institution[],
    sagas: Saga[]
}