var quotes = [
    quote1 = {
        quoteName: '“Be yourself; everyone else is already taken.”',
        quoteSource: 'Oscar Wilde',
    },
    quote2 = {
        quoteName: '“A room without books is like a body without a soul.”',
        quoteSource: 'Marcus Tullius Cicero',
    },
    quote3 = {
        quoteName: '“You only live once, but if you do it right, once is enough.”',
        quoteSource: 'Mae West',
    },
    quote4 = {
        quoteName: '“حب ما تعمل حتي تعمل ما تحب ”',
        quoteSource: 'احمد حلمي',
    },
    quote5 = {
        quoteName: '“Be the change that you wish to see in the world.”',
        quoteSource: 'Mahatma Gandhi',
    },
    quote6 = {
        quoteName: "“If you tell the truth, you don't have to remember anything.”",
        quoteSource: 'Elbert Hubbard',
    },
    quote7 = {
        quoteName: '“Always forgive your enemies; nothing annoys them so much.”',
        quoteSource: 'Wilde',
    },
    quote8 = {
        quoteName: '“احنا كنا كده وبقينا كده فتعلمو من كده عشان نبقا كده”',
        quoteSource: 'عبدالفتاح السيسي',
    },
    quote9 = {
        quoteName: '“It is better to be hated for what you are than to be loved for what you are not.”',
        quoteSource: 'Andre Gide, Autumn Leaves',
    },
    quote10 = {
        quoteName: '“So many books, so little time.”',
        quoteSource: 'Frank Zappa',
    }
]





var arr = [];


function changeQuote() {

    var counter = Math.trunc(Math.random() * (quotes.length - 1))

    arr.push(counter);


    var lastIndex = arr[arr.length - 1]

    if (lastIndex == arr[arr.length - 2]) {
        lastIndex++
    }


    cart = `
        <figure class="text-center">
                    <blockquote class="blockquote">
                    <p class="fs-2 fw-bolder">${quotes[lastIndex].quoteName}</p>
                    </blockquote>
                    <figcaption class="blockquote-footer fs-4 fw-semibold">
                    ${quotes[lastIndex].quoteSource}
                    </figcaption>
        </figure>
        `


    document.getElementById('demo').innerHTML = cart

}