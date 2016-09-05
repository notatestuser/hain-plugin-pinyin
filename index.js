'use strict';

(function(){

const pinyin = require('mini-pinyin');

module.exports = (context) => {
    const mapSinglePinyinSyllable = (syllable) =>
        Array.isArray(syllable) ? syllable.join('/') : syllable;
    
    function search(query, res) {
        res.add({
            id: 0,
            payload: '',
            title: query.split('').map(l => 
                l === ' ' ? ' ' : mapSinglePinyinSyllable(pinyin(l))).join(', ').substr(2),
            icon: '#fa fa-clipboard'
        });
    }
    return { search };
};

})();
