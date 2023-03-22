import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("preview controller connected !")

    var input = document.getElementById('model_photos');
    var preview = document.querySelector('.preview');

    input.addEventListener('change', updateImageDisplay);

    function updateImageDisplay() {
      while(preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }

      var curFiles = input.files;

      if(curFiles.length === 0) {
        var para = document.createElement('p');
        para.textContent = 'No files currently selected for upload';
        preview.appendChild(para);
      } else {
        var list = document.createElement('ul');
        preview.appendChild(list);
        for(var i = 0; i < curFiles.length; i++) {
          var listItem = document.createElement('li');
          var para = document.createElement('p');

            var image = document.createElement('img');
            image.src = window.URL.createObjectURL(curFiles[i]);

            listItem.appendChild(image);
            listItem.appendChild(para);

          list.appendChild(listItem);
        }
      }
    }
  }
}