requirejs([
    './models/menu-state',
    './models/menu-items',
    './controllers/menu-controller',
    './controllers/routine-controller',
    'require'
], function (
    MenuState,
    menuItems,
    MenuController,
    RoutineController,
    require
) {
    var menuStateInstance = MenuState(menuItems, function(state) {
        if (state.hasSelectedItem()) {
            var selectedItem = state.getSelectedItem();
            require([selectedItem.path], function(routine) {
                RoutineController(routine);
            })
        }
    });
    console.log('making menu controller');
    var menuControllerInstance = MenuController(menuStateInstance);
    menuControllerInstance.setup();
});
