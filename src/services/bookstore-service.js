export default class BookstoreService {
    data = [{
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 32,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michel T. Nygard',
            price: 45,
            coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1013148793.jpg'

        }
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               if (Math.random() > 0.75) {
                   reject(new Error('error'))
               } else {
                   resolve(this.data)
               }
           }, 700)
        });
    }
}