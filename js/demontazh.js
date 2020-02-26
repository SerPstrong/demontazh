(function () {
  var app = "https://script.google.com/macros/s/AKfycbxOw6kKxWKL5hBucqTtrTPWtPHnYnx8zkvk52ZbgxJnlQb_nio/exec",
    output = '<table class="table table-striped"> <thead>\n' +
      '          <tr>\n' +
      '            <th>Название</th>\n' +
      '            <th>ед. измерения</th>\n' +
      '            <th>Цена, р.</th>\n' +
      '            <th></th>\n' +
      '          </tr>\n' +
      '          </thead>',
    xhr = new XMLHttpRequest();
  xhr.open('GET', app);
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status == 200) {
      try {
        var r = JSON.parse(xhr.responseText),
          result = r["result"];
        console.log(result);
        for (var i = 0; i < result.length; i++){
          output += '<tr>';

          for(let j = 0; j < result[i].length; j++ ) {

            output += `<td>${result[i][j]}<td>`
          }

          output += '</tr>';


          // output += obj.join("<br/>") + "<br/><hr/>";
          // list += '<li>' + i + ': ' + data.items[i] + ' шт. </li>';
        }

        output += '</table>';
      } catch(e) {}
    }

    document.getElementById('info').innerHTML = output;
  }
  xhr.send()
})()
