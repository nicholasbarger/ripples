xdescribe('IdeIndexController', function() {
    
    beforeEach(inject(function ($rootScope, $controller, _ideIndexService_, _ripples_) {
        ideIndexService = _ideIndexService_;
        rippes = _ripples_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('IdeIndexController', {
                '$scope': scope
            });
        };
    }));

    xit('should have a method to check if the path is active', function() {
        var controller = createController();
        $location.path('/about');
        expect($location.path()).toBe('/about');
        expect(scope.isActive('/about')).toBe(true);
        expect(scope.isActive('/contact')).toBe(false);
    });
});