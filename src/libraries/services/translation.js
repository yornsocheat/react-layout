let translations = []

const getTranslations = (data) => {
    translations = data

    return (key) => {
        if (translations[key] !== undefined) {
            return translations[key];
        }

        return ''
    }
}

export default getTranslations