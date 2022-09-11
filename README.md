## (CC) Web Component

### WebVTT file API

Example usage:

```
<cc-element
   .sources=${[
        {src: 'path/to/video.mp4', srcType: 'video/mp4'},
        {src: 'path/to/video.webm', srcType: 'video/webm'}
    ]}
   .tracks=${[
        {
            label: "English",
            kind: "subtitles",
            src: "path/to/vtt/subs-en.vtt",
            srclang: "en",
            default: true,
        },
        {
            label: "Español",
            kind: "subtitles",
            src: "path/to/vtt/subs-es.vtt",
            srclang: "es",
            default: false,
        },
   ]}>
</cc-element>

```

## CueList API

Example usage:

```
<cc-cue-element
    .sources=${[{src: 'path/to/video.mp4', srcType: 'video/mp4'},]}
    .cues=${[
        { startTime: 0, endTime: 1, text: "Testing..." },
        { startTime: 2, endTime: 3, text: "Testing testing..." },
    ]}>
</cc-cue-element>

```
