function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  if(passengers){
  	this.passengers = passengers
  } else {
  	this.passengers = []
	  }};
  // cleaner way to write code above//
  //this.passengers = passengers || [];
  // };	

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor
};


Car.prototype.start = function(start){
	this.running = true
};

Car.prototype.off = function(off){
	this.running = false
};

Car.prototype.driveTo = function(destination){
	if(this.running === true){
		return true;
		console.log('driving to' + destination);
		}
		return false;
};

Car.prototype.park = function(){
	if(this.running === false){
		console.log("parked!!");
		return true;
	}
		return false;
};

Car.prototype.pickUp = function(newPassenger){
	if(this.running === true && this.seats > (this.passengers.length + 1)){
		console.log("driving to pickup" + newPassenger);
		this.passengers.push(newPassenger);
		return true;
	}
		return false;
};

Car.prototype.dropOff = function(name){
	var check = this.passengers.indexOf(name);
	if( check !== -1 && this.running === true){
		this.passengers.splice(check,1);
		console.log("driving to drop off" + name);
		return true;
	}
		return false;

};

Car.prototype.passengerCount =function(){
	return this.passengers.length;
}





// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;