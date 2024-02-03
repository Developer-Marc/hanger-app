const URL = 'https://www.boredapi.com/api/'
const URL_EXTENDERS = 'activity?participants=2&participants=3'

export const fetchRandomActivityData = async (filter) => {

    try {
        const response = await fetch(URL + URL_EXTENDERS)
        const data = await response.json()

        if (data.cod === "404" || data == null) {
            return null
        }

        return data

    } catch (error) {
        console.error(error);
    }

}