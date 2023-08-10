export interface Page {
    pageTitle: string;
    isActive: boolean
}

export interface PageConfig {
    title: string;
    pages: Page[];
}