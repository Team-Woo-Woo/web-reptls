import definitions from './definitions.json'

export const indexer = (text) => {
    let modifiedText = text;
    for (const name in definitions) {
        modifiedText = modifiedText.replace(new RegExp(name, 'g'), `<a href="/">${name}</a>`)
    }
}