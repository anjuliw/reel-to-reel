import Ember from 'ember';

var plan0 = ["",			// cludge here to avoid indent
		"+--------------------------+",
            "|                          |",
            "|~-~~~~~~~-~~~~~-~~~~~~~-~~|",
            "|                          |",
            "|                          |",
            "|       __                 |",
            "|    |\\/ o\\                |",
            "|    |/\\__/                |",
            "|                          |",
            "|                          |",
            "|                          |",
            "+==========================+"].join('\n');

var plan1 = ["",			// cludge here to avoid indent
		"+--------------------------+",
            "|                          |",
            "|-~~~~~~~-~~~~~~~-~~~~~~~-~|",
            "|                          |",
            "|                          |",
            "|       __                 |",
            "|    |\\/ o\\o               |",
            "|    |/\\__/                |",
            "|                          |",
            "|                          |",
            "|                          |",
            "+==========================+"].join('\n');

var plan2 = ["",			// cludge here to avoid indent
		"+--------------------------+",
            "|                          |",
            "|~~~~~~~-~~~~~~~~~-~~~~~~~-|",
            "|                          |",
            "|                          |",
            "|       __  o              |",
            "|    |\\/ o\\                |",
            "|    |/\\__/                |",
            "|                          |",
            "|                          |",
            "|                          |",
            "+==========================+"].join('\n');

var plan3 = ["",			// cludge here to avoid indent
		"+--------------------------+",
            "|                          |",
            "|~~~~~~-~~~~~~~~~~~-~~~~~~~|",
            "|                          |",
            "|           o              |",
            "|       __                 |",
            "|    |\\/ o\\                |",
            "|    |/\\__/                |",
            "|                          |",
            "|                          |",
            "|                          |",
            "+==========================+"].join('\n');

var plan4 = ["",			// cludge here to avoid indent
		"+--------------------------+",
            "|                          |",
            "|~~~~~-~~~~~~~~~~~~~-~~~~~~|",
            "|            O             |",
            "|                          |",
            "|       __                 |",
            "|    |\\/ o\\                |",
            "|    |/\\__/                |",
            "|                          |",
            "|                          |",
            "|                          |",
            "+==========================+"].join('\n');

var plan5 = ["",			// cludge here to avoid indent
		"+--------------------------+",
            "|                          |",
            "|~~~~-~~~~~~~@~~~~~~~-~~~~~|",
            "|                          |",
            "|                          |",
            "|       __                 |",
            "|    |\\/ o\\                |",
            "|    |/\\__/                |",
            "|                          |",
            "|                          |",
            "|                          |",
            "+==========================+"].join('\n');
var plan6 = ["",			// cludge here to avoid indent
		"+--------------------------+",
            "|            ,             |",
            "|~~~-~~~~~~~-~-~~~~~~~-~~~~|",
            "|                          |",
            "|                          |",
            "|       __                 |",
            "|    |\\/ o\\                |",
            "|    |/\\__/                |",
            "|                          |",
            "|                          |",
            "|                          |",
            "+==========================+"].join('\n');
var plan7 = ["",			// cludge here to avoid indent
		"+--------------------------+",
            "|                          |",
            "|~~-~~~~~~~-~~~-~~~~~~~-~~~|",
            "|                          |",
            "|                          |",
            "|       __                 |",
            "|    |\\/ o\\                |",
            "|    |/\\__/                |",
            "|                          |",
            "|                          |",
            "|                          |",
            "+==========================+"].join('\n');            


export default Ember.Object.extend({
      frames: [plan0, plan1, plan2, plan3, plan4, plan5, plan6, plan7],

      width: "28em",
      height: "12em",
      current: 0
});
