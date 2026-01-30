/**
 * Navigates to the specified {@code path}
 * 
 * @param path the valid path to a page
 */
function navigate(path = "./index.html") {
  window.location.href = path;
}

function addSubject() {
  // Create Subject Type Selection
  let select_type = document.createElement("select");
  const subjectTypeList = ["CORE", "APPLIED", "SPECIALIZED"];
  for (let i = 0; i < subjectTypeList.length; i++) {
    let option = document.createElement("option");
    option.value = subjectTypeList[i];
    option.innerText = subjectTypeList[i]
    select_type.appendChild(option);
  }
  
  // Create Subject Selection
  let select_subject = document.createElement("select");
  const subjectList = ["Computer Programming (.NET)", "Physical Science", "Reading and Writing Skills", "Statistics and Probability", "Health Optimization and Physical Education"];
  for (let i = 0; i < subjectList.length; i++) {
    let option = document.createElement("option");
    option.value = subjectList[i];
    option.innerText = subjectList[i];
    select_subject.appendChild(option);
  }
  
  // Create Q1 Grade Input
  let label_q1grade = document.createElement("label");
  label_q1grade.htmlFor = "input-grade-q1";
  label_q1grade.innerText = "Grade Q1:";
  let input_q1grade = document.createElement("input");
  input_q1grade.id = "input-grade-q1";
  input_q1grade.type = "number";
  input_q1grade.min = 0;
  input_q1grade.max = 100;
  
  // Create Q2 Grade Input
  let label_q2grade = document.createElement("label");
  label_q2grade.htmlFor = "input-grade-q2";
  label_q2grade.innerText = "Grade Q2:";
  let input_q2grade = document.createElement("input");
  input_q2grade.id = "input-grade-q2";
  input_q2grade.type = "number";
  input_q2grade.min = 0;
  input_q2grade.max = 100;
  
  // Create div for subject item
  let div = document.createElement("div");
  div.id = "subject-item";
  
  // Append elements to div
  div.appendChild(select_type);
  div.appendChild(select_subject);
  div.appendChild(label_q1grade);
  div.appendChild(input_q1grade);
  div.appendChild(label_q2grade);
  div.appendChild(input_q2grade);
  
  // Add to Subject List fieldset
  document.querySelector("#subject-list").appendChild(div);
}