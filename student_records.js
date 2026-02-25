/* For student records
 */

class Student {
  id = -1;
  info = new LearnerInfo();
  scholasticRecord = new ScholasticRecord();
  
  constructor(learnerInfo, scholasticRecord) {
    this.info = learnerInfo;
    this.scholasticRecord = scholasticRecord;
  }
  
  id() { return id; }
  info() { return info; }
  scholasticRecord() { return scholasticRecord; }
}

class LearnerInfo {
  firstName = "";
  middleName = "";
  lastName = "";
  LRN = 0;
  dateOfBirth = new Date();
  shsAdmissionDate = new Date();
  sex = "";
  
  constructor() {
    
  }
  aggregate(val, i) {
    this[i] = val;
  }
}

class ScholasticRecord {
  currentSchool = "";
  currentSchoolID = 0;
  currentGradeLevel = 0;
  schoolYear = "";
  semester = "";
  section = "";
  track = "";
  strand = "";
  subjects = [];
}