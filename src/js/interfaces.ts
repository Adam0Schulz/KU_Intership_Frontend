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
