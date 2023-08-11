// Here you import components 
import SearchSection from "@components/SearchSection"
import Branding from "@components/Branding"

export default (params: {searchSection?: {heading: string, subHeading: string}, brandingHeading?: string}) => {
    // And here you execute them
    SearchSection(params.searchSection?.heading, params.searchSection?.subHeading)
    Branding(params.brandingHeading)
}