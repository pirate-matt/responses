# responses-sync
Cross-device management of saved response images.

I have a saved collection of images I like to use as responses, memes, gifs, icons for emoji, etc. This program will grab the local copy and the remote copy, and do a join merge so no matter where something is added, my collection stays relatively up to date.

**A Note on Licensing This Repo:**  
For now, I am the sole copyright owner and don't have a license available.
My primary goal right now is to do some learning/practice publicly.
I'll likely get a contributor down the line and discuss with them what we want to do about a license, contributor agreement, etc.
Probably open source... but I've been thinking about this a lot in relation to my own revenue sources:

> _And we must start on standby water facilities at onece. No man is going to hold a club over my head!_  
> —Duke Leto Atreiedes (internal thought)

So I may end up pulling this entirely if listing on app stores seems a viable route and we're concerned with copycats... only time will tell.
I'm working on this project in-between the margins as the mood strikes me, so if you somehow stumble upon it and want it to move faster to solve your own problems, feel free to reach out about contributing.

---

# TODOs
* [ ] get a [working POC](./poc-brainstorming.md) across two macs in whatever, likely node
* [ ] version the storage?
  * metadata on the files might suffice?
  * or maybe just file conflict management
* [ ] encrypt the storage and find a long-term home for the data
* [ ] pick a cross device platform to look into developing MacOS and Android App
  * [ ] set folder storage location (default to `~/Desktop/Responses` for mac)
  * [ ] set external storage credentials
  * [ ] status bar on mac with sync info and settings
* [ ] see if an iOS friend wants to get involved?
* [ ] figure out the licensing: opensource or sell it on the app stores (maybe do both?)

