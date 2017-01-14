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
            console.log('selectedItem', selectedItem);
            require([selectedItem.path], function(routine) {
              console.log('routine', routine);
                RoutineController(routine);
            })
        }
    });
    var menuControllerInstance = MenuController(menuStateInstance);
    menuControllerInstance.setup();
});
