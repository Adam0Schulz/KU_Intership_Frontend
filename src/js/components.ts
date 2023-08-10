// Here you import components 
import SearchSection from "@components/SearchSection"

export default (params: {searchSection?: {heading: string, subHeading: string}}) => {
    // And here you execute them
    SearchSection(params.searchSection?.heading, params.searchSection?.subHeading)
    
}