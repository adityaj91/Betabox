angular.module('betaBox.controllers', ['ngCordova'])

.controller('loadingCtrl', function($scope, $state, $ionicPlatform) {
  /*$scope.loadingComplete = false;
  $ionicPlatform.ready(function() {
    $scope.loadingComplete = true;
  });*/

  $scope.loginPage = function() {
    $state.go('login');
  }
})

.controller('loginCtrl', function($scope, LoginService, $ionicPopup,$state, Prototypes) {
  $scope.data = {};

  $scope.login = function() {
    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
    Prototypes.filterAndSort('tabs.home', "None", true, "All", "All", "Last Month", "All");
    $state.go('tabs.home');
    }).error(function(data) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  }

  $scope.signup = function() {
    $state.go('signup');
  }
})

.controller('signupCtrl', function($scope, $state) {
  $scope.user = {};

  $scope.signupComplete = function() {
    $state.go('login');
  }
})

.controller('forgottenPasswordCtrl', function($scope, $ionicPopup,$state) {
  $scope.passwordRecovery= {email: "", securityAnswer: ""};

  $scope.emailPasswordRecovery = function() {
    if($scope.passwordRecovery.email.toLowerCase() == "sam@asu.edu".toLowerCase()) {
      var alertPopup = $ionicPopup.alert({
        title: 'Account Found!',
        template: 'An email was just sent to you. Please check your inbox for the recovery process.'
      });
    }
    else {
      var alertPopup = $ionicPopup.alert({
        title: 'Email Invalid',
        template: 'This email was not found in our database.'
      });
    };
  }

  $scope.resetPassword = function() {
    $state.go('resetPassword');
  }
})

.controller('resetPasswordCtrl', function($scope, $ionicPopup,$state) {
  $scope.resetPassword = function() {
    $state.go('login');
  }
})

.controller('homeCtrl', function($scope, $ionicPopup, $state, Prototypes) {
  $scope.homeViewList = Prototypes.getViewList('tabs.home');
  $scope.$watchCollection(function () {
      return Prototypes.getViewList('tabs.home');
    }, function() {
    $scope.homeViewList = Prototypes.getViewList('tabs.home');
  });

  $scope.goToProduct = function(productName) {
    $state.go('productDetail', {id: productName});
  }
})

.controller('archiveCtrl', function($scope, $ionicPopup, $state, Prototypes) {
  $scope.prototype =  Prototypes.getViewList('tabs.archive');
  $scope.$watchCollection(function () {
      return Prototypes.getViewList('tabs.archive');
    }, function() {
    $scope.prototype = Prototypes.getViewList('tabs.archive');
  });

  $scope.goToProduct = function(productName) {
    $state.go('productDetail', {id: productName});
  }
})

.controller('productDetailCtrl', function($scope, $ionicPopup, $state, Prototypes, $stateParams, $cordovaSocialSharing, $cordovaInstagram, $ionicHistory) {
  $scope.prototype = Prototypes.get($stateParams.id);
  var happySmile = "./img/smile";
  var neutralSmile = "./img/smile2";
  var sadSmile = "./img/smile3";
  $scope.happySmileSrc=happySmile+".png";
  $scope.neutralSmileSrc=neutralSmile+".png";
  $scope.sadSmileSrc=sadSmile+".png";

  $scope.image = {data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFDNzcwRDdEMzI5RjExRTNCMDQxODIzRTEyRDZBM0IyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFDNzcwRDdFMzI5RjExRTNCMDQxODIzRTEyRDZBM0IyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUM3NzBEN0IzMjlGMTFFM0IwNDE4MjNFMTJENkEzQjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUM3NzBEN0MzMjlGMTFFM0IwNDE4MjNFMTJENkEzQjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71dbkLAAAPCElEQVR42uxdCZRU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", 
                  caption:"This is the BetaBox product image caption"}; 

  $scope.goToCompany = function(companyName) {
    $state.go('companyDetail', {id: companyName});
  }

  $scope.goBack = function() {
    $ionicHistory.goBack(-1);
  }

  $scope.productFeel = function(feelingId) {
    if(feelingId == 1) {
      $scope.happySmileSrc=happySmile+".png";
      $scope.neutralSmileSrc=neutralSmile+"_Gray.png";
      $scope.sadSmileSrc=sadSmile+"_Gray.png";
      var alertPopup = $ionicPopup.alert({
        title: 'Happy :)',
        template: 'Glad that you liked it'
      });
    } else if(feelingId == 2) {
      $scope.happySmileSrc=happySmile+"_Gray.png";
      $scope.neutralSmileSrc=neutralSmile+".png";
      $scope.sadSmileSrc=sadSmile+"_Gray.png";
      var alertPopup = $ionicPopup.alert({
        title: 'Neutral :|',
        template: 'Well, at least you did not hate it :P'
      });
    } else if(feelingId == 3) {
      $scope.happySmileSrc=happySmile+"_Gray.png";
      $scope.neutralSmileSrc=neutralSmile+"_Gray.png";
      $scope.sadSmileSrc=sadSmile+".png";
      var alertPopup = $ionicPopup.alert({
        title: 'Sad :(',
        template: 'We are sorry that you feel this way :('
      });
    }
    Prototypes.updateProductRating($scope.prototype.product.name, feelingId); 
  };

  $scope.shareAnywhere = function(message, subject, link) {
    $cordovaSocialSharing.share(message, subject, null, link);
  };

  $scope.shareViaFacebook = function(message, image, link) {
    $cordovaSocialSharing
    .shareViaFacebookWithPasteMessageHint(message, image, link)
    .then(function(result) {
      //success
    }, function(err) {
      //fail
    });
  };

  $scope.shareViaTwitter = function(message, image, link) {
    $cordovaSocialSharing
    .shareViaTwitter(message, image, link)
    .then(function(result) {
      //success
    }, function(err) {
      //fail
    });
  };

  $scope.shareViaInstagram = function(message, image, link) {
    $cordovaInstagram
    .share($scope.image.data, $scope.image.caption)
    .then(function() {
      //success
    }, function(err) {
      //fail
    });
  };  

  $scope.shareViaWhatsApp = function(message, image, link) {
    $cordovaSocialSharing
    .shareViaWhatsApp(message, image, link)
    .then(function(result) {
      //success
    }, function(err) {
      //fail
    });
  };

  $scope.openWebsite = function(link) {
    window.open(link, '_system');
  };

})

.controller('companyDetailCtrl', function($scope, $ionicPopup, $state, Prototypes, $stateParams, $cordovaSocialSharing, $cordovaInstagram, $ionicHistory) {
  $scope.prototype = Prototypes.getCompany($stateParams.id);
  $scope.productsList = Prototypes.getCompanyProducts($scope.prototype.company.name);
  $scope.image = {data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFDNzcwRDdEMzI5RjExRTNCMDQxODIzRTEyRDZBM0IyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFDNzcwRDdFMzI5RjExRTNCMDQxODIzRTEyRDZBM0IyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUM3NzBEN0IzMjlGMTFFM0IwNDE4MjNFMTJENkEzQjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUM3NzBEN0MzMjlGMTFFM0IwNDE4MjNFMTJENkEzQjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71dbkLAAAPCElEQVR42uxdCZRU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", 
                  caption:"This is the BetaBox product image caption"}; 

  $scope.goToProduct = function(productName) {
    $state.go('productDetail', {id: productName});
  }

  $scope.goBack = function() {
    $ionicHistory.goBack(-1);
  }

  $scope.openWebsite = function(link) {
    window.open(link, '_system');
  };
})

.controller('tabsCtrl', function($scope, $state, $ionicSideMenuDelegate, Prototypes, $ionicHistory) {
  var openMenuIcon = "ion-chevron-down";
  var closeMenuIcon = "ion-chevron-right";
  var ascendingIcon = "ion-arrow-up-b";
  var descendingIcon = "ion-arrow-down-b";
  $scope.sortIcon = closeMenuIcon;
  $scope.filterIcon = closeMenuIcon;

  $scope.sorting = false;
  $scope.ascendingSort = false;
  $scope.filtering = false;
  $scope.searching = false;
  var oldSelectedSort = 'none';
  
  $scope.sort = {};
  $scope.filter = {
    selectedCompany: "All",
    selectedRate: "All",
    selectedDuration: "All",
    selectedCategory: "All",
   };
  $scope.searchField = {};

  $scope.sortingOptions = [
    { text: "Product Name", value: "Product" },
    { text: "Company Name", value: "Company" },
    { text: "Distrbution Date", value: "Date" },
    { text: "Rate", value: "Rate" }
  ];

  var currentState = $ionicHistory.currentStateName();
  $scope.companiesList = Prototypes.getCompaniesList();

  $scope.$watch('sorting', function(newValue, oldValue) {
    if(newValue) {
      $scope.sortIcon = openMenuIcon;
      //$scope.filtering = false;
      $scope.searching = false;
    } else {
      $scope.sortIcon = closeMenuIcon;
    }
  });

  $scope.$watch('ascendingSort', function(newValue, oldValue) {
    if(newValue) {
      $scope.sort.direction = ascendingIcon;
    } else {
      $scope.sort.direction = descendingIcon;
    }
  });

  $scope.$watch('filtering', function(newValue, oldValue) {
    if(newValue) {
      $scope.filterIcon = openMenuIcon;
      //$scope.sorting = false;
      $scope.searching = false;
    } else {
      $scope.filterIcon = closeMenuIcon;
    }
  });

  $scope.$watch('searching', function(newValue, oldValue) {
    if(newValue) {
      $scope.sorting = false;
      $scope.filtering = false;
    } else {
      
    }
  });

   $scope.$watch(function () {
      return $ionicHistory.currentStateName();
    },
       function () {
      currentState = $ionicHistory.currentStateName();
    });
  
  $scope.toggleMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  }
  $scope.sort = function () {
    $scope.sorting = !$scope.sorting;
  }
  $scope.changeSortDirection = function () {
    if($scope.sort.selected == oldSelectedSort)
      $scope.ascendingSort = !$scope.ascendingSort;
    else
      oldSelectedSort = $scope.sort.selected;

  }
  $scope.filter = function () {
    $scope.filtering = !$scope.filtering;
  }
  $scope.search = function () {
    $scope.searching = !$scope.searching;
  }
  $scope.applyOptions = function () {
    $scope.toggleMenu();
    if($scope.searching) {
      Prototypes.search($scope.searchField.data);
      $state.go('searchResults');
    } else
      Prototypes.filterAndSort(currentState, $scope.sort.selected, $scope.ascendingSort, $scope.filter.selectedCompany, $scope.filter.selectedRate, $scope.filter.selectedDuration, $scope.filter.selectedCategory);
  }
})

.controller('searchResultsCtrl', function($scope, $state, Prototypes, $ionicHistory) {
  $scope.searchResults = Prototypes.getSearchResults();
  $scope.$watchCollection(function () {
      return Prototypes.getSearchResults();
    }, function() {
    $scope.searchResults = Prototypes.getSearchResults();
  });

  $scope.goToResult = function(resultName, resultType) {
    if(resultType == "Product")
      $state.go('productDetail', {id: resultName});
    else if(resultType == "Company")
      $state.go('companyDetail', {id: resultName});
  }

  $scope.goBack = function() {
    $ionicHistory.goBack(-1);
  }
});
