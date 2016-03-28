define(['data','jquery'], function(data, $){
    for (var i=0; i<myArr.length;i++){
        var localStor = localStorage;
        var oneStorageValue = localStor.getItem(myArr[i].id);
        var currentCount;
            if(oneStorageValue == null){
                    currentCount = 0;
                } else {
                    currentCount = oneStorageValue
                 }

        $liElem = $('<li/>', {id: myArr[i].id, class: "item"});
        $imgElem = $('<img/>', {src: "./images/"+myArr[i].image});
        $spanElem = $('<span/>', {class: "counter", text: Number(currentCount)});
        $liElem.append($imgElem, $spanElem);
        $('.gallery').append($liElem);

    }

});
