define(function() {
    return function(menuState) {
        console.log('have menu state', menuState);
        return {
            render: function() {
                var menuElem = document.getElementById("menu");
                var routineElem = document.getElementById("routine");
                var selectedItem = menuState.getSelectedItem();
                if (selectedItem) {
                    menuElem.style.display = 'none';
                    routineElem.style.display = 'block';
                } else {
                    menuElem.style.display = 'block';
                    routineElem.style.display = 'none';
                }
                self = this;
                window.requestAnimationFrame(function() {self.render()});
            },

            initialRender: function() {
                var menuListElem = document.getElementById("routine-options");
                while (menuListElem.firstChild) {
                    menuListElem.removeChild(menuListElem.firstChild);
                }
                var self = this;
                for (var index in menuState.menuItems) {
                    var menuItem = menuState.menuItems[index];
                    var newMenuItemElem = document.createElement("li");
                    newMenuItemElem.addEventListener('click', this.onClickMenuItem, false);
                    newMenuItemElem.innerHTML = menuItem.title;
                    newMenuItemElem.setAttribute('data-index', index);
                    menuListElem.appendChild(newMenuItemElem);
                }
            },

            onClickMenuItem: function(event) {
                var index = parseInt(event.originalTarget.getAttribute('data-index'), 10);
                menuState.setSelectedItem(index);
            },

            setup: function() {
                this.initialRender();
                this.render();
            },
        };
    }
});
