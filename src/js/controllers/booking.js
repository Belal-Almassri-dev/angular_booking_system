myApp.controller('BookingController', function($scope, $http, $filter){
	

	// Get data and assign in to variables
	$http.get('js/data/users.json').success(function (data){
		$scope.users = data;
	});
	$http.get('js/data/gbs.json').success(function (data){
		$scope.gbs = data;
	});

	$http.get('js/data/doctors.json').success(function (data){
		$scope.doctors = data;
	});

	$http.get('js/data/slots.json').success(function (data){
		$scope.slots = data;
	});

	$http.get('js/data/appointments.json').success(function (data){
		$scope.appointments = data;
	});



	// Book Appointment
    $scope.bookAppointment = function(){

    	if($scope.selectedDoctor == undefined || $scope.selectedSlot == undefined){
    		alert("Please make select all required fields!");

    	}
    	else {
	    	//Mark the slot as booked
			for (var i = 0; i < $scope.slots.length; i++) {

	             if($scope.slots[i].id == $scope.selectedSlot) {
					 $scope.slots[i].booked =  "1";
					  break;
	             }

			}

	    	// Create appointment
			$scope.appointments.push({
				id:getID(),
				slotID:$scope.selectedSlot,
				userID:$scope.selectedDoctor
			});


			// confirmations
			//var selectedSlot = $scope.selectedSlot;
			//alert("Your slot is booked!" + selectedSlot);
			//Send email to the user email

    	}




    	function getID() {
			var appointmentsObj = $scope.appointments;
			if($scope.generateID(appointmentsObj) != false) {
				return $scope.generateID(appointmentsObj);
			}
			else {
				getID();
			}
    	}


    
    },
	

	$scope.generateID = function (obj) {
		var generateIDVal = Math.floor(Math.random() * (100000)) + 0;
		var appointmentsObj = $scope.appointments;

		if($scope.isIDUnique(generateIDVal, appointmentsObj) != true) {
			return generateIDVal;
		}
		else {
			return false;
		}

	}


   $scope.isIDUnique = function (num, obj) {
	   
       		for (var i = 0; i < obj.length; i++) {

             if(obj.id == num) {

             	console.log("true");
				 return true;
				  break;
             }

		}
	   
    },


	$scope.deleteAppoinmtent = function (userId) {
	}
	
	
	$scope.getTimeStamp = function() {
		
			var date = new Date();
			return $filter('date')(new Date(),'MM dd yyyy - HH:mm:ss','UTC/GMT');

	}
        

    
});

