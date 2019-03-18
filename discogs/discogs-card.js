const css = `
  .record-title {
    background: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
  }
`

class DiscogsCard extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
  }

  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.style.width = '500px';
      card.style.height = '500px';

      this.content = document.createElement('div');

      const style = document.createElement('style');
      style.textContent = css;

      card.appendChild(this.content);
      this.appendChild(card);
    }

    const entityId = this.config.entity;
    const { state } = hass.states[entityId];
    const attrs = this.getAttributes(hass, entityId);

    this.content.innerHTML = `
      <img src="${attrs.cover_image}" alt="${state}" height="500px" width="500px" />
      <div class="record-title" style="position: relative; bottom: 50px; left: 0; right: 0; background: white; padding: 1rem;">
        ${state}
      </div>
    `;
  }

  getAttributes(hass, entityId) {
    const attrs = hass.states[entityId].attributes;
    console.log({
      states: hass.states,
      entity: hass.states[entityId],
      attrs,
    })
    return attrs;
  }

  setConfig(config) {
    if (!config.entity) throw new Error('You need to define your sensor.discogs_random_record entity');
    this.config = config;
  }

  getCardSize() { return 3; }
}

customElements.define('discogs-card', DiscogsCard);
