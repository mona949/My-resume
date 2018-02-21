var bio = {
  'name': 'MONA',
  'role': 'front end developer',
  'contacts': {
    'mobile': '50016539',
    'email': 'muniii11.1994@gmail.com',
    'github': 'muna949',
    'twitter': 'muna949',
    'location': 'Riyadh Hittin'
  },
  'welcomeMessage': 'Wwwwwwwwelcome!',
  'skills': ['Computer Proficiency', 'Design', 'editing'],
  'biopic': 'images/me.jpg',
};
bio.display = function() {var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedtwitter, formattedLocation);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  $('#header').append(formattedBioPic);
  var formattewelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $("#header").append(formattewelcomeMessage);
  $('#header').append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
    $('#skills').append(formattedSkill);
  }
};
bio.display();
var education = {
  schools: [{
    name: 'King Khaled University',
    location: 'ABHA',
    degree: 'BA',
    majors: ['CS'],
    dates: '2012-2017',
    url: 'www.kku.edu.sa',
  }, {
    name: 'Udacity,MISK Foundation',
    location: 'Riyadh',
    degree: 'Nano',
    majors: ['FEND'],
    dates: '2018',
    url: 'misk.org.sa',
  }],
  onlineCourses: [{
    title: 'Steganography',
    school: 'Rwaq',
    dates: '2017',
    url: 'www.rwaq.org'
  }, {
    title: 'HTML & css skills',
    school: 'Edrak',
    dates: "2016-2017",
    url: 'www.edraak.org'
  }]
};
education.display = function() {education.schools.forEach(function(school) {
    var formattedEdName = HTMLschoolName.replace('%data%', school.name);
    var formattedEdLocation = HTMLschoolLocation.replace('%data%', school.location);
    var formattedEdDegree = HTMLschoolDegree.replace('%data%', school.degree);
    var formattedNameDegree = formattedEdName + formattedEdDegree;
    var formattedEdDates = HTMLschoolDates.replace('%data%', school.dates);
    var formattedEdMajors = HTMLschoolMajor.replace('%data%', school.majors);
    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(formattedEdLocation, formattedNameDegree, formattedEdDates, formattedEdMajors);
  });
  for (var o = 0; o < education.onlineCourses.length; o++) {
    var formattedOnlineEdName = HTMLonlineTitle.replace('%data%', education.onlineCourses[o].title);
    var formattedOnlineEdLocation = HTMLonlineSchool.replace('%data%', education.onlineCourses[o].school);
    var formattedTitleSchool = formattedOnlineEdName + formattedOnlineEdLocation;
    var formattedOnlineEdDates = HTMLonlineDates.replace('%data%', education.onlineCourses[o].dates);
    var formattedOnlineEdMajor = HTMLonlineURL.replace('%data%', education.onlineCourses[o].url);
    $('.education-entry:last').append(formattedTitleSchool, formattedOnlineEdDates, formattedOnlineEdMajor);
  }
};
education.display();
var work = {
  jobs: [{
    employer: 'KSU',
    title: 'Teaching',
    location: 'Riyadh KSU',
    dates: 'Jan-2017',
    description: ' in ksu i was Teaching computer basics to students , it was good experience',
  }, {
    employer: 'alkhaleej Institute',
    title: 'Teaching',
    location: 'Riyadh',
    dates: 'jan 2016  - jan 2017',
    description: ' in alkhaleej Institute i give class in CS for different types of students',
  }]
};
work.display = function() {
  work.jobs.forEach(function(jobs) {
    var formattedEmployer = HTMLworkEmployer.replace('%data%', jobs.employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', jobs.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace('%data%', jobs.dates);
    var formattedDescription = HTMLworkDescription.replace('%data%', jobs.description);
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedDescription);
  });
};
work.display();
var projects = {
  projects: [{
    title: 'coffee shop application',
    dates: 'may-2015',
    description: 'This is the coffee shop  ',
    images: ['images/shop.jpg'],
  }, ]
};
projects.display = function() {
  projects.projects.forEach(function(projects) {
    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.title);
    var formattedDates = HTMLprojectDates.replace('%data%', projects.dates);
    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.description);
    var formattedImage = HTMLprojectImage.replace('%data%', projects.images);
    $('#projects').append(HTMLprojectStart);
    $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);
    $('.project-entry:last').append(formattedImage);
  });
};
projects.display();
$('#mapDiv').append(googleMap);
