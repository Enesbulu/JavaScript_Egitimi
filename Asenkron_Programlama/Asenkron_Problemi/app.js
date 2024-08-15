//_ Asenkron Programlama - Asenkron Programı

//* http istekleri

const users = [
    {
        userId: 5,
        post: "Enes Post 1"
    }, {
        userId: 5,
        post: "Enes Post 2"
    }, {
        userId: 5,
        post: "Enes Post 3"
    }, {
        userId: 6,
        post: "ALi Post 1"
    }, {
        userId: 7,
        post: "Gamze Post 1"
    },
]


function getUserId() {
    setTimeout(() => {
        //Servise gittik ve cevabı aldık.
        return 5;
    }, 1000);
}
function getPostUSerId(userId) {
    setTimeout(() => {
        // console.log(users.filter(user => user.userId === userId));
        users.forEach(user => {
            if (user.userId === userId) console.log(user);
        });
    }, 500);
}

let userId = getUserId();

getPostUSerId(userId);
