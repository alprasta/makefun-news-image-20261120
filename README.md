# The World Today — 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/alprasta/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/alprasta/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A single front page that sums up Friday 20 November 2026, built for
make.fun's [news-image-20261120 bounty](https://make.fun/bounty/news-image-20261120).

## The three stories

1. **Three leaders, one table** — Donald Trump, Xi Jinping and Vladimir Putin sit down together for the first time, in Shenzhen, and agree to keep talking about lowering nuclear risks: "A nuclear war cannot be won and must never be fought." (USA Today, CNN, Le Monde)
2. **A missile strikes Riyadh's tallest tower** — A Houthi missile hits the PIF Tower in the King Abdullah Financial District and shatters windows over seven floors. Nobody was hurt. It is the second attack on the district in eleven days. (Reuters, AFP)
3. **Cyclone Akvan closes in on India** — 80,000 people have been moved out of the way as the severe storm approaches Odisha and Andhra Pradesh. Landfall is expected today.

Also today: the first GTA 6 reviews are out; the world court says Myanmar "likely intended" the destruction of the Rohingya; and Henry Nicholls' unbeaten 113 steadies New Zealand against India.

## How it was made

The three pictures are illustrations with no words inside them. The front page itself — masthead, headlines and captions — is set in a real font, so every word is spelled right and stays readable when the page is small. The masthead names the date: 20 November 2026. The picture is stored as JPEG data under the name `entry.png`, and the program hands it on untouched, so what the grader receives is exactly the file in this repository.

Sources: Reuters, AP, AFP, USA Today — as credited on the front page.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` into the output folder, exactly as it is.
