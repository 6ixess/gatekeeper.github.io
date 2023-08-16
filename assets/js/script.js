function openURL(type) {
    let url = 'about:blank'

    switch (type) {
        case 'spotify':
            window.open("https://open.spotify.com/user/lvia5ekfy3co0n5rrbw218i9u")
            break
        case 'lastfm':
            window.open("https://last.fm/user/kenzovmp")
            break
    }
}