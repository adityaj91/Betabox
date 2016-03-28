angular.module('betaBox.services', [])

.service('LoginService', function($q) {
  return {
    loginUser: function(name, pw) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      if (name.toLowerCase() == 'test' && pw.toLowerCase() == 'test') {
        deferred.resolve('Welcome ' + name + '!');
      } else {
        deferred.reject('Wrong credentials.');
      }
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }
})

.factory('Prototypes', function() {
  var selectedProductName = "";

  // Some fake testing data
  var prototype = [
        {product: { name: "The Barisieur 1", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate: "May 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 1", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate: "May 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 2", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate: "Jun 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 2", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate: "Jun 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 3", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate: "Jul 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 3", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate: "Jul 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 4", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate: "Aug 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 4", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate: "Aug 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 5", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate: "Sep 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 5", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate: "Sep 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 6", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate: "Oct 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 6", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate: "Oct 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 7", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate: "Nov 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 7", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate: "Nov 1, 2015"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 8", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate: "Jan 1, 2016"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 8", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate:  "Jan 1, 2016"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 9", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate:  "Feb 1, 2016"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 9", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate:  "Feb 1, 2016"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}},
        
        {product: { name: "The Barisieur 10", 
                    logo:"http://static1.squarespace.com/static/538a1d7ae4b0458773389b55/538a1d88e4b0a339fd22804f/563bd191e4b0685e3ac790e3/1446760884817/DN7B3910.JPG?format=1500w", 
                    pics:["./img/The Barisieur/DN7B3910.JPG", "./img/The Barisieur/Bedside+2+barid.jpg", "./img/The Barisieur/IMG_0429.jpg", "./img/The Barisieur/Websubmission+2+.jpg"] , 
                    shortDesc: "Alarm Clock And Coffee Maker", 
                    longDesc: "The Barisieur is an alarm clock and coffee brewer. It eases the user into the day with the subtle movement of stainless steel ballbearings that boil "
                    +"the water through induction heating, accompanied by the smell of freshly brewed coffee. It encourages a ritual before going to sleep, signalling to the body and "
                    +"mind that it is time to unwind and relax. Living slow even when times are fast.", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/", 
                    distrbutionDate:  "Mar 1, 2016"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "Josh Renouf Design", 
                    logo: "./img/The Barisieur/1516259_1448405478777540_1378550841_a.jpg", 
                    description: "British designer with a tenacious attitude for innovation", 
                    website: "http://www.joshrenoufdesign.com/" , 
                    facebook: "https://www.facebook.com/barisieur", 
                    twitter: "https://twitter.com/Renouf28", 
                    instegram: "https://www.instagram.com/joshrenouf/"}},
        
        {product: { name: "The Golden Goose Egg Scrambler 10", 
                    logo:"https://s3.amazonaws.com/images1.vat19.com/golden-goose/golden-goose.jpg", 
                    pics:["./img/The Golden Goose Egg Scrambler/golden-goose.jpg", "./img/The Golden Goose Egg Scrambler/grid-cell-21963-1418321989-38.jpg"] , 
                    shortDesc: "Scramble eggs without breaking the shell", 
                    longDesc: "Have you ever enjoyed a scrambled hard-boiled egg? Trust us, you want to. Take the Golden Goose Egg Scrambler for a spin and serve up a perfectly scrambled "
                    +"egg — without cracking it open! This ingenious device lets you scramble the egg from within its own shell.To create the flawless “Golden Goose” scramble, place a raw egg in the "
                    +"elastic insert and secure the two sides with the locking ring. Then just wind the nylon cords and pull on the integrated handles to use centrifugal force to scramble the egg.The "
                    +"locking ring makes sure the egg isn’t going anywhere, while the dishwasher-safe inserts cradle the egg and keep it whole while it scrambles. Within seconds, you’ll create a beautiful "
                    +"golden egg you can crack open or boil.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/", 
                    distrbutionDate:  "Mar 1, 2016"}, 
        user: { rating: 0, 
                duration: 0, 
                facebookShare: false, 
                twitterShare: false, 
                instgramShare: false}, 
        company: {  name: "VAT19", 
                    logo: "./img/The Golden Goose Egg Scrambler/-BAObucy_400x400.png", 
                    description: "Curiously awesome gifts and Products.", 
                    website: "https://www.vat19.com/item/the-golden-goose-egg-scrambler" , 
                    facebook: "https://www.facebook.com/vat19", 
                    twitter: "https://twitter.com/vat19", 
                    instegram: "https://www.instagram.com/vat19/"}}
      ];

    var homeViewList = prototype;
    var archiveViewList = prototype;

  return {
    all: function() {
      return prototype;
    },
    remove: function(product) {
      prototype.splice(prototype.indexOf(product), 1);
    },
    updateProductRating: function(product, rating) {
      for (var i = 0; i < prototype.length; i++) {
        if (prototype[i].product.name == product) {
          prototype[i].user.rating = rating;
          return;
        }
      }
    },
    getMonthStock: function() {
      var currentDate = new Date();
      var monthlyPrototype = [];
      for (var i = 0; i < prototype.length; i++) {
        var productDate = new Date(prototype[i].product.distrbutionDate);
        if (productDate.getMonth() == (currentDate.getMonth())) {
          monthlyPrototype.push(prototype[i]);
        }
      }
      return monthlyPrototype;
    },
    getCompaniesList: function() {
      var companiesList = [];
      for (var i = 0; i < prototype.length; i++) {
        if (companiesList.indexOf(prototype[i].company.name) == -1) {
          companiesList.push(prototype[i].company.name);
        }
      }
      return companiesList;
    },
    updateViewList: function(state, sort, ascendingOrder, companyFilter, rateFilter, distrbutionDateFilter, catagoryFilter) {
      var viewList = prototype.slice();
      var lastIndex = viewList.length -1;
      for (var i = lastIndex; i >= 0; i--) {
        if(companyFilter != "All" && companyFilter != "") {
            if (viewList[i].company.name != companyFilter) {
              viewList.splice(i, 1);
              continue;
            }
        }

        if (rateFilter != "All" && rateFilter != "") {
            var productRating = viewList[i].user.rating;
          if(rateFilter == "Not Rated") {
            if(productRating > 0) {
                viewList.splice(i, 1);
                continue;
            }
          } else {
            if(rateFilter == "Happy") {
                if(productRating != 1) {
                    viewList.splice(i, 1);
                    continue;
                }
            } else if(rateFilter == "Neutral") {
                if(productRating != 2) {
                    viewList.splice(i, 1);
                    continue;
                }
            } else if(rateFilter == "Sad") {
                if(productRating != 3) {
                    viewList.splice(i, 1);
                    continue;
                }
            } else {
                if(productRating == 0) {
                    viewList.splice(i, 1);
                    continue;
                }
            }
          }
        }

        if(distrbutionDateFilter != "All" && distrbutionDateFilter != "") {
            var currentDate = new Date();
            var productDate = new Date(viewList[i].product.distrbutionDate);
            
            if(currentDate.getFullYear() != productDate.getFullYear()){
                viewList.splice(i, 1);
                continue;
            } else {
                if(distrbutionDateFilter == "6 months ago") {
                    if(currentDate.getMonth() - productDate.getMonth() > 5){
                        viewList.splice(i, 1);
                        continue;
                    }
                } else if(distrbutionDateFilter == "3 months ago") {
                    if(currentDate.getMonth() - productDate.getMonth() > 2){
                        viewList.splice(i, 1);
                        continue;
                    }
                }  else if(distrbutionDateFilter == "Last Month") {
                    if(currentDate.getMonth() - productDate.getMonth() > 0){
                        viewList.splice(i, 1);
                        continue;
                    }
                }  
            }
        }
      }
      if(sort == "Product") {
        viewList.sort(function(a, b){
            if(a.product.name < b.product.name) return (ascendingOrder ? -1:1);
            if(a.product.name > b.product.name) return (ascendingOrder ? 1:-1);
            return 0;
        })
      } else if(sort == "Company") {
        viewList.sort(function(a, b){
            if(a.company.name < b.company.name) return (ascendingOrder ? -1:1);
            if(a.company.name > b.company.name) return (ascendingOrder ? 1:-1);
            return 0;
        })
      } else if(sort == "Date") {
        viewList.sort(function(a, b){
            var aDate = new Date(a.product.distrbutionDate);
            var bDate = new Date(b.product.distrbutionDate);
            if(aDate.getTime() < bDate.getTime()) return (ascendingOrder ? -1:1);
            if(aDate.getTime() > bDate.getTime()) return (ascendingOrder ? 1:-1);
            return 0;
        })
      } else if(sort == "Rate") {
        viewList.sort(function(a, b){
            if(a.user.rating < b.user.rating) return (ascendingOrder ? -1:1);
            if(a.user.rating > b.user.rating) return (ascendingOrder ? 1:-1);
            return 0;
        })
      }
      if(state == "tabs.home") {
        homeViewList = viewList;
      } else if(state == "tabs.archive") {
        archiveViewList = viewList;
      } else {
        return false;
      }
      return true;
    },
    getViewList: function(state) {
      if(state == "tabs.home") {
        return homeViewList;
      } else {
        return archiveViewList;
      }
    },
    getCompanyProducts: function(companyName) {
      var productsList = [];
      for (var i = 0; i < prototype.length; i++) {
        if (prototype[i].company.name == companyName) {
          productsList.push(prototype[i].product);
        }
      }
      return productsList;
    },
    get: function(productName) {
      for (var i = 0; i < prototype.length; i++) {
        if (prototype[i].product.name == productName) {
          return prototype[i];
        }
      }
      return null;
    }/*,
    setSelectedProduct: function(productName) {
      selectedProductName = productName;
    },
    getSelectedProduct: function() {
      return selectedProductName;
    }*/
  };
});