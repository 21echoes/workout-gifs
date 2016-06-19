define(function() {
    return function(menuItems, selectedItemListener) {
        return {
            selectedItemIndex: null,
            menuItems: menuItems,

            getSelectedItem: function() {
                if (!this.hasSelectedItem()) {
                    return null;
                }
                return this.menuItems[this.selectedItemIndex];
            },

            setSelectedItem: function(index) {
                if (index !== this.selectedItemIndex) {
                    this.selectedItemIndex = index;
                    if (selectedItemListener) {
                        selectedItemListener(this);
                    }
                }
            },

            hasSelectedItem: function() {
                return this.selectedItemIndex !== null;
            }
        }
    };
});
