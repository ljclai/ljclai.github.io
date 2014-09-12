//setup stuff

var sausages = 0;
var buns = 0;
var sauces = 0;
var hotdogs = 0;
var customers = 0;
var buildings = 0;
var building20 = 1;
var money = 0;
var sausage_click = 1;
var bun_click = 1;
var sauce_click = 1;
var hotdog_click = 1;
var butchers = 0;
var butcher_cost = 20;
var bakeries = 0;
var bakery_cost = 20;
var sauceries = 0;
var saucery_cost = 20;
var hotdog_stands = 0;
var hotdog_stand_cost = 20;
var meat_factories = 0;
var meat_factory_cost = 75;
var bread_machines = 0;
var bread_machine_cost = 75;
var vats = 0;
var vat_cost = 75;
var robot_arms = 0;
var robot_arm_cost = 75;
var test = 0; //test
var u1 = 1;
var u2 = 1;
var u3 = 1;
var u4 = 1;
var storage_support_yes = "The game is able to save in your browser";
var storage_support_no = "The game is unable to save in your browser, consider updating";

function pageSetup(){
	if(typeof(Storage) !== "undefined") {
		document.getElementById("local_storage_support").innerHTML = storage_support_yes;
		loadSave();
	} else {
		document.getElementById("Q1").innerHTML = storage_support_no;
	}
};

//click to get stuff

function getSausages(){
	sausages = sausages + sausage_click;
	document.getElementById("sausages").innerHTML = sausages;
};

function getBuns(){
	buns = buns + bun_click;
	document.getElementById("buns").innerHTML = buns;
};

function getSauces(){
	sauces = sauces + sauce_click;
	document.getElementById("sauces").innerHTML = sauces;
};

function getHotdog(){
	if(sausages >= hotdog_click){
		if(buns >= hotdog_click){
			if(sauces >= hotdog_click){
				sausages = sausages - hotdog_click;
				document.getElementById("sausages").innerHTML = sausages;
				buns = buns - hotdog_click;
				document.getElementById("buns").innerHTML = buns;
				sauces = sauces - hotdog_click;
				document.getElementById("sauces").innerHTML = sauces;
				hotdogs = hotdogs + hotdog_click;
				document.getElementById("hotdogs").innerHTML = hotdogs;
			};
		};
	};
};

function getButcher(){
	butcher_cost = Math.floor(10 * Math.pow(1.05,butchers))
	document.getElementById("butcher_cost").innerHTML = butcher_cost;
	if(money >= butcher_cost){
		money = money - butcher_cost;
		buildings = buildings + 1;
		document.getElementById("money").innerHTML = money;
		butchers = butchers + 1;
		document.getElementById("butchers").innerHTML = butchers;
		document.getElementById("butcher_cost").innerHTML = butcher_cost;
	};
};

function getBakery(){
	bakery_cost = Math.floor(10 * Math.pow(1.05,bakeries));
	document.getElementById("bakery_cost").innerHTML = bakery_cost;
	if(money >= bakery_cost){
		money = money - bakery_cost;
		buildings = buildings + 1;
		document.getElementById("money").innerHTML = money;
		bakeries = bakeries + 1;
		document.getElementById("bakeries").innerHTML = bakeries;
		document.getElementById("bakery_cost").innerHTML = bakery_cost;
	};
}

function getSaucery(){
	saucery_cost = Math.floor(10 * Math.pow(1.05,sauceries));
	document.getElementById("saucery_cost").innerHTML = saucery_cost;
	if(money >= saucery_cost){
		money = money - saucery_cost;
		buildings = buildings + 1;
		document.getElementById("money").innerHTML = money;
		sauceries = sauceries + 1;
		document.getElementById("sauceries").innerHTML = sauceries;
		document.getElementById("saucery_cost").innerHTML = saucery_cost;
	};
}

function getHotdogStand(){
	hotdog_stand_cost = Math.floor(10 * Math.pow(1.05,hotdog_stands));
	document.getElementById("hotdog_stand_cost").innerHTML = hotdog_stand_cost;
	if(money >= hotdog_stand_cost){
		money = money - hotdog_stand_cost;
		buildings = buildings + 1;
		document.getElementById("money").innerHTML = money;
		hotdog_stands = hotdog_stands + 1;
		document.getElementById("hotdog_stands").innerHTML = hotdog_stands;
		document.getElementById("hotdog_stand_cost").innerHTML = hotdog_stand_cost;
	};
}

function getMeatFactory(){
	meat_factory_cost = Math.floor(10 * Math.pow(1.05,meat_factories)) + 75;
	document.getElementById("meat_factory_cost").innerHTML = meat_factory_cost;
	if(money >= meat_factory_cost){
		money = money - meat_factory_cost;
		building = buildings + 1;
		document.getElementById("money").innerHTML = money;
		meat_factories = meat_factories + 1;
		document.getElementById("meat_factories").innerHTML = meat_factories;
		document.getElementById("meat_factory_cost").innerHTML = meat_factory_cost;
	};
};

function getBreadMachine(){
	bread_machine_cost = Math.floor(10 * Math.pow(1.05, bread_machines)) + 75;
	document.getElementById("bread_machine_cost").innerHTML = bread_machine_cost;
	if(money >= bread_machine_cost){
		money = money - bread_machine_cost;
		buildings = buildings + 1;
		document.getElementById("money").innerHTML = money;
		bread_machines = bread_machines + 1;
		document.getElementById("bread_machines").innerHTML = bread_machines;
		document.getElementById("bread_machine_cost").innerHTML = bread_machine_cost;
	};
}

function getVat(){
	vat_cost = Math.floor(10 * Math.pow(1.05, vats)) + 75;
	document.getElementById("vat_cost").innerHTML = vat_cost;
	if(money >= vat_cost){
		money = money - vat_cost;
		buildings = buildings - vat_cost;
		document.getElementById("money").innerHTML = money;
		vats = vats + 1;
		document.getElementById("vats").innerHTML = vats;
		document.getElementById("vat_cost").innerHTML = vat_cost;
	};
}

function getRobotArm(){
	robot_arm_cost = Math.floor(10 * Math.pow(1.05, robot_arms)) + 75;
	document.getElementById("robot_arm_cost").innerHTML = robot_arm_cost;
	if(money >= robot_arm_cost){
		money = money - robot_arm_cost;
		buildings = buildings + 1;
		document.getElementById("money").innerHTML = money;
		robot_arms = robot_arms + 1;
		document.getElementById("robot_arms").innerHTML = robot_arms;
		document.getElementById("robot_arm_cost").innerHTML = robot_arm_cost;
	};
}

//buildings

function butcher(){
	sausages = sausages + butchers;
};

function bakery(){
	buns = buns + bakeries;
}

function saucer(){
	sauces = sauces + sauceries;
};

function meat_factory(){
	sausages = sausages + 2 * meat_factories;
};

function bread_machine(){
	buns = buns + 2 * bread_machines;
}

function vat(){
	sauces = sauces + 2 * vats;
}

function hotdoger(){
	if(sausages >= hotdog_stands){
		if(buns >= hotdog_stands){
			if(sauces >= hotdog_stands){
				sausages = sausages - hotdog_stands;
				buns = buns - hotdog_stands;
				sauces = sauces - hotdog_stands;
				hotdogs = hotdogs + hotdog_stands;
				document.getElementById("sausages").innerHTML = sausages;
				document.getElementById("buns").innerHTML = buns;
				document.getElementById("sauces").innerHTML = sauces;
				document.getElementById("hotdogs").innerHTML = hotdogs;
			};
		};
	};
};

function robot_armer(){
	if(sausages >= 2 * robot_arms){
		if(buns >= 2 * robot_arms){
			if(sauces >= 2 * robot_arms){
				sausages = sausages - 2 * robot_arms;
				buns = buns - 2 * robot_arms;
				sauces = sauces - 2 * robot_arms;
				hotdogs = hotdogs + 2 * robot_arms;
				document.getElementById("sausages").innerHTML = sausages;
				document.getElementById("buns").innerHTML = buns;
				document.getElementById("sauces").innerHTML = sauces;
				document.getElementById("hotdogs").innerHTML = hotdogs;
			};
		};
	};
}

//Customers

function customerStuff(){
	building20 = buildings + 20;
	customers = Math.floor(Math.random() * buildings) + building20;
	document.getElementById("customers").innerHTML = customers;
	if(hotdogs >= customers){
		money = money + customers;
		hotdogs = hotdogs - customers;
		document.getElementById("hotdogs").innerHTML = hotdogs;
		document.getElementById("money").innerHTML = money;
	};
};
	
window.setInterval(function(){
	customerStuff();
}, 2500);

//Upgrades

function buy_once(){
	//do for all upgrades
	if(u1 == 0){
		document.getElementById("u1").remove();
	};
	if(u2 == 0){
		document.getElementById("u2").remove();
	};
	if(u3 == 0){
		document.getElementById("u3").remove();
	};
	if(u4 == 0){
		document.getElementById("u4").remove();
	};
}

function upgrade1(){
	if(money >= 200){
		sausage_click = sausage_click + 1;
		money = money - 200;
		document.getElementById("money").innerHTML = money;
		document.getElementById("sausage_click_amount").innerHTML = sausage_click;
		document.getElementById("u1").remove();
		u1 = 0;
	};
};

function upgrade2(){
	if(money >= 200){
		bun_click = bun_click + 1;
		money = money - 200;
		document.getElementById("money").innerHTML = money;
		document.getElementById("bun_click_amount").innerHTML = bun_click;
		document.getElementById("u2").remove();
		u2 = 0;
	};
};

function upgrade3(){
	if(money >= 200){
		sauce_click = sauce_click + 1;
		money = money - 200;
		document.getElementById("money").innerHTML = money;
		document.getElementById("sauce_click_amount").innerHTML = sauce_click;
		document.getElementById("u3").remove();
		u3 = 0;
	};
};

function upgrade4(){
	if(money >= 200){
		hotdog_click = hotdog_click + 1;
		money = money - 200;
		document.getElementById("money").innerHTML = money;
		document.getElementById("hotdog_click_amount").innerHTML = hotdog_click;
		document.getElementById("u4").remove();
		u4 = 0;
	};
};

//saving stuff

function loadSave(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	//copy out for each variable being saved
	if (typeof savegame.sausages !== "undefined") sausages = savegame.sausages;
	if (typeof savegame.buns !== "undefined") buns = savegame.buns;
	if (typeof savegame.sauces !== "undefined") sauces = savegame.sauces;
	if (typeof savegame.hotdogs !== "undefined") hotdogs = savegame.hotdogs;
	if (typeof savegame.buildings !== "undefined") buildings = savegame.buildings;
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.butchers !== "undefined") butchers = savegame.butchers;
	if (typeof savegame.butcher_cost !== "undefined") butcher_cost = savegame.butcher_cost;
	if (typeof savegame.bakeries !== "undefined") bakeries = savegame.bakeries;
	if (typeof savegame.bakery_cost !== "undefined") bakery_cost = savegame.bakery_cost;
	if (typeof savegame.sauceries !== "undefined") sauceries = savegame.sauceries;
	if (typeof savegame.saucery_cost !== "undefined") saucery_cost = savegame.saucery_cost;
	if (typeof savegame.hotdog_stands !== "undefined") hotdog_stands = savegame.hotdog_stands;
	if (typeof savegame.hotdog_stand_cost !== "undefined") hotdog_stand_cost = savegame.hotdog_stand_cost;
	if (typeof savegame.meat_factories !== "undefined") meat_factories = savegame.meat_factories;
	if (typeof savegame.meat_factory_cost !== "undefined") meat_factory_cost = savegame.meat_factory_cost;
	if (typeof savegame.bread_machines !== "undefined") bread_machines = savegame.bread_machines;
	if (typeof savegame.bread_machine_cost !== "undefined") bread_machine_cost = savegame.bread_machine_cost;
	if (typeof savegame.vats !== "undefined") vats = savegame.vats;
	if (typeof savegame.vat_cost !== "undefined") vat_cost = savegame.vat_cost;
	if (typeof savegame.robot_arms !== "undefined") robot_arms = savegame.robot_arms;
	if (typeof savegame.robot_arm_cost !== "undefined") robot_arm_cost = savegame.robot_arm_cost;
	if (typeof savegame.sausage_click !== "undefined") sausage_click = savegame.sausage_click;
	if (typeof savegame.bun_click !== "undefined") bun_click = savegame.bun_click;
	if (typeof savegame.sauce_click !== "undefined") sauce_click = savegame.sauce_click;
	if (typeof savegame.hotdog_click !== "undefined") hotdog_click = savegame.hotdog_click;
	if (typeof savegame.u1 !== "undefined") u1 = savegame.u1;
	if (typeof savegame.u2 !== "undefined") u2 = savegame.u2;
	if (typeof savegame.u3 !== "undefined") u3 = savegame.u3;
	if (typeof savegame.u4 !== "undefined") u4 = savegame.u4;
	//Update the values, copy out for each saved variable
	document.getElementById("sausages").innerHTML = sausages;
	document.getElementById("buns").innerHTML = buns;
	document.getElementById("sauces").innerHTML = sauces;
	document.getElementById("hotdogs").innerHTML = hotdogs;
	document.getElementById("money").innerHTML = money;
	document.getElementById("butchers").innerHTML = butchers;
	document.getElementById("butcher_cost").innerHTML = butcher_cost;
	document.getElementById("bakeries").innerHTML = bakeries;
	document.getElementById("bakery_cost").innerHTML = bakery_cost;
	document.getElementById("sauceries").innerHTML = sauceries;
	document.getElementById("saucery_cost").innerHTML = saucery_cost;
	document.getElementById("hotdog_stands").innerHTML = hotdog_stands;
	document.getElementById("hotdog_stand_cost").innerHTML = hotdog_stand_cost;
	document.getElementById("meat_factories").innerHTML = meat_factories;
	document.getElementById("meat_factory_cost").innerHTML = meat_factory_cost;
	document.getElementById("bread_machines").innerHTML = bread_machines;
	document.getElementById("bread_machine_cost").innerHTML = bread_machine_cost;
	document.getElementById("vats").innerHTML = vats;
	document.getElementById("vat_cost").innerHTML = vat_cost;
	document.getElementById("robot_arms").innerHTML = robot_arms;
	document.getElementById("robot_arm_cost").innerHTML = robot_arm_cost;
	document.getElementById("sausage_click_amount").innerHTML = sausage_click;
	document.getElementById("bun_click_amount").innerHTML = bun_click;
	document.getElementById("sauce_click_amount").innerHTML = sauce_click;
	document.getElementById("hotdog_click_amount").innerHTML = hotdog_click;
	buy_once();
	alert("Loading...");
};

function saveGame(){
	var save = {
		sausages: sausages,
		buns: buns,
		sauces: sauces,
		hotdogs: hotdogs,
		buildings: buildings,
		money: money,
		butchers: butchers,
		butcher_cost: butcher_cost,
		bakeries: bakeries,
		bakery_cost: bakery_cost,
		sauceries: sauceries,
		saucery_cost: saucery_cost,
		hotdog_stands: hotdog_stands,
		botdog_stand_cost: hotdog_stand_cost,
		meat_factories: meat_factories,
		meat_factory_cost: meat_factory_cost,
		bread_machines: bread_machines,
		bread_machine_cost: bread_machine_cost,
		vats: vats,
		vat_cost: vat_cost,
		robot_arms: robot_arms,
		robot_arm_cost: robot_arm_cost,
		sausage_click: sausage_click,
		bun_click: bun_click,
		sauce_click: sauce_click,
		hotdog_click: hotdog_click,
		u1: u1,
		u2: u2,
		u3: u3,
		u4: u4,
	}
	localStorage.setItem("save",JSON.stringify(save)); 
	alert("Saving...");
};

function autoSave(){
	var save = {
		sausages: sausages,
		buns: buns,
		sauces: sauces,
		hotdogs: hotdogs,
		buildings: buildings,
		money: money,
		butchers: butchers,
		butcher_cost: butcher_cost,
		bakeries: bakeries,
		bakery_cost: bakery_cost,
		sauceries: sauceries,
		saucery_cost: saucery_cost,
		hotdog_stands: hotdog_stands,
		botdog_stand_cost: hotdog_stand_cost,
		meat_factories: meat_factories,
		meat_factory_cost: meat_factory_cost,
		bread_machines: bread_machines,
		bread_machine_cost: bread_machine_cost,
		vats: vats,
		vat_cost: vat_cost,
		robot_arms: robot_arms,
		robot_arm_cost: robot_arm_cost,
		sausage_click: sausage_click,
		bun_click: bun_click,
		sauce_click: sauce_click,
		hotdog_click: hotdog_click,
		u1: u1,
		u2: u2,
		u3: u3,
		u4: u4,
	}
	localStorage.setItem("save",JSON.stringify(save)); 
};

function deleteSave(){
	localStorage.removeItem("save");
};

window.setInterval(function(){
	autoSave();
}, 60000);

//game loop

//building loop

window.setInterval(function(){
	butcher()
	bakery()
	saucer()
	hotdoger()
	meat_factory()
	bread_machine()
	vat()
	robot_armer()
	document.getElementById("hotdogs").innerHTML = hotdogs;
	document.getElementById("sauces").innerHTML = sauces;
	document.getElementById("buns").innerHTML = buns;
	document.getElementById("sausages").innerHTML = sausages;
}, 1000);
	
