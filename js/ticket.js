// var date = '2015-10-25';
// // var date = new Date();
// var movieName = 'Avengers';
// var price = 10;
// var discount = 5.5; 
// var avaliable = true;

// var movie ={
// 	date: '2015-10-25',
// 	name: 'Avengers',
// 	price: 10,
// 	avaliable: true,
// 	ticketLeft: 5,
// }

var movies = [
	{
	date: '2015-10-25',
	name: 'Avengers',
	price: 10,
	avaliable: true,
	ticketLeft: 5,
},
{
	date: '2015-10-31',
	name: 'Starwar',
	price: 12,
	avaliable: true,
	ticketLeft: 5,
},
{
	date: '2015-10-30',
	name: 'Titanic',
	price: 4,
	avaliable: false,
	ticketLeft: 0,
}
];
	
	





// console.log(date + '' + movieName); //compare === and == different 

for (var i =0; i < movies.length; i++){ //++ increment
	
	if (movies[i].avaliable || movies[i].ticketLeft >0) {
		console.log(movies[i].name);
	} else{
		console.log('not avaliable');
	}
	}

	


