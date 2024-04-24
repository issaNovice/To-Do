const add = document.getElementById("addB");
const list = document.getElementById("list");
const display = document.getElementById("texts");
const remove = document.getElementById("removeB");
const pag = document.querySelector('.hide');

add.addEventListener('click', () => {
  const newText = display.value.trim();
  if (list.childElementCount > 9) {
    alert("Max Limit");
  }
  else if (newText) {
    const newItem = document.createElement('li');
    newItem.textContent = newText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newItem.appendChild(checkbox);

    const newImage = document.createElement('img'); 
    newImage.src = "photos/trash.png"; 
    newImage.title = 'Remove';
    newItem.appendChild(newImage);

    list.appendChild(newItem);
    display.value = ""; 

    if (list.childElementCount !=0) {   
        pag.style.display = 'none';
    }
    else{
        pag.style.display = 'block';
    }

    checkbox.addEventListener('change', function() {
        const listItem = this.parentNode;
        listItem.classList.toggle('completed'); 
    });

    newImage.addEventListener('click', function() {
        newImage.parentNode.remove();
        if (list.childElementCount == 1) {   
            pag.style.display = 'block';
        }
      });
  }

  if (list.childElementCount === 0) {   
        pag.style.display = 'none';
    }
});

remove.addEventListener("click", () => {
  for (let i = list.children.length - 1; i >= 0; i--) {
    const currentItem = list.children[i];
    const checkbox = currentItem.querySelector('input[type="checkbox"]'); 
    if (checkbox.checked) { 
      list.removeChild(currentItem);
    }

    if (list.childElementCount !=0) {   
        pag.style.display = 'none';
    }
    else{
        pag.style.display = 'block';
    }
  }
});

display.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const newText = display.value.trim();
  
      if (list.childElementCount > 9) {
        alert("Max Limit");
      }
      else if (newText) {
        const newItem = document.createElement('li');
        newItem.textContent = newText;
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        newItem.appendChild(checkbox);
    
        const newImage = document.createElement('img'); 
        newImage.src = "photos/trash.png"; 
        newImage.title = 'Remove';
        newItem.appendChild(newImage);
    
        list.appendChild(newItem);
        display.value = ""; 
    
        if (list.childElementCount !=0) {   
            pag.style.display = 'none';
        }
        else{
            pag.style.display = 'block';
        }
    
        checkbox.addEventListener('change', function() {
            const listItem = this.parentNode;
            listItem.classList.toggle('completed'); 
        });
    
        newImage.addEventListener('click', function() {
            newImage.parentNode.remove();
            if (list.childElementCount == 1) {   
                pag.style.display = 'block';
            }
          });
      }
    
      if (list.childElementCount === 0) {   
            pag.style.display = 'none';
        }
      }
});