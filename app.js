(function() {
	var app = angular.module("profileBrowser", []);

	app.controller('ProfileController', function() {
    	this.tab = "5";
		this.profiles = data;

		this.profiles.sort(function(a,b) {			
			var nameA=a.firstName.toLowerCase(), nameB=b.firstName.toLowerCase();
			 if (nameA < nameB)
			  return -1;
			 if (nameA > nameB)
			  return 1;
			 return 0;
			}
		);
		var current = 'Fox';

		this.setTab = function(newValue){
	      this.tab = newValue;
	    };

	    this.isSet = function(tabName){
	      return this.tab === tabName;
	    };
	});
}());
