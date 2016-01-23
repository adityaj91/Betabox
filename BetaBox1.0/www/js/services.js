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
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 11}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 11}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 11}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 11}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 11}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 11}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 12}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 12}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 12}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 12}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 12}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 12}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 12}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 1}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 1}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 1}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 1}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 1}, 
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
        
        {product: { name: "The Barisieur", 
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
                    distrbutionMonth: 1}, 
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
        
        {product: { name: "The Golden Goose Egg Scrambler", 
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
                    distrbutionMonth: 1}, 
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

  return {
    all: function() {
      return prototype;
    },
    remove: function(product) {
      prototype.splice(prototype.indexOf(product), 1);
    },
    getMonthStock: function() {
      var date = new Date();
      var monthlyPrototype = [];
      for (var i = 0; i < prototype.length; i++) {
        if (prototype[i].product.distrbutionMonth == (date.getMonth()+1)) {
          monthlyPrototype.push(prototype[i]);
        }
      }
      return monthlyPrototype;
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