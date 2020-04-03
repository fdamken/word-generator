dicts = { };

const generateWord = function (dict) {
    const word = dict[Math.floor(Math.random() * dict.length)];
    document.querySelector('#span-words').innerHTML = word;
};

document.querySelector('#btn-generate').onclick = function () {
    dictLocale = document.querySelector('#select-dict').value;
    if (dicts[dictLocale]) {
        generateWord(dicts[dictLocale]);
    } else {
        http.get('dict/' + encodeURIComponent(dictLocale) + '.txt').then(function (req) {
            dicts[dictLocale] = req.data.split('\n');
            generateWord(dicts[dictLocale]);
        });
    }
};
