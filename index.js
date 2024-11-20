const baseUrl = "musicrecordsopgave.azurewebsites.net/api/musicrecords";

Vue.createApp({
    data() {
        return {
            musicRecords: []
        }
    },
    metogds: {
        getAllMusicRecords() {
            this.getAllMusicRecords(baseUrl)
        },
        async getAllMusicRecords(url) {
            try {
                const response = await axios.get(url)
                this.musicRecords = await response.data
            }
            catch (error) {
                alert(ex.message)
            }

        }
  
    }

}).mount("#app")

