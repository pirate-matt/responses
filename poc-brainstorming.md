Structure

```
/Responses
  most-responses.png
  /icons
  /wednesday
  /video-backgrounds
  /micro-meditations
```

Potential Versioning/Conflict Resolution
```
/Responses
  history.json
  /conflicts
  ...
```
and
```
[Storage Solution]
  YYYY-MM-DD:MS__Responses.zip
```

Do I need to handle "locks"? This seems like a good idea.

Eventually I'd like to overwrite a single compressed, encrypted file, but for now it may make sense to save seperate historical versions (or let it be an option?)

---

## open questions
* [ ] How do I handle structure shifts? `/zoom` --> `/video-backgrounds`

---

## thinking about psuedo code

* get remote copy decompress
* for both remote-copy & local-copy
  * build file tree
  * associate custom metadata from `history.json` or similiar
  * things like: `first_synced_time`, `latest_sync_time`

```javascript
const fileTree = {
  'most-responses.png': {
    first_synced: '2021-11-21T19:20:44.057Z',
    latest_sync: '2021-11-21T19:20:44.057Z'
  }

  `/icons`: {
    'file-name.png': {
      first_synced: '2021-11-21T19:20:44.057Z',
      latest_sync: '2021-11-21T19:20:44.057Z'
    }
  }
};
```

merge the trees into...
```javascript
const mergeData = {
  obj: remoteFileTree || localFileTree,
  key: '/icons/new-file.png',
  first_synced: 'isostring',
  latest_sync: 'isostring'
};

// files with no corresponding file name
const newFromLocal = [mergeData1, mergeData2, ...];
const newFromRemote = [mergeData1, mergeData2, ...];

// hmmmm... need to handle deletes here. TDD might be fun.

// files in both local & remote assume latest update date is source of truth
const updatesFromLocal = [mergeData1, mergeData2, ...];
const updatesFromRemote = [mergeData1, mergeData2, ...];

// two brand new files in both trees (first_synced === latest_synced)
// ...better yet can I do _actual_ file compares?
const conflicts = [{
  ..._.omit(mergeData, 'obj'),
}]
```