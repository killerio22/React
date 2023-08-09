const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const characters = '/character'

const urls = {
    episodes: `${baseURL}${episodes}`,
    characters: {
        byIds: (iDs) => `${baseURL}${characters}/${iDs}`
    }
}

export {baseURL, urls}
