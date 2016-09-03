var tagMod = {};
var self = this;

self.embedCustomArt = function(tag) {
    GameDev.ResourceManager.resources[ResourceKeys.Level1] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.Level1].src = '' + tag.level1 + '';
    /*
		GameDev.ResourceManager.resources[ResourceKeys.Level2] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.Level2].src = '' + tag.level2 + '';

		GameDev.ResourceManager.resources[ResourceKeys.Level3] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.Level3].src = '' + tag.level3 + '';

		GameDev.ResourceManager.resources[ResourceKeys.Level4] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.Level4].src = '' + tag.level4 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewChair] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewChair].src = '' + tag.chair + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewPants1] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewPants1].src = '' + tag.pants + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewPants9] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewPants9].src = '' + tag.pants9 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHands1] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHands1].src = '' + tag.hands1 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHands4] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHands4].src = '' + tag.hands4 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHands5] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHands5].src = '' + tag.hands5 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHands9] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHands9].src = '' + tag.hands9 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHands10] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHands10].src = '' + tag.hands10 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHands12] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHands12].src = '' + tag.hands12 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody1] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody1].src = '' + tag.body1 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody2] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody2].src = '' + tag.body2 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody3] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody3].src = '' + tag.body3 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody4] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody4].src = '' + tag.body4 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody5] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody5].src = '' + tag.body5 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody6] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody6].src = '' + tag.body6 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody7] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody7].src = '' + tag.body7 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody8] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody8].src = '' + tag.body8 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody9] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody9].src = '' + tag.body9 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody10] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody10].src = '' + tag.body10 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody11] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewBody11].src = '' + tag.body11 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewBody12] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.Level12].src = '' + tag.body12 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead1] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead1].src = '' + tag.head1 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead2] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead2].src = '' + tag.head2 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead3] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead3].src = '' + tag.head3 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead4] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead4].src = '' + tag.head4 + '';

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead5] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead5].src = '' + tag.head5 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead6] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead6].src = '' + tag.head6 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead7] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead7].src = '' + tag.head7 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead8] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead8].src = '' + tag.head8 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead9] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead9].src = '' + tag.head9 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead10] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead10].src = '' + tag.head10 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead11] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.PreviewHead11].src = '' + tag.head11 + ''

		GameDev.ResourceManager.resources[ResourceKeys.PreviewHead12] = new Image();
    GameDev.ResourceManager.resources[ResourceKeys.Head12].src = '' + tag.head12 + ''
*/

GameDev.ResourceManager.resources[ResourceKeys.PreviewDesk].src = '' + tag.desk + '';

if (tag.desk.val.length > 0) {
    GameDev.ResourceManager.resources[ResourceKeys.PreviewDesk] = new Image();
}
   else {
     GameDev.ResourceManager.resources[ResourceKeys.PreviewDesk] = GameDev.ResourceManager.resources[ResourceKeys.PreviewDesk];
   }

};



var level1Change = function() {
    self.embedCustomArt({
        // desk: "./images/player/head1.png",
        level1: "./mods/OverImage/images/level1.png"
    });
}
level1Change();
