import $ from 'jquery'

export function mediaQuery(smallerFunc: () => void, largerFunc: () => void, screenSize: number) {
    var windowWidth = $(window).width();

    if (windowWidth <= screenSize) {
        smallerFunc()
    } else {
        largerFunc()
    }
    
}
export function generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}
