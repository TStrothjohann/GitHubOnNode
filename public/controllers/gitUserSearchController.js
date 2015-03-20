githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  $scope.searchTerm = {
    text: "Search a GitHub user"
  };

  $scope.doSearch = function(){
    

    var queryURL = 'https://api.github.com/search/users'
    var searchResource = $resource(queryURL);

    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm.text,
      access_token: auth["clientToken"]
    });
    console.log($scope.searchResult)
  };
});