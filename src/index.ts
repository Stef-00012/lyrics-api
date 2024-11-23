import { SyncLyrics, type TokenData } from "@stef-0012/synclyrics";
import express, { type Express } from 'express';

const app: Express = express()

let mxmToken: TokenData;

const cache = new Map()

const LyricsManager = new SyncLyrics({
    saveMusixmatchToken: (tokenData) => {
        mxmToken = tokenData
    },
    getMusixmatchToken: () => {
        return mxmToken
    },
    sources: [
        "musixmatch",
        "lrclib",
        "netease"
    ],
    cache
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/static/homepage.html`)
})

app.get('/lyrics', async (req, res) => {
    const artist = String(req.query.artist)
    const album = String(req.query.album)
    const song = String(req.query.track || req.query.song)
    const duration = Number.parseFloat(String(req.query.duration || req.query.length)) || undefined

    const lyrics = await LyricsManager.getLyrics({
        album,
        artist,
        track: song,
        length: duration
    })

    const returnJson = {
        trackId: lyrics.trackId,
        lyrics: {
            plain: {
                source: lyrics.lyrics.plain.source,
                lyrics: lyrics.lyrics.plain.lyrics
            },
            lineSynced: {
                source: lyrics.lyrics.lineSynced.source,
                lyrics: lyrics.lyrics.lineSynced.parse()
            },
            wordSynced: {
                source: lyrics.lyrics.wordSynced.source,
                lyrics: lyrics.lyrics.wordSynced.lyrics
            }
        }
    }

    res.json(returnJson)
})

app.all('*', (req, res) => {
    res.sendStatus(404)
})

app.listen(3000, () => {
    console.log("ON")
})