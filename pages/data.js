pattern = {
    get_info: function() {
        return {
            pc_img: `../category_media/pc_imgs/${this.name}`,
            phone_img: `../category_media/mobile_imgs/${this.name}`,
            video: this.video
        }
    }
}

const data = [
    {
        name: "hulk.jpg",
        video: "http://www.youtube.com",
        __proto__: pattern
    },
    {
        name: "hulk.jpg",
        video: false,
        __proto__: pattern
    },
    {
        name: "hulk.jpg",
        video: "https://www.google.com",
        __proto__: pattern
    }
]

console.log(data[0].get_info());