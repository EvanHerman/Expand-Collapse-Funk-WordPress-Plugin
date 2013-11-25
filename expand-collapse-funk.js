(function() {
        tinymce.create('tinymce.plugins.expandCollapseFunk', {
                init : function(ed, url) {
                        ed.addButton('expandCollapseFunk', {
                                title : 'Expand/Collapse Functionality',
                                cmd : 'mceExample',
                                image : url + '/toggle_expand.png',
                                onclick : function() {
                                    tb_show("", "../wp-content/plugins/expandcollapse-funk/expand-collapse-funk-modal.php?");
									tinymce.DOM.setStyle(["TB_overlay", "TB_window", "TB_load"], "z-index", "999999");
								}
                        });
                },
 
                getInfo : function() {
                        return {
                                longname : 'Expand/Collapse Functionality',
                                author : 'Evan Herman',
                                version : "1.0"
                        };
                }
        });
 
        tinymce.PluginManager.add('expandCollapseFunk', tinymce.plugins.expandCollapseFunk);
})();