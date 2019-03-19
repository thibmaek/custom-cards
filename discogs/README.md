![Imgur](https://i.imgur.com/aqjyUco.png)

Include it:

```yaml
resources:
  - url: /local/discogs-card.js?v=1.0.0
    type: module
```

Use it in your UI:

```yaml
- type: custom:discogs-card
  entity: sensor.discogs_random_record
```
