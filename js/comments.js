function commentCreation() {
    var commentInput = document.getElementById('input-comment').value;
    if (commentInput != '') {
        console.log('success');
        var list = document.getElementById('comment-list');
        var newLi = document.createElement('li');
        list.appendChild(newLi);
        list.style.visibility = 'visible';
        newLi.innerHTML = commentInput;
    }
    else {
        console.log('error');
        document.getElementById('input-comment').style.borderColor = "red";
    }
  }
  