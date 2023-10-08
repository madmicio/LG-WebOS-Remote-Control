firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const plusButton = this.shadowRoot.querySelector("#plusButton");
    const minusButton = this.shadowRoot.querySelector("#minusButton");
    const interval = this.output_entity === this.config.ampli_entity ? 250 : 100;
    let longPressTimer;
    let isLongPress = false;

    // Funzione per aggiornare e chiamare il servizio
    const updateValue = (service) => {
        this.hass.callService("media_player", service, {
            entity_id: this.output_entity,
        });
    };

    // Gestore per il pulsante '+' (plusButton)
    plusButton.addEventListener("mousedown", () => {
        if (!isNaN(this.volume_value)) {
            isLongPress = false;
            this._show_vol_text = true;
            longPressTimer = setTimeout(() => {
                isLongPress = true;
                updateValue("volume_up");
                longPressTimer = setInterval(() => updateValue("volume_up"), interval);
            }, 500);
        }
    });

    plusButton.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (!isNaN(this.volume_value)) {
            isLongPress = false;
            this._show_vol_text = true;
            longPressTimer = setTimeout(() => {
                isLongPress = true;
                updateValue("volume_up");
                longPressTimer = setInterval(() => updateValue("volume_up"), interval);
            }, 500);
        }
    });

    plusButton.addEventListener("mouseup", () => {
        clearTimeout(longPressTimer);
        if (!isLongPress) {
            updateValue("volume_up");
        }
        clearInterval(longPressTimer);
        this.valueDisplayTimeout = setTimeout(() => {
            this._show_vol_text = false;
        }, 500);
    });

    plusButton.addEventListener("touchend", () => {
        clearTimeout(longPressTimer);
        if (!isLongPress) {
            updateValue("volume_up");
        }
        clearInterval(longPressTimer);
        this.valueDisplayTimeout = setTimeout(() => {
            this._show_vol_text = false;
        }, 500);
    });

    // Gestore per il pulsante '-' (minusButton)
    minusButton.addEventListener("mousedown", () => {
        if (!isNaN(this.volume_value)) {
            isLongPress = false;
            this._show_vol_text = true;
            longPressTimer = setTimeout(() => {
                isLongPress = true;
                updateValue("volume_down");
                longPressTimer = setInterval(() => updateValue("volume_down"), interval);
            }, 400);
        }
    });

    minusButton.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (!isNaN(this.volume_value)) {
            isLongPress = false;
            this._show_vol_text = true;
            longPressTimer = setTimeout(() => {
                isLongPress = true;
                updateValue("volume_down");
                longPressTimer = setInterval(() => updateValue("volume_down"), interval);
            }, 400);
        }
    });

    minusButton.addEventListener("mouseup", () => {
        clearTimeout(longPressTimer);
        if (!isLongPress) {
            updateValue("volume_down");
        }
        clearInterval(longPressTimer);
        this.valueDisplayTimeout = setTimeout(() => {
            this._show_vol_text = false;
        }, 500);
    });

    minusButton.addEventListener("touchend", () => {
        clearTimeout(longPressTimer);
        if (!isLongPress) {
            updateValue("volume_down");
        }
        clearInterval(longPressTimer);
        this.valueDisplayTimeout = setTimeout(() => {
            this._show_vol_text = false;
        }, 500);
    });
}