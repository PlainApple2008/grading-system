/*
 * Includes methods for creating "subject profiles"
 * 
 * A "subject profile" refers to a list of subjects 
 * defined by the user for a specific curriculum
 */

// TODO Implement profile system

// Save State
function loadSavedProfiles() {
  
}


// Interface controls
function openAddSubjectInterface() {
  document.querySelector("#group-add-subject-interface").style.display = "block";
}

function closeAddSubjectInterface() {
  // Close interface
  document.querySelector("#group-add-subject-interface").style.display = "none";
}

function createSubject() {
  let subjectName = document.querySelector("#input-new-subject-name").value;
  
  if (subjectName.trim().length === 0) {
    
    alert("Please enter a name for creating new subject");
    return;
  }
  
  let p = document.createElement("p");
  
  p.textContent = subjectName;
  
  let btnDelete = document.createElement("button");
  
  btnDelete.textContent = "X";
  btnDelete.addEventListener("click", (event) => {
    let parent = btnDelete.parentNode;
    let children = parent.childNodes;
    
    for (let i = 0; i < children.length; i++) {
      children[i].remove();
    }
    
    parent.remove();
  });
  
  let div = document.createElement("div");
  
  div.classList.add("subject");
  div.appendChild(p);
  div.appendChild(btnDelete);
  
  let sublist = document.querySelector("#subject-list");
  
  sublist.appendChild(div);
  
  // Clear input
document.querySelector("#input-new-subject-name").value = "";

  closeAddSubjectInterface();
}

function viewProfile() {
  
}

function deleteCurrentProfile() {
  
}

function createProfile() {
  
}

function saveCurrentChanges() {
  
}