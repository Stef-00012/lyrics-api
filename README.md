
# SyncLyrics API

This API is free and has no rate limit.<br />
The lyrics are fetched from the <a href="https://npmjs.com/@stef-0012/synclyrics"><code>@stef-0012/synclyrics</code></a> NPM, which takes the  lyrics from <a href="https://musixmatch.com">Musixmatch</a>, <a href="https://lrclib.net">LrcLib.net</a> and <a href="https://music.163.com">Netease</a>.

## Installation

1. `git clone https://github.com/Stef-00012/lyrics-api`
2. `cd lyrics-api`
3. `bun install`
4. `npm run start`

## How Does It Work?

Just make a HTTP GET request to the <code>/lyrics</code> endpoint with your song's metadata as query parameter.

## Avaible Query Parameters

- `artist` - Song's artist.
- `author` - Alias for `artist`.
- `track` - Song's name.
- `song` - Alias for `track`.
- `album` - Song's album.
- `length` - Song's length (in ms).
- `duration` - Alias for `length`.

## Example Request
```js
// default base URL is 'https://lyrics-api.stefdp.lol' unless you selfhost.
// if you selfhost it, it's 'http://localhost:3000'
fetch("<baseUrl>/lyrics?artist=Henry+Moodie&track=Drunk+Text")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });

```

## Example Response
```json
{
	"trackId": "RHJ1bmsgVGV4dC0tLS1IZW5yeSBNb29kaWUtLS0tdW5kZWZpbmVk",
	"lyrics": {
		"plain": {
			"source": "Musixmatch",
			"lyrics": "Fifth of November, when I walked you home\nThat's when I nearly said it, but then said, \"Forget it,\" and froze\nDo you remember? You probably don't\n'Cause the sparks in the sky took a hold of your eyes while we spoke\n\nYesterday, drank way too much and stayed up too late\nStarted to write what I wanna say\nDeleted the message\nBut I still remember it said\n\nI wish I was who you drunk-texted at midnight\nWish I was the reason you stay up 'til three, and you can't fall asleep\nWaiting for me to reply\nI wish I was more than just someone you walk by\nWish I wasn't scared to be honest and open, instead of just hoping\nYou'd feel what I'm feeling inside\n\nApril the seventh, and nothing has changed\nIt's hard to get by when you're still on my mind every day (every day)\nSometimes I question if you feel the same\nDo we make stupid jokes? Tryna hide that we're both too afraid to say\n\nI wish I was who you drunk-texted at midnight\nWish I was the reason you stay up 'til three, and you can't fall asleep\nWaiting for me to reply\nI wish I was more than just someone you walk by\nWish I wasn't scared to be honest and open, instead of just hoping\nYou'd feel what I'm feeling inside\n\nOh, and here we go again, destroying myself to keep a friend\nHiding away 'cause I was afraid you'd say no\nI wonder if I cross your mind half as much as you do mine\nIf I tell you the truth, what will I lose? I don't know\n\nI wish I sent you that drunk text at midnight\nI was just scared it would ruin our friendship, but I really meant it\nI wonder how you would reply"
		},
		"lineSynced": {
			"source": "Musixmatch",
			"lyrics": [
				{
					"time": 0.16,
					"text": "Fifth of November, when I walked you home"
				},
				{
					"time": 8.09,
					"text": "That's when I nearly said it, but then said, \"Forget it,\" and froze"
				},
				{
					"time": 15.52,
					"text": "Do you remember? You probably don't"
				},
				{
					"time": 23.48,
					"text": "'Cause the sparks in the sky took a hold of your eyes while we spoke"
				},
				{
					"time": 31.38,
					"text": "Yesterday, drank way too much and stayed up too late"
				},
				{
					"time": 37.26,
					"text": "Started to write what I wanna say"
				},
				{
					"time": 40.83,
					"text": "Deleted the message"
				},
				{
					"time": 42.83,
					"text": "But I still remember it said"
				},
				{
					"time": 46.24,
					"text": "I wish I was who you drunk-texted at midnight"
				},
				{
					"time": 52.17,
					"text": "Wish I was the reason you stay up 'til three, and you can't fall asleep"
				},
				{
					"time": 58.35,
					"text": "Waiting for me to reply"
				},
				{
					"time": 61.69,
					"text": "I wish I was more than just someone you walk by"
				},
				{
					"time": 67.58,
					"text": "Wish I wasn't scared to be honest and open, instead of just hoping"
				},
				{
					"time": 73.34,
					"text": "You'd feel what I'm feeling inside"
				},
				{
					"time": 77.86,
					"text": "April the seventh, and nothing has changed"
				},
				{
					"time": 86.2,
					"text": "It's hard to get by when you're still on my mind every day (every day)"
				},
				{
					"time": 92.87,
					"text": "Sometimes I question if you feel the same"
				},
				{
					"time": 100.88,
					"text": "Do we make stupid jokes? Tryna hide that we're both too afraid to say"
				},
				{
					"time": 108.71,
					"text": "I wish I was who you drunk-texted at midnight"
				},
				{
					"time": 114.77,
					"text": "Wish I was the reason you stay up 'til three, and you can't fall asleep"
				},
				{
					"time": 120.6,
					"text": "Waiting for me to reply"
				},
				{
					"time": 124.25,
					"text": "I wish I was more than just someone you walk by"
				},
				{
					"time": 129.84,
					"text": "Wish I wasn't scared to be honest and open, instead of just hoping"
				},
				{
					"time": 135.75,
					"text": "You'd feel what I'm feeling inside"
				},
				{
					"time": 139.57,
					"text": "Oh, and here we go again, destroying myself to keep a friend"
				},
				{
					"time": 147.07,
					"text": "Hiding away 'cause I was afraid you'd say no"
				},
				{
					"time": 154.44,
					"text": "I wonder if I cross your mind half as much as you do mine"
				},
				{
					"time": 161.68,
					"text": "If I tell you the truth, what will I lose? I don't know"
				},
				{
					"time": 169.67,
					"text": "I wish I sent you that drunk text at midnight"
				},
				{
					"time": 175.68,
					"text": "I was just scared it would ruin our friendship, but I really meant it"
				},
				{
					"time": 181.23,
					"text": "I wonder how you would reply"
				}
			]
		},
		"wordSynced": {
			"source": "Musixmatch",
			"lyrics": [
				{
					"end": 5.358,
					"lyric": "Fifth of November, when I walked you home",
					"start": 0.16,
					"syncedLyric": [
						{
							"character": "Fifth",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.836
						},
						{
							"character": "of",
							"time": 1.0008
						},
						{
							"character": " ",
							"time": 1.167
						},
						{
							"character": "November,",
							"time": 1.209
						},
						{
							"character": " ",
							"time": 3.448
						},
						{
							"character": "when",
							"time": 3.539
						},
						{
							"character": " ",
							"time": 3.83
						},
						{
							"character": "I",
							"time": 3.995
						},
						{
							"character": " ",
							"time": 4.112
						},
						{
							"character": "walked",
							"time": 4.21
						},
						{
							"character": " ",
							"time": 4.659
						},
						{
							"character": "you",
							"time": 4.708
						},
						{
							"character": " ",
							"time": 4.859
						},
						{
							"character": "home",
							"time": 4.974
						}
					]
				},
				{
					"end": 13.186,
					"lyric": "That's when I nearly said it, but then said, \"Forget it,\" and froze",
					"start": 8.09,
					"syncedLyric": [
						{
							"character": "That's",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.489
						},
						{
							"character": "when",
							"time": 0.522
						},
						{
							"character": " ",
							"time": 0.763
						},
						{
							"character": "I",
							"time": 0.8129
						},
						{
							"character": " ",
							"time": 0.854
						},
						{
							"character": "nearly",
							"time": 0.912
						},
						{
							"character": " ",
							"time": 1.286
						},
						{
							"character": "said",
							"time": 1.319
						},
						{
							"character": " ",
							"time": 1.459
						},
						{
							"character": "it,",
							"time": 1.534
						},
						{
							"character": " ",
							"time": 1.717
						},
						{
							"character": "but",
							"time": 1.775
						},
						{
							"character": " ",
							"time": 2.106
						},
						{
							"character": "then",
							"time": 2.488
						},
						{
							"character": " ",
							"time": 2.754
						},
						{
							"character": "said,",
							"time": 2.803
						},
						{
							"character": " ",
							"time": 3.118
						},
						{
							"character": "\"Forget",
							"time": 3.177
						},
						{
							"character": " ",
							"time": 3.525
						},
						{
							"character": "it,\"",
							"time": 4.189
						},
						{
							"character": " ",
							"time": 4.413
						},
						{
							"character": "and",
							"time": 4.5199
						},
						{
							"character": " ",
							"time": 4.604
						},
						{
							"character": "froze",
							"time": 4.85
						}
					]
				},
				{
					"end": 20.3969,
					"lyric": "Do you remember? You probably don't",
					"start": 15.52,
					"syncedLyric": [
						{
							"character": "Do",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.19
						},
						{
							"character": "you",
							"time": 0.232
						},
						{
							"character": " ",
							"time": 0.397
						},
						{
							"character": "remember?",
							"time": 0.473
						},
						{
							"character": " ",
							"time": 2.621
						},
						{
							"character": "You",
							"time": 3.358
						},
						{
							"character": " ",
							"time": 3.641
						},
						{
							"character": "probably",
							"time": 3.732
						},
						{
							"character": " ",
							"time": 4.712
						},
						{
							"character": "don't",
							"time": 4.7939
						}
					]
				},
				{
					"end": 28.379,
					"lyric": "'Cause the sparks in the sky took a hold of your eyes while we spoke",
					"start": 23.48,
					"syncedLyric": [
						{
							"character": "'Cause",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.547
						},
						{
							"character": "the",
							"time": 0.638
						},
						{
							"character": " ",
							"time": 0.788
						},
						{
							"character": "sparks",
							"time": 0.838
						},
						{
							"character": " ",
							"time": 1.244
						},
						{
							"character": "in",
							"time": 1.31
						},
						{
							"character": " ",
							"time": 1.385
						},
						{
							"character": "the",
							"time": 1.451
						},
						{
							"character": " ",
							"time": 1.542
						},
						{
							"character": "sky",
							"time": 1.567
						},
						{
							"character": " ",
							"time": 1.791
						},
						{
							"character": "took",
							"time": 1.825
						},
						{
							"character": " ",
							"time": 1.966
						},
						{
							"character": "a",
							"time": 2.04
						},
						{
							"character": " ",
							"time": 2.082
						},
						{
							"character": "hold",
							"time": 2.148
						},
						{
							"character": " ",
							"time": 2.604
						},
						{
							"character": "of",
							"time": 2.629
						},
						{
							"character": " ",
							"time": 2.72
						},
						{
							"character": "your",
							"time": 2.762
						},
						{
							"character": " ",
							"time": 3.094
						},
						{
							"character": "eyes",
							"time": 3.193
						},
						{
							"character": " ",
							"time": 3.467
						},
						{
							"character": "while",
							"time": 3.533
						},
						{
							"character": " ",
							"time": 4.081
						},
						{
							"character": "we",
							"time": 4.147
						},
						{
							"character": " ",
							"time": 4.313
						},
						{
							"character": "spoke",
							"time": 4.321
						}
					]
				},
				{
					"end": 36.033,
					"lyric": "Yesterday, drank way too much and stayed up too late",
					"start": 31.38,
					"syncedLyric": [
						{
							"character": "Yesterday,",
							"time": 0
						},
						{
							"character": " ",
							"time": 1.818
						},
						{
							"character": "drank",
							"time": 1.842
						},
						{
							"character": " ",
							"time": 2.166
						},
						{
							"character": "way",
							"time": 2.265
						},
						{
							"character": " ",
							"time": 2.597
						},
						{
							"character": "too",
							"time": 2.664
						},
						{
							"character": " ",
							"time": 2.846
						},
						{
							"character": "much",
							"time": 2.871
						},
						{
							"character": " ",
							"time": 3.021
						},
						{
							"character": "and",
							"time": 3.07
						},
						{
							"character": " ",
							"time": 3.195
						},
						{
							"character": "stayed",
							"time": 3.236
						},
						{
							"character": " ",
							"time": 3.552
						},
						{
							"character": "up",
							"time": 3.634
						},
						{
							"character": " ",
							"time": 3.849
						},
						{
							"character": "too",
							"time": 3.908
						},
						{
							"character": " ",
							"time": 4.282
						},
						{
							"character": "late",
							"time": 4.289
						}
					]
				},
				{
					"end": 39.4829,
					"lyric": "Started to write what I wanna say",
					"start": 37.26,
					"syncedLyric": [
						{
							"character": "Started",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.398
						},
						{
							"character": "to",
							"time": 0.44
						},
						{
							"character": " ",
							"time": 0.497
						},
						{
							"character": "write",
							"time": 0.531
						},
						{
							"character": " ",
							"time": 0.838
						},
						{
							"character": "what",
							"time": 0.921
						},
						{
							"character": " ",
							"time": 1.228
						},
						{
							"character": "I",
							"time": 1.335
						},
						{
							"character": " ",
							"time": 1.435
						},
						{
							"character": "wanna",
							"time": 1.609
						},
						{
							"character": " ",
							"time": 2.165
						},
						{
							"character": "say",
							"time": 2.223
						}
					]
				},
				{
					"end": 42.1,
					"lyric": "Deleted the message",
					"start": 40.83,
					"syncedLyric": [
						{
							"character": "Deleted",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.523
						},
						{
							"character": "the",
							"time": 0.589
						},
						{
							"character": " ",
							"time": 0.731
						},
						{
							"character": "message",
							"time": 0.805
						}
					]
				},
				{
					"end": 44.775,
					"lyric": "But I still remember it said",
					"start": 42.83,
					"syncedLyric": [
						{
							"character": "But",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.0869
						},
						{
							"character": "I",
							"time": 0.095
						},
						{
							"character": " ",
							"time": 0.112
						},
						{
							"character": "still",
							"time": 0.128
						},
						{
							"character": " ",
							"time": 0.3439
						},
						{
							"character": "remember",
							"time": 0.411
						},
						{
							"character": " ",
							"time": 1.033
						},
						{
							"character": "it",
							"time": 1.124
						},
						{
							"character": " ",
							"time": 1.29
						},
						{
							"character": "said",
							"time": 1.439
						}
					]
				},
				{
					"end": 50.4129,
					"lyric": "I wish I was who you drunk-texted at midnight",
					"start": 46.24,
					"syncedLyric": [
						{
							"character": "I",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.037
						},
						{
							"character": "wish",
							"time": 0.075
						},
						{
							"character": " ",
							"time": 0.306
						},
						{
							"character": "I",
							"time": 0.339
						},
						{
							"character": " ",
							"time": 1.078
						},
						{
							"character": "was",
							"time": 1.2609
						},
						{
							"character": " ",
							"time": 1.385
						},
						{
							"character": "who",
							"time": 1.426
						},
						{
							"character": " ",
							"time": 1.717
						},
						{
							"character": "you",
							"time": 1.808
						},
						{
							"character": " ",
							"time": 1.908
						},
						{
							"character": "drunk-",
							"time": 1.941
						},
						{
							"character": "texted",
							"time": 2.994
						},
						{
							"character": " ",
							"time": 3.475
						},
						{
							"character": "at",
							"time": 3.567
						},
						{
							"character": " ",
							"time": 3.741
						},
						{
							"character": "midnight",
							"time": 3.807
						}
					]
				},
				{
					"end": 57.293,
					"lyric": "Wish I was the reason you stay up 'til three, and you can't fall asleep",
					"start": 52.17,
					"syncedLyric": [
						{
							"character": "Wish",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.1419
						},
						{
							"character": "I",
							"time": 0.191
						},
						{
							"character": " ",
							"time": 0.274
						},
						{
							"character": "was",
							"time": 0.424
						},
						{
							"character": " ",
							"time": 0.747
						},
						{
							"character": "the",
							"time": 0.88
						},
						{
							"character": " ",
							"time": 1.037
						},
						{
							"character": "reason",
							"time": 1.087
						},
						{
							"character": " ",
							"time": 1.734
						},
						{
							"character": "you",
							"time": 1.859
						},
						{
							"character": " ",
							"time": 2.24
						},
						{
							"character": "stay",
							"time": 2.423
						},
						{
							"character": " ",
							"time": 2.672
						},
						{
							"character": "up",
							"time": 2.713
						},
						{
							"character": " ",
							"time": 2.787
						},
						{
							"character": "'til",
							"time": 2.846
						},
						{
							"character": " ",
							"time": 3.07
						},
						{
							"character": "three,",
							"time": 3.103
						},
						{
							"character": " ",
							"time": 3.626
						},
						{
							"character": "and",
							"time": 3.692
						},
						{
							"character": " ",
							"time": 3.916
						},
						{
							"character": "you",
							"time": 3.982
						},
						{
							"character": " ",
							"time": 4.264
						},
						{
							"character": "can't",
							"time": 4.306
						},
						{
							"character": " ",
							"time": 4.679
						},
						{
							"character": "fall",
							"time": 4.72
						},
						{
							"character": " ",
							"time": 4.978
						},
						{
							"character": "asleep",
							"time": 5.01
						}
					]
				},
				{
					"end": 60.451,
					"lyric": "Waiting for me to reply",
					"start": 58.35,
					"syncedLyric": [
						{
							"character": "Waiting",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.556
						},
						{
							"character": "for",
							"time": 0.639
						},
						{
							"character": " ",
							"time": 0.821
						},
						{
							"character": "me",
							"time": 0.913
						},
						{
							"character": " ",
							"time": 1.07
						},
						{
							"character": "to",
							"time": 1.178
						},
						{
							"character": " ",
							"time": 1.403
						},
						{
							"character": "reply",
							"time": 1.518
						}
					]
				},
				{
					"end": 66.39,
					"lyric": "I wish I was more than just someone you walk by",
					"start": 61.69,
					"syncedLyric": [
						{
							"character": "I",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.025
						},
						{
							"character": "wish",
							"time": 0.05
						},
						{
							"character": " ",
							"time": 0.216
						},
						{
							"character": "I",
							"time": 0.34
						},
						{
							"character": " ",
							"time": 1.766
						},
						{
							"character": "was",
							"time": 2.082
						},
						{
							"character": " ",
							"time": 2.2559
						},
						{
							"character": "more",
							"time": 2.33
						},
						{
							"character": " ",
							"time": 2.654
						},
						{
							"character": "than",
							"time": 2.72
						},
						{
							"character": " ",
							"time": 3.21
						},
						{
							"character": "just",
							"time": 3.251
						},
						{
							"character": " ",
							"time": 3.492
						},
						{
							"character": "someone",
							"time": 3.55
						},
						{
							"character": " ",
							"time": 3.94
						},
						{
							"character": "you",
							"time": 4.081
						},
						{
							"character": " ",
							"time": 4.363
						},
						{
							"character": "walk",
							"time": 4.462
						},
						{
							"character": " ",
							"time": 4.611
						},
						{
							"character": "by",
							"time": 4.655
						}
					]
				},
				{
					"end": 72.69,
					"lyric": "Wish I wasn't scared to be honest and open, instead of just hoping",
					"start": 67.58,
					"syncedLyric": [
						{
							"character": "Wish",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.067
						},
						{
							"character": "I",
							"time": 0.091
						},
						{
							"character": " ",
							"time": 0.108
						},
						{
							"character": "wasn't",
							"time": 0.125
						},
						{
							"character": " ",
							"time": 0.73
						},
						{
							"character": "scared",
							"time": 0.764
						},
						{
							"character": " ",
							"time": 1.75
						},
						{
							"character": "to",
							"time": 1.825
						},
						{
							"character": " ",
							"time": 1.966
						},
						{
							"character": "be",
							"time": 2.032
						},
						{
							"character": " ",
							"time": 2.123
						},
						{
							"character": "honest",
							"time": 2.29
						},
						{
							"character": " ",
							"time": 2.812
						},
						{
							"character": "and",
							"time": 2.854
						},
						{
							"character": " ",
							"time": 3.069
						},
						{
							"character": "open,",
							"time": 3.185
						},
						{
							"character": " ",
							"time": 3.6
						},
						{
							"character": "instead",
							"time": 3.816
						},
						{
							"character": " ",
							"time": 4.338
						},
						{
							"character": "of",
							"time": 4.496
						},
						{
							"character": " ",
							"time": 4.678
						},
						{
							"character": "just",
							"time": 4.803
						},
						{
							"character": " ",
							"time": 4.985
						},
						{
							"character": "hoping",
							"time": 4.993
						}
					]
				},
				{
					"end": 75.602,
					"lyric": "You'd feel what I'm feeling inside",
					"start": 73.34,
					"syncedLyric": [
						{
							"character": "You'd",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.273
						},
						{
							"character": "feel",
							"time": 0.34
						},
						{
							"character": " ",
							"time": 0.556
						},
						{
							"character": "what",
							"time": 0.63
						},
						{
							"character": " ",
							"time": 0.921
						},
						{
							"character": "I'm",
							"time": 1.07
						},
						{
							"character": " ",
							"time": 1.285
						},
						{
							"character": "feeling",
							"time": 1.352
						},
						{
							"character": " ",
							"time": 1.733
						},
						{
							"character": "inside",
							"time": 1.783
						}
					]
				},
				{
					"end": 82.915,
					"lyric": "April the seventh, and nothing has changed",
					"start": 77.86,
					"syncedLyric": [
						{
							"character": "April",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.332
						},
						{
							"character": "the",
							"time": 0.406
						},
						{
							"character": " ",
							"time": 0.755
						},
						{
							"character": "seventh,",
							"time": 0.821
						},
						{
							"character": " ",
							"time": 3.442
						},
						{
							"character": "and",
							"time": 3.459
						},
						{
							"character": " ",
							"time": 3.55
						},
						{
							"character": "nothing",
							"time": 3.617
						},
						{
							"character": " ",
							"time": 4.313
						},
						{
							"character": "has",
							"time": 4.396
						},
						{
							"character": " ",
							"time": 4.595
						},
						{
							"character": "changed",
							"time": 4.695
						}
					]
				},
				{
					"end": 90.296,
					"lyric": "It's hard to get by when you're still on my mind every day (every day)",
					"start": 86.2,
					"syncedLyric": [
						{
							"character": "It's",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.225
						},
						{
							"character": "hard",
							"time": 0.267
						},
						{
							"character": " ",
							"time": 0.591
						},
						{
							"character": "to",
							"time": 0.673
						},
						{
							"character": " ",
							"time": 0.731
						},
						{
							"character": "get",
							"time": 0.773
						},
						{
							"character": " ",
							"time": 0.922
						},
						{
							"character": "by",
							"time": 1.171
						},
						{
							"character": " ",
							"time": 1.336
						},
						{
							"character": "when",
							"time": 1.3859
						},
						{
							"character": " ",
							"time": 1.774
						},
						{
							"character": "you're",
							"time": 1.816
						},
						{
							"character": " ",
							"time": 2.1309
						},
						{
							"character": "still",
							"time": 2.188
						},
						{
							"character": " ",
							"time": 2.388
						},
						{
							"character": "on",
							"time": 2.471
						},
						{
							"character": " ",
							"time": 2.587
						},
						{
							"character": "my",
							"time": 2.6269
						},
						{
							"character": " ",
							"time": 2.751
						},
						{
							"character": "mind",
							"time": 2.785
						},
						{
							"character": " ",
							"time": 2.942
						},
						{
							"character": "every",
							"time": 2.993
						},
						{
							"character": " ",
							"time": 3.302
						},
						{
							"character": "day",
							"time": 3.341
						},
						{
							"character": " ",
							"time": 3.499
						},
						{
							"character": "(every",
							"time": 3.64
						},
						{
							"character": " ",
							"time": 4.056
						},
						{
							"character": "day)",
							"time": 4.079
						}
					]
				},
				{
					"end": 98.881,
					"lyric": "Sometimes I question if you feel the same",
					"start": 92.87,
					"syncedLyric": [
						{
							"character": "Sometimes",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.307
						},
						{
							"character": "I",
							"time": 0.39
						},
						{
							"character": " ",
							"time": 0.44
						},
						{
							"character": "question",
							"time": 0.481
						},
						{
							"character": " ",
							"time": 3.707
						},
						{
							"character": "if",
							"time": 3.84
						},
						{
							"character": " ",
							"time": 3.965
						},
						{
							"character": "you",
							"time": 4.023
						},
						{
							"character": " ",
							"time": 4.33
						},
						{
							"character": "feel",
							"time": 4.404
						},
						{
							"character": " ",
							"time": 4.8949
						},
						{
							"character": "the",
							"time": 4.993
						},
						{
							"character": " ",
							"time": 5.358
						},
						{
							"character": "same",
							"time": 5.366
						}
					]
				},
				{
					"end": 107.423,
					"lyric": "Do we make stupid jokes? Tryna hide that we're both too afraid to say",
					"start": 100.88,
					"syncedLyric": [
						{
							"character": "Do",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.067
						},
						{
							"character": "we",
							"time": 0.183
						},
						{
							"character": " ",
							"time": 0.29
						},
						{
							"character": "make",
							"time": 0.456
						},
						{
							"character": " ",
							"time": 0.771
						},
						{
							"character": "stupid",
							"time": 0.8129
						},
						{
							"character": " ",
							"time": 1.211
						},
						{
							"character": "jokes?",
							"time": 1.252
						},
						{
							"character": " ",
							"time": 1.526
						},
						{
							"character": "Tryna",
							"time": 1.584
						},
						{
							"character": " ",
							"time": 1.883
						},
						{
							"character": "hide",
							"time": 1.924
						},
						{
							"character": " ",
							"time": 2.19
						},
						{
							"character": "that",
							"time": 2.297
						},
						{
							"character": " ",
							"time": 2.588
						},
						{
							"character": "we're",
							"time": 2.629
						},
						{
							"character": " ",
							"time": 2.952
						},
						{
							"character": "both",
							"time": 3.0099
						},
						{
							"character": " ",
							"time": 5.514
						},
						{
							"character": "too",
							"time": 5.68
						},
						{
							"character": " ",
							"time": 5.763
						},
						{
							"character": "afraid",
							"time": 5.788
						},
						{
							"character": " ",
							"time": 6.46
						},
						{
							"character": "to",
							"time": 6.543
						},
						{
							"character": " ",
							"time": 6.543
						},
						{
							"character": "say",
							"time": 6.543
						}
					]
				},
				{
					"end": 112.875,
					"lyric": "I wish I was who you drunk-texted at midnight",
					"start": 108.71,
					"syncedLyric": [
						{
							"character": "I",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.086
						},
						{
							"character": "wish",
							"time": 0.1739
						},
						{
							"character": " ",
							"time": 1.095
						},
						{
							"character": "I",
							"time": 1.169
						},
						{
							"character": " ",
							"time": 1.236
						},
						{
							"character": "was",
							"time": 1.319
						},
						{
							"character": " ",
							"time": 1.766
						},
						{
							"character": "who",
							"time": 1.858
						},
						{
							"character": " ",
							"time": 2.347
						},
						{
							"character": "you",
							"time": 2.396
						},
						{
							"character": " ",
							"time": 2.596
						},
						{
							"character": "drunk-",
							"time": 2.662
						},
						{
							"character": "texted",
							"time": 3.019
						},
						{
							"character": " ",
							"time": 3.409
						},
						{
							"character": "at",
							"time": 3.517
						},
						{
							"character": " ",
							"time": 3.641
						},
						{
							"character": "midnight",
							"time": 3.716
						}
					]
				},
				{
					"end": 120.314,
					"lyric": "Wish I was the reason you stay up 'til three, and you can't fall asleep",
					"start": 114.77,
					"syncedLyric": [
						{
							"character": "Wish",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.03
						},
						{
							"character": "I",
							"time": 0.06
						},
						{
							"character": " ",
							"time": 0.09
						},
						{
							"character": "was",
							"time": 0.114
						},
						{
							"character": " ",
							"time": 0.163
						},
						{
							"character": "the",
							"time": 0.196
						},
						{
							"character": " ",
							"time": 0.337
						},
						{
							"character": "reason",
							"time": 0.371
						},
						{
							"character": " ",
							"time": 1.366
						},
						{
							"character": "you",
							"time": 1.872
						},
						{
							"character": " ",
							"time": 2.037
						},
						{
							"character": "stay",
							"time": 2.112
						},
						{
							"character": " ",
							"time": 2.278
						},
						{
							"character": "up",
							"time": 2.294
						},
						{
							"character": " ",
							"time": 2.402
						},
						{
							"character": "'til",
							"time": 2.493
						},
						{
							"character": " ",
							"time": 2.973
						},
						{
							"character": "three,",
							"time": 3.023
						},
						{
							"character": " ",
							"time": 3.562
						},
						{
							"character": "and",
							"time": 3.653
						},
						{
							"character": " ",
							"time": 3.827
						},
						{
							"character": "you",
							"time": 3.869
						},
						{
							"character": " ",
							"time": 4.167
						},
						{
							"character": "can't",
							"time": 4.242
						},
						{
							"character": " ",
							"time": 4.798
						},
						{
							"character": "fall",
							"time": 4.856
						},
						{
							"character": " ",
							"time": 5.071
						},
						{
							"character": "asleep",
							"time": 5.13
						}
					]
				},
				{
					"end": 123.283,
					"lyric": "Waiting for me to reply",
					"start": 120.6,
					"syncedLyric": [
						{
							"character": "Waiting",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.6899
						},
						{
							"character": "for",
							"time": 0.781
						},
						{
							"character": " ",
							"time": 0.93
						},
						{
							"character": "me",
							"time": 1.0048
						},
						{
							"character": " ",
							"time": 1.2709
						},
						{
							"character": "to",
							"time": 1.32
						},
						{
							"character": " ",
							"time": 1.445
						},
						{
							"character": "reply",
							"time": 1.528
						}
					]
				},
				{
					"end": 129.482,
					"lyric": "I wish I was more than just someone you walk by",
					"start": 124.25,
					"syncedLyric": [
						{
							"character": "I",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.112
						},
						{
							"character": "wish",
							"time": 0.224
						},
						{
							"character": " ",
							"time": 1.252
						},
						{
							"character": "I",
							"time": 1.327
						},
						{
							"character": " ",
							"time": 1.393
						},
						{
							"character": "was",
							"time": 1.476
						},
						{
							"character": " ",
							"time": 1.808
						},
						{
							"character": "more",
							"time": 1.866
						},
						{
							"character": " ",
							"time": 2.322
						},
						{
							"character": "than",
							"time": 2.48
						},
						{
							"character": " ",
							"time": 2.746
						},
						{
							"character": "just",
							"time": 2.77
						},
						{
							"character": " ",
							"time": 3.011
						},
						{
							"character": "someone",
							"time": 3.086
						},
						{
							"character": " ",
							"time": 3.724
						},
						{
							"character": "you",
							"time": 3.79
						},
						{
							"character": " ",
							"time": 3.948
						},
						{
							"character": "walk",
							"time": 4.014
						},
						{
							"character": " ",
							"time": 4.106
						},
						{
							"character": "by",
							"time": 4.669
						}
					]
				},
				{
					"end": 134.5089,
					"lyric": "Wish I wasn't scared to be honest and open, instead of just hoping",
					"start": 129.84,
					"syncedLyric": [
						{
							"character": "Wish",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.042
						},
						{
							"character": "I",
							"time": 0.083
						},
						{
							"character": " ",
							"time": 0.2829
						},
						{
							"character": "wasn't",
							"time": 0.316
						},
						{
							"character": " ",
							"time": 0.507
						},
						{
							"character": "scared",
							"time": 0.532
						},
						{
							"character": " ",
							"time": 1.726
						},
						{
							"character": "to",
							"time": 1.742
						},
						{
							"character": " ",
							"time": 1.817
						},
						{
							"character": "be",
							"time": 1.908
						},
						{
							"character": " ",
							"time": 2
						},
						{
							"character": "honest",
							"time": 2.074
						},
						{
							"character": " ",
							"time": 2.496
						},
						{
							"character": "and",
							"time": 2.5299
						},
						{
							"character": " ",
							"time": 2.654
						},
						{
							"character": "open,",
							"time": 2.754
						},
						{
							"character": " ",
							"time": 3.218
						},
						{
							"character": "instead",
							"time": 3.409
						},
						{
							"character": " ",
							"time": 3.865
						},
						{
							"character": "of",
							"time": 4.023
						},
						{
							"character": " ",
							"time": 4.172
						},
						{
							"character": "just",
							"time": 4.246
						},
						{
							"character": " ",
							"time": 4.644
						},
						{
							"character": "hoping",
							"time": 4.6689
						}
					]
				},
				{
					"end": 138.264,
					"lyric": "You'd feel what I'm feeling inside",
					"start": 135.75,
					"syncedLyric": [
						{
							"character": "You'd",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.24
						},
						{
							"character": "feel",
							"time": 0.29
						},
						{
							"character": " ",
							"time": 0.588
						},
						{
							"character": "what",
							"time": 0.63
						},
						{
							"character": " ",
							"time": 0.92
						},
						{
							"character": "I'm",
							"time": 0.995
						},
						{
							"character": " ",
							"time": 1.169
						},
						{
							"character": "feeling",
							"time": 1.235
						},
						{
							"character": " ",
							"time": 1.583
						},
						{
							"character": "inside",
							"time": 1.616
						}
					]
				},
				{
					"end": 145.739,
					"lyric": "Oh, and here we go again, destroying myself to keep a friend",
					"start": 139.57,
					"syncedLyric": [
						{
							"character": "Oh,",
							"time": 0
						},
						{
							"character": " ",
							"time": 1.111
						},
						{
							"character": "and",
							"time": 1.1359
						},
						{
							"character": " ",
							"time": 1.203
						},
						{
							"character": "here",
							"time": 1.235
						},
						{
							"character": " ",
							"time": 1.427
						},
						{
							"character": "we",
							"time": 1.468
						},
						{
							"character": " ",
							"time": 1.617
						},
						{
							"character": "go",
							"time": 1.717
						},
						{
							"character": " ",
							"time": 1.866
						},
						{
							"character": "again,",
							"time": 1.899
						},
						{
							"character": " ",
							"time": 2.596
						},
						{
							"character": "destroying",
							"time": 2.637
						},
						{
							"character": " ",
							"time": 4.071
						},
						{
							"character": "myself",
							"time": 4.195
						},
						{
							"character": " ",
							"time": 4.925
						},
						{
							"character": "to",
							"time": 5.108
						},
						{
							"character": " ",
							"time": 5.447
						},
						{
							"character": "keep",
							"time": 5.539
						},
						{
							"character": " ",
							"time": 5.954
						},
						{
							"character": "a",
							"time": 6.136
						},
						{
							"character": " ",
							"time": 6.168
						},
						{
							"character": "friend",
							"time": 6.168
						}
					]
				},
				{
					"end": 152.005,
					"lyric": "Hiding away 'cause I was afraid you'd say no",
					"start": 147.07,
					"syncedLyric": [
						{
							"character": "Hiding",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.274
						},
						{
							"character": "away",
							"time": 0.598
						},
						{
							"character": " ",
							"time": 0.971
						},
						{
							"character": "'cause",
							"time": 1.103
						},
						{
							"character": " ",
							"time": 2.3969
						},
						{
							"character": "I",
							"time": 2.463
						},
						{
							"character": " ",
							"time": 2.546
						},
						{
							"character": "was",
							"time": 2.67
						},
						{
							"character": " ",
							"time": 2.861
						},
						{
							"character": "afraid",
							"time": 2.911
						},
						{
							"character": " ",
							"time": 3.583
						},
						{
							"character": "you'd",
							"time": 3.666
						},
						{
							"character": " ",
							"time": 4.288
						},
						{
							"character": "say",
							"time": 4.3789
						},
						{
							"character": " ",
							"time": 4.678
						},
						{
							"character": "no",
							"time": 4.7939
						}
					]
				},
				{
					"end": 161.204,
					"lyric": "I wonder if I cross your mind half as much as you do mine",
					"start": 154.44,
					"syncedLyric": [
						{
							"character": "I",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.054
						},
						{
							"character": "wonder",
							"time": 0.108
						},
						{
							"character": " ",
							"time": 1.095
						},
						{
							"character": "if",
							"time": 1.145
						},
						{
							"character": " ",
							"time": 1.368
						},
						{
							"character": "I",
							"time": 1.677
						},
						{
							"character": " ",
							"time": 1.776
						},
						{
							"character": "cross",
							"time": 1.808
						},
						{
							"character": " ",
							"time": 2.3969
						},
						{
							"character": "your",
							"time": 2.513
						},
						{
							"character": " ",
							"time": 3.0019
						},
						{
							"character": "mind",
							"time": 3.077
						},
						{
							"character": " ",
							"time": 3.368
						},
						{
							"character": "half",
							"time": 3.534
						},
						{
							"character": " ",
							"time": 4.738
						},
						{
							"character": "as",
							"time": 4.803
						},
						{
							"character": " ",
							"time": 4.894
						},
						{
							"character": "much",
							"time": 4.952
						},
						{
							"character": " ",
							"time": 5.4
						},
						{
							"character": "as",
							"time": 5.549
						},
						{
							"character": " ",
							"time": 5.724
						},
						{
							"character": "you",
							"time": 5.917
						},
						{
							"character": " ",
							"time": 6.205
						},
						{
							"character": "do",
							"time": 6.372
						},
						{
							"character": " ",
							"time": 6.587
						},
						{
							"character": "mine",
							"time": 6.644
						}
					]
				},
				{
					"end": 165.705,
					"lyric": "If I tell you the truth, what will I lose? I don't know",
					"start": 161.68,
					"syncedLyric": [
						{
							"character": "If",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.123
						},
						{
							"character": "I",
							"time": 0.215
						},
						{
							"character": " ",
							"time": 0.265
						},
						{
							"character": "tell",
							"time": 0.298
						},
						{
							"character": " ",
							"time": 0.581
						},
						{
							"character": "you",
							"time": 0.655
						},
						{
							"character": " ",
							"time": 0.829
						},
						{
							"character": "the",
							"time": 0.871
						},
						{
							"character": " ",
							"time": 1.012
						},
						{
							"character": "truth,",
							"time": 1.095
						},
						{
							"character": " ",
							"time": 1.941
						},
						{
							"character": "what",
							"time": 1.991
						},
						{
							"character": " ",
							"time": 2.223
						},
						{
							"character": "will",
							"time": 2.248
						},
						{
							"character": " ",
							"time": 2.579
						},
						{
							"character": "I",
							"time": 2.613
						},
						{
							"character": " ",
							"time": 2.6549
						},
						{
							"character": "lose?",
							"time": 2.729
						},
						{
							"character": " ",
							"time": 3.351
						},
						{
							"character": "I",
							"time": 3.384
						},
						{
							"character": " ",
							"time": 3.45
						},
						{
							"character": "don't",
							"time": 3.509
						},
						{
							"character": " ",
							"time": 3.848
						},
						{
							"character": "know",
							"time": 3.898
						}
					]
				},
				{
					"end": 174.076,
					"lyric": "I wish I sent you that drunk text at midnight",
					"start": 169.6699,
					"syncedLyric": [
						{
							"character": "I",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.041
						},
						{
							"character": "wish",
							"time": 0.083
						},
						{
							"character": " ",
							"time": 0.39
						},
						{
							"character": "I",
							"time": 0.805
						},
						{
							"character": " ",
							"time": 1.029
						},
						{
							"character": "sent",
							"time": 1.178
						},
						{
							"character": " ",
							"time": 2.049
						},
						{
							"character": "you",
							"time": 2.123
						},
						{
							"character": " ",
							"time": 2.248
						},
						{
							"character": "that",
							"time": 2.289
						},
						{
							"character": " ",
							"time": 2.546
						},
						{
							"character": "drunk",
							"time": 2.6629
						},
						{
							"character": " ",
							"time": 3.069
						},
						{
							"character": "text",
							"time": 3.16
						},
						{
							"character": " ",
							"time": 3.31
						},
						{
							"character": "at",
							"time": 3.335
						},
						{
							"character": " ",
							"time": 3.401
						},
						{
							"character": "midnight",
							"time": 3.451
						}
					]
				},
				{
					"end": 180.428,
					"lyric": "I was just scared it would ruin our friendship, but I really meant it",
					"start": 175.68,
					"syncedLyric": [
						{
							"character": "I",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.066
						},
						{
							"character": "was",
							"time": 0.132
						},
						{
							"character": " ",
							"time": 0.331
						},
						{
							"character": "just",
							"time": 0.397
						},
						{
							"character": " ",
							"time": 0.646
						},
						{
							"character": "scared",
							"time": 0.6959
						},
						{
							"character": " ",
							"time": 1.045
						},
						{
							"character": "it",
							"time": 1.111
						},
						{
							"character": " ",
							"time": 1.592
						},
						{
							"character": "would",
							"time": 1.617
						},
						{
							"character": " ",
							"time": 2.19
						},
						{
							"character": "ruin",
							"time": 2.306
						},
						{
							"character": " ",
							"time": 2.6549
						},
						{
							"character": "our",
							"time": 2.687
						},
						{
							"character": " ",
							"time": 2.787
						},
						{
							"character": "friendship,",
							"time": 2.845
						},
						{
							"character": " ",
							"time": 3.559
						},
						{
							"character": "but",
							"time": 3.674
						},
						{
							"character": " ",
							"time": 3.898
						},
						{
							"character": "I",
							"time": 3.956
						},
						{
							"character": " ",
							"time": 3.99
						},
						{
							"character": "really",
							"time": 4.023
						},
						{
							"character": " ",
							"time": 4.38
						},
						{
							"character": "meant",
							"time": 4.404
						},
						{
							"character": " ",
							"time": 4.446
						},
						{
							"character": "it",
							"time": 4.596
						}
					]
				},
				{
					"end": 183.565,
					"lyric": "I wonder how you would reply",
					"start": 181.23,
					"syncedLyric": [
						{
							"character": "I",
							"time": 0
						},
						{
							"character": " ",
							"time": 0.067
						},
						{
							"character": "wonder",
							"time": 0.135
						},
						{
							"character": " ",
							"time": 0.599
						},
						{
							"character": "how",
							"time": 0.674
						},
						{
							"character": " ",
							"time": 0.824
						},
						{
							"character": "you",
							"time": 0.89
						},
						{
							"character": " ",
							"time": 1.214
						},
						{
							"character": "would",
							"time": 1.2548
						},
						{
							"character": " ",
							"time": 1.587
						},
						{
							"character": "reply",
							"time": 1.86
						}
					]
				}
			]
		}
	}
}
```

**Note:** `lyrics` & `source` might be `null` if none of the providers have the lyrics of your song.