var cronJob = require('cron').CronJob;
var time = require('time');
var Twit = require('twit');

var T = new Twit({
    consumer_key:         'consumer key'
  , consumer_secret:      'consumer secret'
  , access_token:         'user access token'
  , access_token_secret:  'user token secret'
});
function update_to(text){
	T.post('statuses/update', { status: text }, function(err, reply) {
	  console.log("Update... [OK]");
	});
}
console.log("=============================== \npedox all rights revesed \n=============================== \nScript Gajebo buat tuiter biar bangun pagi");
console.log("Script sudah bekerja dan akan auto tweet setiap beberapa jam di bulan puasa");
console.log("SELAMAT BERPUASA !\n \n -------------------------------------");
var fs = require('fs');

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}
function get_rand(){
	fs.readFile(__dirname + '/text', function (err, data) {
	  if (err) throw err;
	  var det = data.toString();
		get(det);

	});

}

function get(dat){
    var hasil = dat.split("\n");

	var sahur_job = new cronJob('00 00 03 * * *', function(){
		var teks = sahur(dat);
		//.. do sahur
		update_to(teks);
		var ct = new time.Date();
		ct.setTimezone("Asia/Jakarta");
		console.log("[Sahur]["+ct+"] : "+teks+" [Pending]");
	}, null, false, "Asia/Jakarta");

	var imsak_job = new cronJob('25 33 04 * * *', function(){
		var teks = imsak(dat);
		//.. do imsak
		update_to(teks);
		var ct = new time.Date();
		ct.setTimezone("Asia/Jakarta");
		console.log("[Imsak]["+ct+"] : "+teks+" [Pending]");
	}, null, false, "Asia/Jakarta");

	var magrib_job = new cronJob('00 11 18 * * *', function(){
		var teks = magrib(dat);
		//.. do buka
		update_to(teks);
		var ct = new time.Date();
		ct.setTimezone("Asia/Jakarta");
		console.log("[Magrib]["+ct+"] : "+teks+" [Pending]");
	}, null, false, "Asia/Jakarta");

	sahur_job.start();
	imsak_job.start();
	magrib_job.start();

	new cronJob(new Date('19 Aug 2012 00:00:00'), function(){
	    console.log('SELAMAT IDUL FITRI 1433H Mohon maaf lahir dan batin');
	    job.stop();
	}, null, true, "Asia/Jakarta");
}

function sahur(file){
	var arr = file.split("==sahur");
	var err = arr[1].split("\n\n");
	var semua = err[0].split("\n");
	Shuffle(semua);
	return semua[0];
}

function imsak(file){
	var arr = file.split("==imsak");
	var err = arr[1].split("\n\n");
	var semua = err[0].split("\n");
	Shuffle(semua);
	return semua[0];
}

function magrib(file){
	var arr = file.split("==magrib");
	var err = arr[1].split("\n\n");
	var semua = err[0].split("\n");
	Shuffle(semua);
	return semua[0];
}

var ct = new time.Date();
ct.setTimezone("Asia/Jakarta");
var cd = ct.getMonth() + 1;
var dy = ct.getDate();
var yr = ct.getFullYear();
console.log("["+ct+"] Started Service");

get_rand();

