/**
 * @name StatusScheduler
 * @author b3nb0t5000
 * @description BetterDiscord plugin to schedule / time Discord statuses (online, idle, DND, etc.)
 * @version 0.0.1
 * @authorId 438423191946526720
 * @authorLink https://twitter.com/pr1ncess_emily
 * @source https://github.com/b3nb0t5000/BetterDiscord-Plugins/blob/main/StatusScheduler/status-scheduler.plugin.js
 */

module.exports = class StatusScheduler {

        // Meta (i know i already added a meta but i'm gonna add another one cause i'm just like that)
        getName() {
            return "StatusScheduler";
        }
        getDescription() {
            return "BetterDiscord plugin to schedule / time Discord statuses (online, idle, DND, etc.)";
        }
        getVersion() {
            return "0.0.1";
        }
        getAuthor() {
            return "b3nb0t5000";
        }

        // Settings panel
        getSettingsPanel() {
            return "<-- This is my BetterDiscord Status Scheduler plugin that I have no idea how I'm gonna code! !-->";
        }

        // plugin start
        start() {
            //throwing error if zeres library isn't present
            if (!global.ZeresPluginLibrary) {
                return window.BdApi.alert("Library missing", "A library required for this program to run is missing. You can install it from <a href="
                    https: //raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">here</a>.");
                }
            }

            var separator = ZLibrary.DOMTools.createElement('<div>');
            ZLibrary.DOMTools.addClass(separator, "separator-2 I32lJ da-separator");
            var menuButton = ZLibrary.DOMTools.createElement('<p>Set Status timer...</p>');
            var statusPicker = ZLibrary.DOMTools.Q('#status-picker');
            ZLibrary.DOMTools.prependTo(separator, statusPicker);
            ZLibrary.DOMTools.prepentTo(menuButton, statusPicker);

            // plugin stop
            stop() {} // Required function. Called when the plugin is deactivated

        }
