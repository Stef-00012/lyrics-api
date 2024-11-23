import { SyncLyrics, type TokenData } from "@stef-0012/synclyrics";
import express, { type Express } from "express";

const app: Express = express();

let mxmToken: TokenData;

const cache = new Map();

const LyricsManager = new SyncLyrics({
	saveMusixmatchToken: (tokenData) => {
		mxmToken = tokenData;
	},
	getMusixmatchToken: () => {
		return mxmToken;
	},
	sources: ["musixmatch", "lrclib", "netease"],
	cache,
});

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/static/homepage.html`);
});

app.use("/lyrics", (req, res, next) => {
	const start = Date.now();

	res.on("finish", () => {
		const responseTime = Date.now() - start;
		const contentLength = res.get("Content-Length");
		const url = req.originalUrl;
		const statusCode = res.statusCode;

		console.info(
			`\x1b[34m${url} \x1b[32m${statusCode} \x1b[0m| \x1b[33m${contentLength ? `${contentLength} bytes ` : ""}in ${responseTime} ms`,
		);
	});

	next();
});

app.get("/lyrics", async (req, res) => {
	const artist = String(req.query.artist || req.query.author);
	const album = String(req.query.album);
	const song = String(req.query.track || req.query.song);
	const duration =
		Number.parseFloat(String(req.query.duration || req.query.length)) ||
		undefined;

	const lyrics = await LyricsManager.getLyrics({
		album,
		artist,
		track: song,
		length: duration,
	});

	const returnJson = {
		trackId: lyrics.trackId,
		lyrics: {
			plain: {
				source: lyrics.lyrics.plain.source,
				lyrics: lyrics.lyrics.plain.lyrics,
			},
			lineSynced: {
				source: lyrics.lyrics.lineSynced.source,
				lyrics: lyrics.lyrics.lineSynced.parse(),
			},
			wordSynced: {
				source: lyrics.lyrics.wordSynced.source,
				lyrics: lyrics.lyrics.wordSynced.lyrics,
			},
		},
	};

	res.json(returnJson);
});

app.get("/exampleResponse", (req, res) => {
	res.sendFile(`${__dirname}/static/exampleResponse.json`);
});

app.get("/exampleRequest", (req, res) => {
	res.sendFile(`${__dirname}/static/exampleRequest.js`);
});

app.all("*", (req, res) => {
	res.sendStatus(404);
});

app.listen(3000, () => {
	console.info("\x1b[35mThe lyrics API is online");
});
