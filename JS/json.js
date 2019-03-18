var ourMusic = [
	{
		"artist"	    : "Dark Punk",
		"title" 	    : "Homework",
		"release_year"  : 1997,
		"formats"		: [
			"CD",
			"Cassette",
			"LP"
		],
		"gold"			： true
	}
];
//这是一个对象数组，并且对象有各种关于专辑的详细信息。它也有一个嵌套的formats的数组。附加专辑记录可以被添加到数组的最上层

//嵌套的json对象
var ourStorage = {
	"desk" : {
		"drawer" : "stapler",
	},
	"cabinet" : {
		"top drawer" : {
			"folder1" : "a file",
			"folder2" : "secrets"
		},
		"bottom drawer" : "soda"
	}
}
ourStorage.cabinet["top drawer"].folder1;  //a file
ourStorage.desk.drawer; //stapler

//检索json对象
var myStorage = {
	"car" : {
		"inside" : {
			"glove box" : "maps",
			"passenger seat" : "crumbs"
		},
		"outside" : {
			"trunk" : "jack"
		}
	}
};
var gloveBoxContents = myStorage.car.inside["glove box"];