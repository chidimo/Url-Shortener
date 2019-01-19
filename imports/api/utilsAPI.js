export const copyText = (textToCopy) => {
    // Prompt user to copy the original url of a shortend url
    window.prompt("Copy to clipboard: Ctrl+C, Enter", textToCopy);
}

export const getDomain = (url) => {
    return url.split("//")[1].split("/")[0]
}
