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
        wide: false,
        __proto__: pattern
    },
    {
        name: "hulk_new.jpg",
        video: "http://www.google.com",
        wide: false,
        __proto__: pattern
    },
    {
        name: "flowers.jpg",
        phone_view: "flowers_vertical.jpg",
        video: false,
        wide: true,
        __proto__: pattern
    },
]
