function openURL(type) {
    let url = 'about:blank'

    switch (type) {
        case 'discord':
            navigator.clipboard.writeText("discord");
            break
        case 'instagram':
            window.open("https://www.instagram.com/wwwwwwwwwwwwwwwwwwwkkwwwwwwwww/")
            break
        case 'spotify':
            window.open("https://open.spotify.com/user/lvia5ekfy3co0n5rrbw218i9u")
            break
        case 'lastfm':
            window.open("https://last.fm/user/kenzovmp")
            break
    }
}

function popup() {
    console.log("Popup")
    var popup = document.getElementById('popup1')
    popup.classList.toggle('anim')
}