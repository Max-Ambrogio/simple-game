class StatusMessage {
    constructor(element){
        this.statusEl = element

        this.setup()
    }

    setup(){
        document.addEventListener('game-status', this.handleStatusUpdate)
    }

    handleStatusUpdate = (evt) => {
        this.statusEl.textContent = evt.detail.message
    }
}