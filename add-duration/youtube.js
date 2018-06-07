const getDurationInSecond = input => {
    const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/
    let hours = 0
    let minutes = 0
    let seconds = 0
    let totalseconds

    if (reptms.test(input)) {
        var matches = reptms.exec(input)
        if (matches[1]) hours = Number(matches[1])
        if (matches[2]) minutes = Number(matches[2])
        if (matches[3]) seconds = Number(matches[3])
        totalseconds = hours * 3600 + minutes * 60 + seconds
    }

    return totalseconds
}

module.exports = async id => {
    const getVideo = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyDh1E-n5StcEPXDQtoTxKPkwJeG0_c38Qw&part=contentDetails`
    )
    const rsp = await getVideo.json()
    return getDurationInSecond(rsp.items[0].contentDetails.duration)
}
