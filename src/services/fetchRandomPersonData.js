const URL = 'https://randomuser.me/api/'

export const fetchRandomPersonData = async (filter) => {

    try {

        const response = await fetch(URL)
        const data = await response.json()

        if (data.cod === "404" || data == null) {
            return null
        }

        return data

    } catch (error) {
        console.error(error);
    }

}