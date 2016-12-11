var model = {

  bio: {
    'name': '朱泽伟', 
    'role': 'Front End Web Developer',
    'contacts': {
      'mobile': '13761693807',
      'email': 'zhuzewei7@163.com',
      'github': 'shannon1993',
      'location': 'Suzhou, China'
    },
    'welcomeMessage': '欢迎查看我的简历，我的名字叫朱泽伟。有一年的开发经验，很喜欢Web前端，熟练掌握JS以及一些基本的JS框架，网站交互设计，MVVM模式，网站渲染优化等',
    'skills': [
      'HTML5', 'CSS3', 'JS', 'jQuery', 'knockout.js', 'backbone.js', 'Bootstrap', 'MVC', 'MVVM' , 'Responsive Design', 'Web Optimization', 'Ajax', 'Json', 'gulp&grunt', 'git&github', 'PhotoShop', ' ', ' '
    ],
    'biopic': 'images/me.jpg'
  },

  work: {
    'jobs': [{
    'employer': '上水集团',
    'title': '前端工程师',
    'location': 'Shanghai, China',
    'dates': '11/15 - 11/16',
    'description': '负责公司前端开发相关工作'
    }]
  }, 

  education: {
    'schools': [{
      'name': '扬州大学',
      'location': 'Yangzhou, China',
      'degree': ' ',
      'dates': '2011 - 2015',
      'url': '',
      'majors': [' ']
    }],
    'onlineCourses': [{
      'title': 'Google前端纳米学位',
      'school': 'Udacity',
      'dates': 'Summer 2016',
      'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }]
  }, 
  
  projects: {
    'projects': [
    {
      'title': 'Online Resume',
      'dates': ' ',
      'description': 'My online resume (Need VPN to show google map) <br> Github Link: <a href="https://shannon1993.github.io/online-resume/">https://shannon1993.github.io/online-resume/<a/>',
      'images': ['images/P3.png']
    },
    {
      'title': 'Map Application',
      'dates': ' ',
      'description': 'A responsive GoogleMap Application (Need VPN to show google map) <br> Github Link: <a href="https://shannon1993.github.io/map-project/">https://shannon1993.github.io/map-project/<a/>',
      'images': ['images/P2.png']
    }, {
      'title': 'Arcadia Game',
      'dates': ' ',
      'description': 'Small JavaScript Game <br> Github Link: <a href="https://shannon1993.github.io/arcadia-game/">https://shannon1993.github.io/arcadia-game/<a/>',
      'images': ['images/P1.png']
    }]
  },

  
  living: {
    'places': [{
      'location': 'Suzhou, China',
    }, {
      'location': 'Shanghai, China',
    }, {
      'location': 'Changzhou, China',
    }]
  }

};


var control = {

  displayBio : function() {
    var formattedName = HTMLheaderName.replace('%data%', model.bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', model.bio.role);
    $('.header-top').prepend(formattedName + formattedRole); 
    var formattedBioPic = HTMLbioPic.replace('%data%', model.bio.biopic);
    $('.middle-image').append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', model.bio.welcomeMessage);
    $('.middle-text').append(formattedWelcomeMsg);
    var formattedMobile = HTMLmobile.replace('%data%', model.bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', model.bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', model.bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', model.bio.contacts.location);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
    if (model.bio.skills.length > 0) {
      $('#skills').append(HTMLskillsStart);
      $('#skills').append(HTMLskillsul);
      for (var i=0; i < 16; i++) {
      	if(i<9){
        var formattedSkill = HTMLskills.replace('%data%', model.bio.skills[i]);
        $('.skills').append(formattedSkill);      		
      	}
      	else{
        var formattedSkill1 = HTMLskills.replace('%data%', model.bio.skills[i]);
        $('.skills1').append(formattedSkill1);
      	}
      }
    }
  },
  displayWork : function() {
    $('.work-title').append('<hr class="work-hr">'); 
    model.work.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%',job.employer);
      var formattedTitle = HTMLworkTitle.replace('%data%',job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedLocation = HTMLworkLocation.replace('%data%',job.location);
      var formattedDates = HTMLworkDates.replace('%data%',job.dates);  
      var formattedDescription = HTMLworkDescription.replace('%data%',job.description);      
      $('.work-entry:last').append(formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription);
    });
  },

  displayProjects:  function() {
    $('.projects-title').append('<hr class="projects-hr">');
    model.projects.projects.forEach(function(project) {
      $('#projects').append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace('%data%',project.title);
      var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%',project.description);
      $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);

      for (var i=0; i < project.images.length; i++) {
        var formattedImage = HTMLprojectImage.replace('%data%',project.images[i]);      
        $('.project-entry:last').append(formattedImage);
      }
    });
  },

  displayEducation : function() {
    $('.education-title').append('<hr class="education-hr">');
    model.education.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);   

      var formattedName = HTMLschoolName.replace('%data%',school.name);
      var formattedDates = HTMLschoolDates.replace('%data%',school.dates);
      var formattedLocation = HTMLschoolLocation.replace('%data%',school.location);
      var formattedDegree = HTMLschoolDegree.replace('%data%',school.degree);
      $('.education-entry:last').append(formattedName + formattedDates + formattedLocation + formattedDegree);

      for (var i=0; i < school.majors.length; i++) {
        var formattedMajor = HTMLschoolMajor.replace('%data%',school.majors[i]);            
        $('.education-entry:last').append(formattedMajor);
      }
    });


    $('#education').append(HTMLonlineClasses);
      model.education.onlineCourses.forEach(function(onlineCourse) {
      $('#education').append(HTMLschoolStart);    

      var formattedTitle = HTMLonlineTitle.replace('%data%',onlineCourse.title);
      var formattedSchool = HTMLonlineSchool.replace('%data%',onlineCourse.school);
      var formattedDates = HTMLonlineDates.replace('%data%',onlineCourse.dates);
      var formattedUrl = HTMLonlineURL.replace('%data%',onlineCourse.url);    
      $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
      });
      $('.map-title').append('<hr class="map-hr">');
  }
}; 


var view = (function(){
  control.displayBio();
  control.displayWork();
  control.displayProjects();
  control.displayEducation();
  $('#mapDiv').append(googleMap);
})(); 

